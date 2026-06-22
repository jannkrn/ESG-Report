/**
 * Parent Page Iframe Handler
 * Include this script on the page that embeds the search iframe
 * to handle proper Tab navigation flow between header and iframe
 */

(function() {
    'use strict';

    // Find the search iframe on the page
    let searchIframe = null;
    let headerElements = [];
    let lastHeaderElement = null;

    // Wait for DOM to be ready
    function init() {
        // Try to find the iframe - adjust selector if needed
        searchIframe = document.querySelector('iframe.nlweb-search-iframe, iframe[src*="iframe.html"]');

        if (searchIframe) {
            setupIframeNavigation();
            setupHeaderNavigation();
        } else {
            // Search iframe not found - tab navigation may not work correctly
        }
    }

    function setupIframeNavigation() {
        // Listen for messages from the iframe
        window.addEventListener('message', handleIframeMessage);

        // Note: Do not set tabindex="-1" on iframe as it has focusable content (WCAG 2.1.1)
    }

    function setupHeaderNavigation() {
        // Find all focusable elements in the header
        const header = document.querySelector('#headerRegion, #headerArea, .uhf, header, [role="banner"], .c-uhfh');

        if (header) {
            headerElements = getFocusableElements(header);

            if (headerElements.length > 0) {
                lastHeaderElement = headerElements[headerElements.length - 1];

                // Add event listener to the last header element
                // When Tab is pressed, focus should go to iframe
                lastHeaderElement.addEventListener('keydown', function(e) {
                    if (e.key === 'Tab' && !e.shiftKey) {
                        e.preventDefault();
                        focusFirstElementInIframe();
                    }
                });

                // Add event listener to the first header element
                // When Shift+Tab is pressed, focus should come from iframe
                headerElements[0].addEventListener('keydown', function(e) {
                    if (e.key === 'Tab' && e.shiftKey) {
                        e.preventDefault();
                        focusLastElementInIframe();
                    }
                });
            }
        }
    }

    function handleIframeMessage(event) {
        // Verify message is from our iframe
        if (event.data && event.data.type === 'iframe-tab-exit') {
            const direction = event.data.direction;

            if (direction === 'forward') {
                // Tab was pressed at the end of iframe content
                // Focus should go back to the first element in the header
                focusFirstHeaderElement();

            } else if (direction === 'backward') {
                // Shift+Tab was pressed at the start of iframe content
                // Focus should go to the last element in the header
                focusLastHeaderElement();
            }
        }
    }

    function focusFirstElementInIframe() {
        // Send message to iframe to focus its first element
        if (searchIframe && searchIframe.contentWindow) {
            searchIframe.contentWindow.postMessage({
                type: 'focus-first-element'
            }, '*');
        }
    }

    function focusLastElementInIframe() {
        // Send message to iframe to focus its last element
        if (searchIframe && searchIframe.contentWindow) {
            searchIframe.contentWindow.postMessage({
                type: 'focus-last-element'
            }, '*');
        }
    }

    function focusFirstHeaderElement() {
        if (headerElements.length > 0) {
            headerElements[0].focus();
        } else {
            // Fallback: try to find any header element
            const header = document.querySelector('#headerRegion, #headerArea, .uhf, header, [role="banner"], .c-uhfh');
            if (header) {
                const focusable = getFocusableElements(header);
                if (focusable.length > 0) {
                    focusable[0].focus();
                }
            }
        }
    }

    function focusLastHeaderElement() {
        if (lastHeaderElement) {
            lastHeaderElement.focus();
        } else if (headerElements.length > 0) {
            headerElements[headerElements.length - 1].focus();
        }
    }

    function getFocusableElements(container) {
        const focusableSelectors = [
            'a[href]:not([tabindex="-1"]):not([disabled])',
            'button:not([disabled]):not([tabindex="-1"])',
            'input:not([disabled]):not([tabindex="-1"]):not([type="hidden"])',
            'select:not([disabled]):not([tabindex="-1"])',
            'textarea:not([disabled]):not([tabindex="-1"])',
            '[tabindex]:not([tabindex="-1"])',
            'details',
            'summary'
        ].join(',');

        return Array.from(container.querySelectorAll(focusableSelectors))
            .filter(el => {
                // Check if element is visible
                const rect = el.getBoundingClientRect();
                const style = window.getComputedStyle(el);
                return rect.width > 0 &&
                       rect.height > 0 &&
                       style.display !== 'none' &&
                       style.visibility !== 'hidden';
            });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also try to initialize after a short delay (in case iframe loads later)
    setTimeout(init, 1000);

})();
