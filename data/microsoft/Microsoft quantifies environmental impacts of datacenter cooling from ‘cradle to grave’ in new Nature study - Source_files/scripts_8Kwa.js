(()=>{
    let isNLChatOpened = false;
    let $button = null;
    let $newform = null;
    let $iframe = null;
    let uhfInitialized = false;
    let savedScrollPosition = 0; // Store scroll position when iframe opens
    const preventParentScroll = (event) => {
        event.preventDefault();
    };

    // Default categories when none are provided from WordPress
    const DEFAULT_CATEGORIES = [
        { name: 'AI', slug: 'ai', description: 'Discover how AI is shaping the future, empowering people to do more and help solve the world\'s most pressing challenges' },
        { name: 'Digital Transformation', slug: 'digital-transformation', description: 'See how businesses of all sizes are transforming their operations with the latest technology' },
        { name: 'Innovation', slug: 'innovation', description: 'Microsoft research, products and services that improve lives and have the potential to change the world' },
        { name: 'Sustainability', slug: 'sustainability', description: 'See how Microsoft is accelerating progress toward a more sustainable future and helping customers do the same' }
    ];

    // Escape HTML entities to prevent XSS
    const escapeHtml = (str) => {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    // Decode HTML entities (for data that comes pre-encoded from WordPress)
    const decodeHtml = (str) => {
        if (!str) return '';
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };

    const loadDropdownImages = (container) => {
        const icons = container.querySelectorAll('.nlweb-dropdown-item-icon[data-image]');
        icons.forEach((icon) => {
            if (icon.dataset.loaded === 'true') {
                return;
            }
            const src = icon.getAttribute('data-image');
            if (!src) {
                return;
            }
            const img = new Image();
            img.onload = () => {
                icon.style.backgroundImage = `url('${src}')`;
                icon.classList.add('is-loaded');
                icon.dataset.loaded = 'true';
            };
            img.onerror = () => {
                icon.dataset.loaded = 'true';
            };
            img.src = src;
        });
    };

    // ===========================================
    // Analytics Module (Consent-Aware) - Azure Application Insights
    // ===========================================
    const NLWebAnalytics = {
        canTrack: false,
        userId: null,
        sessionId: null,
        consentResolved: false,
        pendingEvents: [],
        isDevEnv: window.location.hostname === 'nlwebsearchdev.wpenginepowered.com',
        // Azure Application Insights config (same as feedback analytics)
        config: {
            instrumentationKey: '27f4c81b-a4d3-4b46-b6ea-c05cc103257d',
            ingestionEndpoint: 'https://eastus-8.in.applicationinsights.azure.com/'
        },

        init() {
            // Generate session ID (no consent needed - not persisted)
            this.sessionId = this.generateId();

            // Try to initialize consent checking
            this.initConsentChecking();
        },

        initConsentChecking() {
            // Check consent via Microsoft's WcpConsent
            if (window.WcpConsent) {
                // Register for future consent changes
                WcpConsent.onInitCallback(() => this.checkConsent());
                WcpConsent.onConsentChanged(() => this.checkConsent());

                // Also check immediately in case consent is already initialized
                if (window.siteConsent) {
                    this.checkConsent();
                }
            } else {
                // WcpConsent not available yet - retry a few times
                // This handles cases where our script loads before UHF
                let retryCount = 0;
                const maxRetries = 10;
                const retryInterval = setInterval(() => {
                    retryCount++;
                    if (window.WcpConsent) {
                        clearInterval(retryInterval);
                        WcpConsent.onInitCallback(() => this.checkConsent());
                        WcpConsent.onConsentChanged(() => this.checkConsent());
                        if (window.siteConsent) {
                            this.checkConsent();
                        }
                    } else if (retryCount >= maxRetries) {
                        clearInterval(retryInterval);
                        // Consent system not available - drop queued events
                        this.consentResolved = true;
                        this.pendingEvents = [];
                    }
                }, 500);
            }
        },

        checkConsent() {
            if (!window.siteConsent) return;

            const consent = siteConsent.getConsent();
            const hadConsent = this.canTrack;
            this.canTrack = consent.Analytics === true;
            this.consentResolved = true;

            if (this.canTrack) {
                // Analytics consent granted - get or create persistent user ID
                this.userId = this.getOrCreateUserId();
                this.flushPendingEvents();
            } else if (hadConsent && !this.canTrack) {
                // Consent was revoked - clear user ID cookie
                this.clearUserId();
                this.userId = null;
            }
            if (!this.canTrack) {
                this.pendingEvents = [];
            }
        },

        generateId() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                const r = Math.random() * 16 | 0;
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        },

        getOrCreateUserId() {
            const cookieName = 'nlweb_uid';
            const existing = document.cookie.split(';').find(c => c.trim().startsWith(cookieName + '='));

            if (existing) {
                return existing.split('=')[1];
            }

            // Create new user ID with 1 year expiry
            const newId = this.generateId();
            const expiry = new Date();
            expiry.setFullYear(expiry.getFullYear() + 1);
            const secureFlag = window.location.protocol === 'https:' ? ';Secure' : '';
            document.cookie = `${cookieName}=${newId};expires=${expiry.toUTCString()};path=/;SameSite=Lax${secureFlag}`;
            return newId;
        },

        clearUserId() {
            const secureFlag = window.location.protocol === 'https:' ? ';Secure' : '';
            document.cookie = `nlweb_uid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;SameSite=Lax${secureFlag}`;
        },

        enqueueEvent(eventName, properties) {
            const MAX_PENDING = 50;
            if (this.pendingEvents.length >= MAX_PENDING) {
                this.pendingEvents.shift();
            }
            this.pendingEvents.push({ eventName, properties });
        },

        flushPendingEvents() {
            if (!this.canTrack || this.pendingEvents.length === 0) {
                this.pendingEvents = [];
                return;
            }
            const events = this.pendingEvents.slice();
            this.pendingEvents = [];
            events.forEach((event) => {
                this.track(event.eventName, event.properties);
            });
        },

        // Send event to Azure Application Insights
        track(eventName, properties = {}) {
            // GDPR: Only send analytics if user has given Analytics consent
            if (this.isDevEnv || !this.canTrack) {
                if (!this.consentResolved) {
                    this.enqueueEvent(eventName, properties);
                }
                return;
            }

            const timestamp = new Date().toISOString();

            // Build properties object
            const eventProperties = {
                ...properties,
                sessionId: this.sessionId,
                pageUrl: window.location.href,
                source: 'nlweb-search-plugin'
            };

            // Include userId since we have consent
            if (this.userId) {
                eventProperties.userId = this.userId;
            }

            // Azure Application Insights payload format
            const payload = {
                name: 'Microsoft.ApplicationInsights.Event',
                time: timestamp,
                iKey: this.config.instrumentationKey,
                data: {
                    baseType: 'EventData',
                    baseData: {
                        name: eventName,
                        properties: eventProperties
                    }
                }
            };

            // Send to Application Insights
            fetch(`${this.config.ingestionEndpoint}v2/track`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
            }).catch(() => {});
        },

        // Convenience methods for common events
        trackSearch(query, source = 'iframe') {
            this.track('search_query', { searchSource: source });
        },

        trackResultClick(query, resultUrl, resultPosition) {
            this.track('result_click', {
                resultUrl,
                resultPosition: String(resultPosition)
            });
        },

        trackAutocompleteSelect(query, suggestion, category) {
            this.track('autocomplete_select', { category });
        },

        trackFeedback(responseId, isPositive, query) {
            this.track('feedback', {
                responseId,
                isPositive: String(isPositive)
            });
        },

        trackFollowUp(originalQuery, followUpQuery) {
            this.track('followup_question', {});
        },

        trackError(errorType, errorMessage, context = {}) {
            this.track('error', { errorType, errorMessage, ...context });
        }
    };

    // Initialize analytics
    NLWebAnalytics.init();

    function preventNativeSearchEvent(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === 'function') {
            e.stopImmediatePropagation();
        }
    }

    function toggleHeaderSearch(e) {
        if (e) {
            preventNativeSearchEvent(e);
        }

        // Ensure iframe exists before trying to use it
        ensureIframeExists();
        $iframe = document.querySelector('[nlweb-search-iframe]');

        if ($iframe) {
            if (!isNLChatOpened) {
                openIframe(undefined, 'header');
            }
            else {
                closeIframe();
            }
        }
    }

    function findModernUHFSearchFromEvent(event) {
        const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
        return path.find((node) => (
            node &&
            node.nodeType === Node.ELEMENT_NODE &&
            typeof node.matches === 'function' &&
            node.matches('uhf-search')
        ));
    }

    function initializeModernUHFSearch($modernSearch) {
        if ($modernSearch.hasAttribute('data-nlweb-uhf-bound')) {
            uhfInitialized = true;
            return true;
        }

        $modernSearch.setAttribute('data-nlweb-uhf-bound', 'true');

        document.addEventListener('click', (e) => {
            if (findModernUHFSearchFromEvent(e)) {
                toggleHeaderSearch(e);
            }
        }, true);

        document.addEventListener('keydown', (e) => {
            if (
                findModernUHFSearchFromEvent(e) &&
                (e.key === 'Enter' || e.key === ' ')
            ) {
                toggleHeaderSearch(e);
            }
        }, true);

        uhfInitialized = true;
        return true;
    }

    // Function to initialize UHF search button replacement
    function initializeUHFSearch() {
        // Skip if already initialized
        if (uhfInitialized) return true;

        const $oldSearchForm = document.querySelector('.c-search');
        if (!$oldSearchForm) {
            const $modernSearch = document.querySelector('uhf-search');
            if ($modernSearch) {
                return initializeModernUHFSearch($modernSearch);
            }
            return false;
        }

        // Create new button
        $button = document.createElement('button');
        $button.id = 'search';
        $button.setAttribute('nlweb-search-buton', true);
        $button.setAttribute('aria-label', 'Search');
        $button.classList.add('nlweb-search-button');
        $button.innerHTML = `
            <span role="presentation" style="overflow-x: visible;">Search</span>
            <span role="tooltip" class="c-uhf-tooltip c-uhf-search-tooltip" style="overflow-x: visible;">Search news.microsoft.com/source</span>
        `;

        $newform = document.createElement('div');
        $oldSearchForm.parentNode.replaceChild($newform, $oldSearchForm);
        $newform.appendChild($button);

        $newform.addEventListener('click', (e)=>{
            preventNativeSearchEvent(e);
        });

        $button.addEventListener('click', toggleHeaderSearch);

        uhfInitialized = true;
        return true;
    }

    // Try to initialize immediately
    initializeUHFSearch();

    // If not found, set up a MutationObserver to watch for UHF loading
    if (!uhfInitialized) {
        const observer = new MutationObserver(() => {
            if (initializeUHFSearch()) {
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Also retry with intervals (fallback)
        let retryCount = 0;
        const maxRetries = 20; // Try for ~10 seconds
        const retryInterval = setInterval(() => {
            retryCount++;
            if (initializeUHFSearch() || retryCount >= maxRetries) {
                clearInterval(retryInterval);
                if (!uhfInitialized && retryCount >= maxRetries) {
                    // UHF search form not found - may not be present on this page
                }
            }
        }, 500);
    }


    function closeIframe() {
        isNLChatOpened = false;
        $iframe.style.display = 'none';

        // Restore scroll position before removing scroll lock (iOS Safari fix)
        document.body.style.top = '';
        document.body.classList.remove('nlweb-scroll-locked');
        document.removeEventListener('touchmove', preventParentScroll, { passive: false });
        window.scrollTo(0, savedScrollPosition);

        $iframe.contentWindow.postMessage(
            { action: 'hide', payload: '' },
            '*'
        );

        // Return focus to the trigger element (search input or button)
        const searchInput = document.querySelector('[data-nlweb-search-input]');
        if (searchInput) {
            searchInput.focus();
        } else if ($button) {
            $button.focus();
        }
    }

    function openIframe(query, source = 'direct') {
        isNLChatOpened = true;
        $iframe.style.display = 'block';

        // Save scroll position, scroll to top, then lock body scroll (iOS Safari fix)
        savedScrollPosition = window.scrollY;
        window.scrollTo(0, 0);
        document.body.style.top = '0px';
        document.body.classList.add('nlweb-scroll-locked');
        document.addEventListener('touchmove', preventParentScroll, { passive: false });

        // Check if iframe is newly created and not yet loaded
        const isNewlyCreated = $iframe.getAttribute('data-newly-created') === 'true';
        const isLoaded = $iframe.getAttribute('data-loaded') === 'true';

        // Function to focus iframe and its content
        const focusIframe = () => {
            $iframe.focus();
            $iframe.contentWindow.postMessage({ action: 'focus' }, '*');
        };

        // Message payload includes source for analytics
        const messagePayload = { action: 'show', payload: query, source: source };

        if (isNewlyCreated && !isLoaded) {
            // Wait for iframe to load before sending message
            const loadHandler = () => {
                $iframe.contentWindow.postMessage(messagePayload, '*');
                $iframe.removeEventListener('load', loadHandler);
                // Focus after load
                setTimeout(focusIframe, 50);
            };
            $iframe.addEventListener('load', loadHandler);
        } else {
            // Iframe already loaded, send message immediately
            $iframe.contentWindow.postMessage(messagePayload, '*');

            // Also send after a short delay as fallback
            setTimeout(() => {
                if ($iframe && $iframe.contentWindow) {
                    $iframe.contentWindow.postMessage(messagePayload, '*');
                }
            }, 100);

            // Focus the iframe
            setTimeout(focusIframe, 50);
        }
    }

    // Handle search bars from shortcode
    function initializeSearchBars() {
        const searchBars = document.querySelectorAll('[data-nlweb-search-bar="true"]');

        searchBars.forEach(searchBar => {
            const searchInput = searchBar.querySelector('[data-nlweb-search-input]');
            const searchDropdown = searchBar.querySelector('[data-nlweb-search-dropdown]');
            const categoriesData = searchBar.getAttribute('data-categories');
            const categories = categoriesData ? JSON.parse(categoriesData) : [];

            // Autocomplete functionality
            let autocompleteCache = new Map();
            let autocompleteDebounceTimer = null;
            let selectedSuggestionIndex = -1;
            let isPerformingSearch = false;
            
            // Handle form submission
            searchBar.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const query = searchInput.value.trim();
                if (query) {
                    isPerformingSearch = true;
                    clearTimeout(autocompleteDebounceTimer); // Cancel any pending autocomplete
                    hideDropdown(); // Ensure dropdown is hidden

                    // Ensure iframe exists
                    ensureIframeExists();
                    $iframe = document.querySelector('[nlweb-search-iframe]');
                    if ($iframe) {
                        // Blur the input to prevent focus event
                        searchInput.blur();
                        // Pass source so iframe knows where search originated
                        openIframe(query, 'homepage');
                    }
                    // Keep the flag active longer to prevent focus trigger
                    setTimeout(() => { isPerformingSearch = false; }, 2000);
                }
                return false;
            });
            
            // Handle dropdown functionality
            function showDropdown() {
                if (categories.length > 0 && !searchInput.value.trim() && !isNLChatOpened) {
                    populateDropdown();
                    searchDropdown.classList.add('active');
                }
            }
            
            function hideDropdown() {
                searchDropdown.classList.remove('active');
                selectedSuggestionIndex = -1;
            }

            function updateSelectedSuggestion(suggestions) {
                suggestions.forEach((item, index) => {
                    if (index === selectedSuggestionIndex) {
                        item.classList.add('selected');
                        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    } else {
                        item.classList.remove('selected');
                    }
                });
            }

            async function fetchAutocomplete(query) {
                // Don't show autocomplete if search is in progress
                if (isPerformingSearch) return;

                // Check cache first
                const cacheKey = query.toLowerCase();
                if (autocompleteCache.has(cacheKey)) {
                    displayAutocompleteSuggestions(autocompleteCache.get(cacheKey));
                    return;
                }

                // Show loading state (check again in case search started)
                if (isPerformingSearch) return;
                showAutocompleteLoading();

                // Get categories from shortcode categories
                let categoryNames = categories.map(cat => cat.slug || cat.name.toLowerCase());
                if (categoryNames.length === 0) {
                    // Fallback to default categories if none are set
                    categoryNames = DEFAULT_CATEGORIES.map(cat => cat.slug);
                }

                const apiUrl = `https://nlweb-source-aefyhee7bqhbd5ht.b01.azurefd.net/ask?generate_mode=autocomplete&text=${encodeURIComponent(query)}&categories=${categoryNames.join(',')}&suggestions_per_category=3`;

                try {
                    const response = await fetch(apiUrl);

                    // Check for non-OK responses (e.g., 429 throttling)
                    if (!response.ok) {
                        showAutocompleteError('Too many requests. Please wait a moment and try again.');
                        return;
                    }

                    const reader = response.body.getReader();
                    const decoder = new TextDecoder();
                    let buffer = '';
                    const suggestions = {};
                    let categoryOrder = [];

                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        buffer += decoder.decode(value, { stream: true });
                        const lines = buffer.split('\n');
                        buffer = lines.pop();

                        for (const line of lines) {
                            // Try to parse as SSE format first
                            if (line.startsWith('data: ')) {
                                try {
                                    const data = JSON.parse(line.slice(6));

                                    // Handle error responses (e.g., throttling)
                                    if (data.message_type === 'error') {
                                        showAutocompleteError(data.error || 'An error occurred. Please try again.');
                                        return;
                                    }

                                    if (data.message_type === 'autocomplete_start' && data.categories) {
                                        // Initialize dropdown structure with categories in editorial order
                                        // But only if search hasn't started
                                        if (!isPerformingSearch) {
                                            categoryOrder = data.categories;
                                            initializeAutocompleteStructure(categoryOrder);
                                        }
                                    } else if (data.message_type === 'autocomplete_category') {
                                        suggestions[data.category] = data.suggestions;

                                        // Immediately display this category's suggestions as they stream in
                                        // But only if search hasn't started
                                        const currentQuery = searchInput.value.trim();
                                        if (currentQuery && !isPerformingSearch) {
                                            updateCategorySuggestions(data.category, data.suggestions);
                                        }
                                    } else if (data.message_type === 'autocomplete_complete') {
                                        // Cache the results
                                        const currentQuery = searchInput.value.trim();
                                        if (currentQuery) {
                                            autocompleteCache.set(cacheKey, suggestions);
                                            // Clean up old cache entries if too many
                                            if (autocompleteCache.size > 50) {
                                                const firstKey = autocompleteCache.keys().next().value;
                                                autocompleteCache.delete(firstKey);
                                            }
                                        }
                                    }
                                } catch (e) {
                                    // Error parsing autocomplete SSE data - skip
                                }
                            }
                        }
                    }
                } catch (error) {
                    // Autocomplete error - silently fail
                    // Fall back to showing recommended categories (only if not searching)
                    if (!isNLChatOpened && !isPerformingSearch) {
                        showDropdown();
                    }
                }
            }

            function showAutocompleteError(message) {
                let html = '';

                // Show categories without suggestions
                if (categories.length > 0) {
                    categories.forEach(category => {
                        html += `
                            <div class="nlweb-dropdown-item nlweb-category-item" data-category="${escapeHtml(category.slug || decodeHtml(category.name).toLowerCase())}" data-query="${escapeHtml(decodeHtml(category.name))}">
                                <div class="nlweb-dropdown-item-icon${category.image ? ' has-image' : ''}" ${category.image ? `data-image="${escapeHtml(category.image)}"` : ''}></div>
                                <div class="nlweb-dropdown-item-content">
                                    <div class="nlweb-dropdown-item-title">${escapeHtml(decodeHtml(category.name))}</div>
                                    <div class="nlweb-dropdown-item-desc">${escapeHtml(decodeHtml(category.description)) || `Explore articles about ${escapeHtml(decodeHtml(category.name)).toLowerCase()}`}</div>
                                </div>
                            </div>
                        `;
                    });
                }

                // Add error message at the bottom
                html += `
                    <div class="nlweb-dropdown-error">
                        <svg class="nlweb-dropdown-error-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
                        </svg>
                        <span>${escapeHtml(message)}</span>
                    </div>
                `;

                searchDropdown.innerHTML = html;
                loadDropdownImages(searchDropdown);
                searchDropdown.classList.add('active');

                // Use pointerdown to prevent blur, click for action (fixes Safari swipe-as-click issue)
                searchDropdown.querySelectorAll('.nlweb-category-item').forEach(item => {
                    item.addEventListener('pointerdown', (e) => {
                        e.preventDefault(); // Prevents blur from firing before click
                    });
                    item.addEventListener('click', (e) => {
                        const query = item.dataset.query;
                        searchInput.value = query;
                        hideDropdown();
                        isPerformingSearch = true;
                        ensureIframeExists();
                        $iframe = document.querySelector('[nlweb-search-iframe]');
                        if ($iframe) {
                            searchInput.blur();
                            openIframe(query, 'category');
                        }
                        setTimeout(() => { isPerformingSearch = false; }, 2000);
                    });
                });
            }

            function showAutocompleteLoading() {
                let loadingHTML = '';

                // Show actual categories if we have them, with loading skeletons for suggestions
                if (categories.length > 0) {
                    categories.forEach(category => {
                        loadingHTML += `
                            <div class="nlweb-dropdown-item nlweb-category-item" data-category="${escapeHtml(category.slug || decodeHtml(category.name).toLowerCase())}" data-query="${escapeHtml(decodeHtml(category.name))}">
                                <div class="nlweb-dropdown-item-icon${category.image ? ' has-image' : ''}" ${category.image ? `data-image="${escapeHtml(category.image)}"` : ''}></div>
                                <div class="nlweb-dropdown-item-content">
                                    <div class="nlweb-dropdown-item-title">${escapeHtml(decodeHtml(category.name))}</div>
                                    <div class="nlweb-dropdown-item-desc">${escapeHtml(decodeHtml(category.description)) || `Explore articles about ${escapeHtml(decodeHtml(category.name)).toLowerCase()}`}</div>
                                </div>
                            </div>
                            <div class="nlweb-dropdown-suggestions" data-category="${escapeHtml(categorySlug)}">
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 180px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 150px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 170px;"></div>
                                </div>
                            </div>
                        `;
                    });
                } else {
                    // Fallback for default categories
                    DEFAULT_CATEGORIES.forEach(category => {
                        loadingHTML += `
                            <div class="nlweb-dropdown-item nlweb-category-item" data-category="${escapeHtml(category.slug)}" data-query="${escapeHtml(category.name)}">
                                <div class="nlweb-dropdown-item-icon"></div>
                                <div class="nlweb-dropdown-item-content">
                                    <div class="nlweb-dropdown-item-title">${escapeHtml(category.name)}</div>
                                    <div class="nlweb-dropdown-item-desc">${escapeHtml(category.description)}</div>
                                </div>
                            </div>
                            <div class="nlweb-dropdown-suggestions" data-category="${escapeHtml(categorySlug)}">
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 180px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 150px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 170px;"></div>
                                </div>
                            </div>
                        `;
                    });
                }

                const html = `<div class="nlweb-dropdown-loading">${loadingHTML}</div>`;
                searchDropdown.innerHTML = html;
                loadDropdownImages(searchDropdown);
                searchDropdown.classList.add('active');

                // Use pointerdown to prevent blur, click for action (fixes Safari swipe-as-click issue)
                searchDropdown.querySelectorAll('.nlweb-category-item').forEach(item => {
                    item.addEventListener('pointerdown', (e) => {
                        e.preventDefault(); // Prevents blur from firing before click
                    });
                    item.addEventListener('click', (e) => {
                        const query = item.getAttribute('data-query');
                        const currentInput = searchInput.value.trim();
                        const category = item.getAttribute('data-category');

                        // Track autocomplete selection
                        NLWebAnalytics.trackAutocompleteSelect(currentInput, query, category);

                        searchInput.value = query;
                        isPerformingSearch = true;
                        hideDropdown();
                        searchInput.blur();
                        searchBar.dispatchEvent(new Event('submit'));
                        setTimeout(() => { isPerformingSearch = false; }, 2000);
                    });
                });
            }

            function initializeAutocompleteStructure(categoryOrder) {
                // Build HTML with categories in the editorial order
                let html = '';

                categoryOrder.forEach(categorySlug => {
                    // Find the matching category
                    const category = categories.find(cat =>
                        (cat.slug || cat.name.toLowerCase()) === categorySlug
                    );

                    if (category) {
                        html += `
                            <div class="nlweb-dropdown-item nlweb-category-item" data-category="${escapeHtml(categorySlug)}" data-query="${escapeHtml(decodeHtml(category.name))}">
                                <div class="nlweb-dropdown-item-icon${category.image ? ' has-image' : ''}" ${category.image ? `data-image="${escapeHtml(category.image)}"` : ''}></div>
                                <div class="nlweb-dropdown-item-content">
                                    <div class="nlweb-dropdown-item-title">${escapeHtml(decodeHtml(category.name))}</div>
                                    <div class="nlweb-dropdown-item-desc">${escapeHtml(decodeHtml(category.description)) || `Explore articles about ${escapeHtml(decodeHtml(category.name)).toLowerCase()}`}</div>
                                </div>
                            </div>
                            <div class="nlweb-dropdown-suggestions" data-category="${escapeHtml(categorySlug)}">
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 180px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 150px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 170px;"></div>
                                </div>
                            </div>
                        `;
                    } else {
                        // Fallback if category not in categories array
                        const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
                        html += `
                            <div class="nlweb-dropdown-item nlweb-category-item" data-category="${categorySlug}" data-query="${categoryName}">
                                <div class="nlweb-dropdown-item-icon"></div>
                                <div class="nlweb-dropdown-item-content">
                                    <div class="nlweb-dropdown-item-title">${categoryName}</div>
                                    <div class="nlweb-dropdown-item-desc">Explore articles about ${categorySlug}</div>
                                </div>
                            </div>
                            <div class="nlweb-dropdown-suggestions" data-category="${categorySlug}">
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 180px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 150px;"></div>
                                </div>
                                <div class="nlweb-dropdown-suggestion-skeleton">
                                    <div class="skeleton-icon-square"></div>
                                    <div class="skeleton" style="height: 16px; width: 170px;"></div>
                                </div>
                            </div>
                        `;
                    }
                });

                searchDropdown.innerHTML = html;
                loadDropdownImages(searchDropdown);
                searchDropdown.classList.add('active');

                // Use pointerdown to prevent blur, click for action (fixes Safari swipe-as-click issue)
                searchDropdown.querySelectorAll('.nlweb-category-item').forEach(item => {
                    item.addEventListener('pointerdown', (e) => {
                        e.preventDefault(); // Prevents blur from firing before click
                    });
                    item.addEventListener('click', (e) => {
                        const query = item.getAttribute('data-query');
                        const currentInput = searchInput.value.trim();
                        const category = item.getAttribute('data-category');

                        // Track autocomplete selection
                        NLWebAnalytics.trackAutocompleteSelect(currentInput, query, category);

                        searchInput.value = query;
                        isPerformingSearch = true;
                        hideDropdown();
                        searchInput.blur();
                        searchBar.dispatchEvent(new Event('submit'));
                        setTimeout(() => { isPerformingSearch = false; }, 2000);
                    });
                });
            }

            function updateCategorySuggestions(categorySlug, suggestions) {
                // Find the suggestions container for this category
                const suggestionsContainer = searchDropdown.querySelector(
                    `.nlweb-dropdown-suggestions[data-category="${categorySlug}"]`
                );

                if (!suggestionsContainer) {
                    return;
                }

                // Build suggestions HTML
                const suggestionsHTML = suggestions.map(suggestion => `
                    <div class="nlweb-dropdown-suggestion nlweb-suggestion-streaming" data-query="${escapeHtml(suggestion.text)}">
                        <svg class="nlweb-suggestion-icon" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.625 7.9375C19.625 8.63216 19.5355 9.30176 19.3564 9.94629C19.1774 10.5908 18.9232 11.196 18.5938 11.7617C18.2643 12.3203 17.8704 12.8288 17.4121 13.2871C16.9538 13.7454 16.4417 14.1393 15.876 14.4688C15.3174 14.7982 14.7158 15.0524 14.0713 15.2314C13.4268 15.4105 12.7572 15.5 12.0625 15.5C11.1745 15.5 10.3115 15.3496 9.47363 15.0488C8.6429 14.748 7.89095 14.3148 7.21777 13.749L1.5459 19.4209C1.40983 19.557 1.2487 19.625 1.0625 19.625C0.876302 19.625 0.715169 19.557 0.579102 19.4209C0.443034 19.2848 0.375 19.1237 0.375 18.9375C0.375 18.7513 0.443034 18.5902 0.579102 18.4541L6.25098 12.7822C5.68522 12.109 5.25195 11.3571 4.95117 10.5264C4.65039 9.68848 4.5 8.82552 4.5 7.9375C4.5 7.24284 4.58952 6.57324 4.76855 5.92871C4.94759 5.27702 5.20182 4.67188 5.53125 4.11328C5.86068 3.55469 6.25456 3.04622 6.71289 2.58789C7.17122 2.12956 7.67969 1.73568 8.23828 1.40625C8.79688 1.07682 9.39844 0.822591 10.043 0.643555C10.6875 0.464518 11.3607 0.375 12.0625 0.375C12.7572 0.375 13.4268 0.464518 14.0713 0.643555C14.7158 0.822591 15.3174 1.07682 15.876 1.40625C16.4417 1.73568 16.9538 2.12956 17.4121 2.58789C17.8704 3.04622 18.2643 3.55827 18.5938 4.12402C18.9232 4.68262 19.1774 5.28418 19.3564 5.92871C19.5355 6.57324 19.625 7.24284 19.625 7.9375ZM18.25 7.9375C18.25 7.08529 18.0853 6.2832 17.7559 5.53125C17.4336 4.7793 16.9932 4.12402 16.4346 3.56543C15.876 3.00684 15.2207 2.56641 14.4688 2.24414C13.7168 1.91471 12.9147 1.75 12.0625 1.75C11.2103 1.75 10.4082 1.91471 9.65625 2.24414C8.9043 2.56641 8.24902 3.00684 7.69043 3.56543C7.13184 4.12402 6.68783 4.7793 6.3584 5.53125C6.03613 6.2832 5.875 7.08529 5.875 7.9375C5.875 8.79688 6.03613 9.60254 6.3584 10.3545C6.68066 11.1064 7.12109 11.7617 7.67969 12.3203C8.23828 12.8789 8.89355 13.3193 9.64551 13.6416C10.3975 13.9639 11.2031 14.125 12.0625 14.125C12.9219 14.125 13.7275 13.9639 14.4795 13.6416C15.2314 13.3193 15.8867 12.8789 16.4453 12.3203C17.0039 11.7617 17.4443 11.1064 17.7666 10.3545C18.0889 9.60254 18.25 8.79688 18.25 7.9375Z" fill="black"/>
                        </svg>
                        <span>${escapeHtml(suggestion.text)}</span>
                    </div>
                `).join('');

                // Replace skeletons with actual suggestions
                suggestionsContainer.innerHTML = suggestionsHTML;

                // Trigger animation for each suggestion
                requestAnimationFrame(() => {
                    const suggestionElements = suggestionsContainer.querySelectorAll('.nlweb-suggestion-streaming');
                    suggestionElements.forEach((element, index) => {
                        // Stagger the animations slightly
                        setTimeout(() => {
                            element.classList.add('nlweb-suggestion-visible');
                        }, index * 50);
                    });
                });

                // Use pointerdown to prevent blur, click for action (fixes Safari swipe-as-click issue)
                suggestionsContainer.querySelectorAll('.nlweb-dropdown-suggestion').forEach(item => {
                    item.addEventListener('pointerdown', (e) => {
                        e.preventDefault(); // Prevents blur from firing before click
                    });
                    item.addEventListener('click', (e) => {
                        const query = item.getAttribute('data-query');
                        const currentInput = searchInput.value.trim();

                        // Track autocomplete selection
                        NLWebAnalytics.trackAutocompleteSelect(currentInput, query, categorySlug);

                        searchInput.value = query;
                        isPerformingSearch = true;
                        hideDropdown();
                        searchInput.blur();
                        searchBar.dispatchEvent(new Event('submit'));
                        setTimeout(() => { isPerformingSearch = false; }, 2000);
                    });
                });
            }

            function displayAutocompleteSuggestions(suggestions) {
                if (Object.keys(suggestions).length === 0) {
                    hideDropdown();
                    return;
                }

                // Build HTML for autocomplete suggestions organized by category
                let html = '';

                // First add recommended categories that have suggestions
                categories.forEach(category => {
                    const categorySlug = category.slug || category.name.toLowerCase();
                    if (suggestions[categorySlug] && suggestions[categorySlug].length > 0) {
                        html += `
                            <div class="nlweb-dropdown-item nlweb-category-item" data-category="${escapeHtml(categorySlug)}" data-query="${escapeHtml(decodeHtml(category.name))}">
                                <div class="nlweb-dropdown-item-icon${category.image ? ' has-image' : ''}" ${category.image ? `data-image="${escapeHtml(category.image)}"` : ''}></div>
                                <div class="nlweb-dropdown-item-content">
                                    <div class="nlweb-dropdown-item-title">${escapeHtml(decodeHtml(category.name))}</div>
                                    <div class="nlweb-dropdown-item-desc">${escapeHtml(decodeHtml(category.description)) || `Explore articles about ${escapeHtml(decodeHtml(category.name)).toLowerCase()}`}</div>
                                </div>
                            </div>
                            <div class="nlweb-dropdown-suggestions" data-category="${escapeHtml(categorySlug)}">
                                ${suggestions[categorySlug].map(suggestion => `
                                    <div class="nlweb-dropdown-suggestion" data-query="${escapeHtml(suggestion.text)}">
                                        <svg class="nlweb-suggestion-icon" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.625 7.9375C19.625 8.63216 19.5355 9.30176 19.3564 9.94629C19.1774 10.5908 18.9232 11.196 18.5938 11.7617C18.2643 12.3203 17.8704 12.8288 17.4121 13.2871C16.9538 13.7454 16.4417 14.1393 15.876 14.4688C15.3174 14.7982 14.7158 15.0524 14.0713 15.2314C13.4268 15.4105 12.7572 15.5 12.0625 15.5C11.1745 15.5 10.3115 15.3496 9.47363 15.0488C8.6429 14.748 7.89095 14.3148 7.21777 13.749L1.5459 19.4209C1.40983 19.557 1.2487 19.625 1.0625 19.625C0.876302 19.625 0.715169 19.557 0.579102 19.4209C0.443034 19.2848 0.375 19.1237 0.375 18.9375C0.375 18.7513 0.443034 18.5902 0.579102 18.4541L6.25098 12.7822C5.68522 12.109 5.25195 11.3571 4.95117 10.5264C4.65039 9.68848 4.5 8.82552 4.5 7.9375C4.5 7.24284 4.58952 6.57324 4.76855 5.92871C4.94759 5.27702 5.20182 4.67188 5.53125 4.11328C5.86068 3.55469 6.25456 3.04622 6.71289 2.58789C7.17122 2.12956 7.67969 1.73568 8.23828 1.40625C8.79688 1.07682 9.39844 0.822591 10.043 0.643555C10.6875 0.464518 11.3607 0.375 12.0625 0.375C12.7572 0.375 13.4268 0.464518 14.0713 0.643555C14.7158 0.822591 15.3174 1.07682 15.876 1.40625C16.4417 1.73568 16.9538 2.12956 17.4121 2.58789C17.8704 3.04622 18.2643 3.55827 18.5938 4.12402C18.9232 4.68262 19.1774 5.28418 19.3564 5.92871C19.5355 6.57324 19.625 7.24284 19.625 7.9375ZM18.25 7.9375C18.25 7.08529 18.0853 6.2832 17.7559 5.53125C17.4336 4.7793 16.9932 4.12402 16.4346 3.56543C15.876 3.00684 15.2207 2.56641 14.4688 2.24414C13.7168 1.91471 12.9147 1.75 12.0625 1.75C11.2103 1.75 10.4082 1.91471 9.65625 2.24414C8.9043 2.56641 8.24902 3.00684 7.69043 3.56543C7.13184 4.12402 6.68783 4.7793 6.3584 5.53125C6.03613 6.2832 5.875 7.08529 5.875 7.9375C5.875 8.79688 6.03613 9.60254 6.3584 10.3545C6.68066 11.1064 7.12109 11.7617 7.67969 12.3203C8.23828 12.8789 8.89355 13.3193 9.64551 13.6416C10.3975 13.9639 11.2031 14.125 12.0625 14.125C12.9219 14.125 13.7275 13.9639 14.4795 13.6416C15.2314 13.3193 15.8867 12.8789 16.4453 12.3203C17.0039 11.7617 17.4443 11.1064 17.7666 10.3545C18.0889 9.60254 18.25 8.79688 18.25 7.9375Z" fill="black"/>
                                        </svg>
                                        <span>${escapeHtml(suggestion.text)}</span>
                                    </div>
                                `).join('')}
                            </div>
                        `;
                    }
                });

                // Also handle any other categories from API that aren't in recommendedCategories
                Object.keys(suggestions).forEach(category => {
                    if (!categories.some(cat => (cat.slug || cat.name.toLowerCase()) === category)) {
                        if (suggestions[category] && suggestions[category].length > 0) {
                            html += `
                                <div class="nlweb-dropdown-item nlweb-category-item" data-category="${category}" data-query="${category.charAt(0).toUpperCase() + category.slice(1)}">
                                    <div class="nlweb-dropdown-item-icon"></div>
                                    <div class="nlweb-dropdown-item-content">
                                        <div class="nlweb-dropdown-item-title">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
                                        <div class="nlweb-dropdown-item-desc">Explore articles about ${category.toLowerCase()}</div>
                                    </div>
                                </div>
                                <div class="nlweb-dropdown-suggestions" data-category="${escapeHtml(category)}">
                                    ${suggestions[category].map(suggestion => `
                                        <div class="nlweb-dropdown-suggestion" data-query="${escapeHtml(suggestion.text)}">
                                            <svg class="nlweb-suggestion-icon" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.625 7.9375C19.625 8.63216 19.5355 9.30176 19.3564 9.94629C19.1774 10.5908 18.9232 11.196 18.5938 11.7617C18.2643 12.3203 17.8704 12.8288 17.4121 13.2871C16.9538 13.7454 16.4417 14.1393 15.876 14.4688C15.3174 14.7982 14.7158 15.0524 14.0713 15.2314C13.4268 15.4105 12.7572 15.5 12.0625 15.5C11.1745 15.5 10.3115 15.3496 9.47363 15.0488C8.6429 14.748 7.89095 14.3148 7.21777 13.749L1.5459 19.4209C1.40983 19.557 1.2487 19.625 1.0625 19.625C0.876302 19.625 0.715169 19.557 0.579102 19.4209C0.443034 19.2848 0.375 19.1237 0.375 18.9375C0.375 18.7513 0.443034 18.5902 0.579102 18.4541L6.25098 12.7822C5.68522 12.109 5.25195 11.3571 4.95117 10.5264C4.65039 9.68848 4.5 8.82552 4.5 7.9375C4.5 7.24284 4.58952 6.57324 4.76855 5.92871C4.94759 5.27702 5.20182 4.67188 5.53125 4.11328C5.86068 3.55469 6.25456 3.04622 6.71289 2.58789C7.17122 2.12956 7.67969 1.73568 8.23828 1.40625C8.79688 1.07682 9.39844 0.822591 10.043 0.643555C10.6875 0.464518 11.3607 0.375 12.0625 0.375C12.7572 0.375 13.4268 0.464518 14.0713 0.643555C14.7158 0.822591 15.3174 1.07682 15.876 1.40625C16.4417 1.73568 16.9538 2.12956 17.4121 2.58789C17.8704 3.04622 18.2643 3.55827 18.5938 4.12402C18.9232 4.68262 19.1774 5.28418 19.3564 5.92871C19.5355 6.57324 19.625 7.24284 19.625 7.9375ZM18.25 7.9375C18.25 7.08529 18.0853 6.2832 17.7559 5.53125C17.4336 4.7793 16.9932 4.12402 16.4346 3.56543C15.876 3.00684 15.2207 2.56641 14.4688 2.24414C13.7168 1.91471 12.9147 1.75 12.0625 1.75C11.2103 1.75 10.4082 1.91471 9.65625 2.24414C8.9043 2.56641 8.24902 3.00684 7.69043 3.56543C7.13184 4.12402 6.68783 4.7793 6.3584 5.53125C6.03613 6.2832 5.875 7.08529 5.875 7.9375C5.875 8.79688 6.03613 9.60254 6.3584 10.3545C6.68066 11.1064 7.12109 11.7617 7.67969 12.3203C8.23828 12.8789 8.89355 13.3193 9.64551 13.6416C10.3975 13.9639 11.2031 14.125 12.0625 14.125C12.9219 14.125 13.7275 13.9639 14.4795 13.6416C15.2314 13.3193 15.8867 12.8789 16.4453 12.3203C17.0039 11.7617 17.4443 11.1064 17.7666 10.3545C18.0889 9.60254 18.25 8.79688 18.25 7.9375Z" fill="black"/>
                                            </svg>
                                            <span>${escapeHtml(suggestion.text)}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            `;
                        }
                    }
                });

                if (html) {
                    searchDropdown.innerHTML = html;
                    loadDropdownImages(searchDropdown);
                    searchDropdown.classList.add('active');
                    selectedSuggestionIndex = -1; // Reset selection

                    // Use pointerdown to prevent blur, click for action (fixes Safari swipe-as-click issue)
                    searchDropdown.querySelectorAll('.nlweb-dropdown-suggestion, .nlweb-category-item').forEach(item => {
                        item.addEventListener('pointerdown', (e) => {
                            e.preventDefault(); // Prevents blur from firing before click
                        });
                        item.addEventListener('click', (e) => {
                            const query = item.getAttribute('data-query');
                            const currentInput = searchInput.value.trim();
                            const category = item.closest('.nlweb-dropdown-suggestions')?.getAttribute('data-category') ||
                                            item.getAttribute('data-category');

                            // Track autocomplete selection
                            NLWebAnalytics.trackAutocompleteSelect(currentInput, query, category);

                            searchInput.value = query;
                            isPerformingSearch = true;
                            hideDropdown();
                            // Blur to prevent refocus
                            searchInput.blur();
                            searchBar.dispatchEvent(new Event('submit'));
                            // Keep flag active longer
                            setTimeout(() => { isPerformingSearch = false; }, 2000);
                        });
                    });
                } else {
                    hideDropdown();
                }
            }
            
            function populateDropdown() {
                searchDropdown.innerHTML = `
                    <div class="nlweb-dropdown-header">Recommended</div>
                    ${categories.map(category => `
                        <div class="nlweb-dropdown-item" data-category="${escapeHtml(category.slug)}">
                            <div class="nlweb-dropdown-item-icon${category.image ? ' has-image' : ''}" ${category.image ? `data-image="${escapeHtml(category.image)}"` : ''}></div>
                            <div class="nlweb-dropdown-item-content">
                                <div class="nlweb-dropdown-item-title">${escapeHtml(decodeHtml(category.name))}</div>
                                <div class="nlweb-dropdown-item-desc">${escapeHtml(decodeHtml(category.description)) || `Explore articles about ${escapeHtml(decodeHtml(category.name)).toLowerCase()}`}</div>
                            </div>
                        </div>
                    `).join('')}
                `;
                loadDropdownImages(searchDropdown);
                
                // Use pointerdown to prevent blur, click for action (fixes Safari swipe-as-click issue)
                searchDropdown.querySelectorAll('.nlweb-dropdown-item').forEach(item => {
                    item.addEventListener('pointerdown', (e) => {
                        e.preventDefault(); // Prevents blur from firing before click
                    });
                    item.addEventListener('click', (e) => {
                        const categoryName = item.querySelector('.nlweb-dropdown-item-title').textContent;
                        const category = item.getAttribute('data-category');

                        // Track autocomplete selection
                        NLWebAnalytics.trackAutocompleteSelect('', categoryName, category);

                        searchInput.value = categoryName;
                        isPerformingSearch = true;
                        hideDropdown();
                        searchInput.blur();
                        // Trigger search
                        searchBar.dispatchEvent(new Event('submit'));
                        setTimeout(() => { isPerformingSearch = false; }, 2000);
                    });
                });
            }
            
            // Search input event handlers
            searchInput.addEventListener('focus', () => {
                if (isPerformingSearch || isNLChatOpened) return;

                const query = searchInput.value.trim();
                if (query) {
                    fetchAutocomplete(query);
                } else {
                    showDropdown();
                }
            });

            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query) {
                    // Debounce autocomplete requests
                    clearTimeout(autocompleteDebounceTimer);
                    autocompleteDebounceTimer = setTimeout(() => {
                        fetchAutocomplete(query);
                    }, 1000);
                } else {
                    // Clear input - show original categories dropdown
                    clearTimeout(autocompleteDebounceTimer);
                    if (!isNLChatOpened) {
                        showDropdown();
                    }
                }
            });

            // Keyboard navigation for autocomplete
            searchInput.addEventListener('keydown', (e) => {
                const suggestions = searchDropdown.querySelectorAll('.nlweb-dropdown-suggestion, .nlweb-dropdown-item');

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions.length - 1);
                    updateSelectedSuggestion(suggestions);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
                    updateSelectedSuggestion(suggestions);
                } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
                    e.preventDefault();
                    if (suggestions[selectedSuggestionIndex]) {
                        suggestions[selectedSuggestionIndex].click();
                    }
                } else if (e.key === 'Escape') {
                    hideDropdown();
                }
            });
            
            // Click outside to close dropdown
            // Use mousedown for detection but delay hiding to allow click events on dropdown items to fire first
            // This fixes touchpad click issues on macOS where the dropdown closes before the item click registers
            document.addEventListener('mousedown', (e) => {
                if (!searchBar.contains(e.target)) {
                    setTimeout(() => hideDropdown(), 0);
                }
            });

            // Close dropdown when focus leaves the search bar entirely
            searchBar.addEventListener('focusout', () => {
                // Delay to allow click events on dropdown items to fire first
                setTimeout(() => {
                    // Check if focus moved outside searchBar (or to body/iframe)
                    const activeEl = document.activeElement;
                    if (!searchBar.contains(activeEl) || activeEl === document.body) {
                        hideDropdown();
                    }
                }, 150);
            });
        });
    }

    // Function to ensure iframe exists (create if not present)
    function ensureIframeExists() {
        let existingIframe = document.querySelector('[nlweb-search-iframe]');
        if (!existingIframe && window.nlweb_search_data) {
            // Create iframe if it doesn't exist
            const iframeContainer = document.createElement('div');
            iframeContainer.innerHTML = `<iframe src="${window.nlweb_search_data.plugin_url}iframe.html" class="nlweb-search-iframe" nlweb-search-iframe title="Search results" width="100%" height="600" style="display: none"></iframe>`;
            document.body.appendChild(iframeContainer.firstChild);

            // Mark iframe as newly created
            const newIframe = document.querySelector('[nlweb-search-iframe]');
            if (newIframe) {
                newIframe.setAttribute('data-newly-created', 'true');

                newIframe.addEventListener('load', function() {
                    // Get categories from multiple sources (priority order)
                    let categories = [];

                    // 1. Try to get from search bar shortcode if present
                    const searchBar = document.querySelector('[data-nlweb-search-bar="true"]');
                    if (searchBar) {
                        const categoriesData = searchBar.getAttribute('data-categories');
                        if (categoriesData) {
                            categories = JSON.parse(categoriesData);
                        }
                    }

                    // 2. Fallback to global nlweb_search_data.categories (from WordPress settings)
                    if (categories.length === 0 && window.nlweb_search_data && window.nlweb_search_data.categories) {
                        categories = window.nlweb_search_data.categories;
                    }

                    // Send categories to iframe if we have any
                    if (categories.length > 0) {
                        setTimeout(function() {
                            newIframe.contentWindow.postMessage({
                                action: "setCategories",
                                categories: categories
                            }, "*");
                        }, 100);
                    }

                    // Mark as loaded and ready
                    newIframe.setAttribute('data-newly-created', 'false');
                    newIframe.setAttribute('data-loaded', 'true');
                });
            }
        }
    }

    // ESC key handler to close iframe (when focus is on parent)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isNLChatOpened && $iframe) {
            closeIframe();
        }
    });

    // Listen for messages from iframe
    window.addEventListener('message', (e) => {
        // Handle close iframe
        if (e.data.action === 'closeIframe' && isNLChatOpened && $iframe) {
            closeIframe();
        }

        // Handle analytics events from iframe
        if (e.data.action === 'analytics' && e.data.event) {
            const { event, data } = e.data;
            switch (event) {
                case 'search':
                    NLWebAnalytics.trackSearch(data.query, data.searchSource || 'direct');
                    break;
                case 'result_click':
                    NLWebAnalytics.trackResultClick(data.query, data.result_url, data.position);
                    break;
                case 'timeline_click':
                    NLWebAnalytics.track('timeline_click', {
                        eventDate: data.eventDate,
                        eventDescription: data.eventDescription,
                        eventUrl: data.eventUrl
                    });
                    break;
                case 'autocomplete_select':
                    NLWebAnalytics.trackAutocompleteSelect(data.query, data.suggestion, data.category);
                    break;
                case 'feedback':
                    NLWebAnalytics.track('response_feedback', {
                        responseId: data.responseId,
                        rating: data.rating,
                        previousRating: data.previousRating,
                        responsePosition: data.responsePosition,
                        resultCount: data.resultCount,
                        timeToFeedback: data.timeToFeedback
                    });
                    break;
                case 'followup':
                    NLWebAnalytics.trackFollowUp(data.original_query, data.followup_query);
                    break;
                case 'error':
                    NLWebAnalytics.trackError(data.error_type, data.error_message, data.context);
                    break;
            }
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSearchBars);
    } else {
        initializeSearchBars();
    }
    
})();
