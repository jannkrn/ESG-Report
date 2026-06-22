window.addEventListener('DOMContentLoaded', function () {
    const ctaList = $('.modal .modal-body .link-group a');
    const urlParams = new URLSearchParams(window.location.search);
    let ocid = null;

    for (const [key, value] of urlParams.entries()) {
        if (key.toLowerCase() === "ocid") {
            ocid = value;
            break;
       }
    }

    if (ocid) {
        ctaList?.each((i, cta) => {
            if (cta.href) {
                if(cta.href.includes('ocid=') || cta.href.includes('#')){
                    return;
                }
                if (cta.href.match(/\?./)) {
                    cta.href = cta.href + '&ocid=' + ocid;
                } else {
                    cta.href = cta.href + '?ocid=' + ocid;
                }
            }
        });
    }
});

(function() {
    "use strict";
    $(function() {
        const storageItemName = "vsb-modal-shown";
        const vsbModal = document.querySelector(".modal.is-vsb-modal");
        const vsbEnabled = typeof window.isFeatureEnabled === 'function' && window.isFeatureEnabled('vsbEnabled');
        const vsbUatQsp = new URLSearchParams(window.location.search).get('msstorevsbuat') === 'enabled';

        const shouldRender = () => {
            if ((!vsbEnabled && !vsbUatQsp) || !vsbModal || sessionStorage.getItem(storageItemName))
                return false;
            
            sessionStorage.setItem(storageItemName, "true");
            return true;
        }

        if (shouldRender()) {
            var options = {};
            if (mwf.version) {
                options.el = vsbModal;
            } else {
                options.modal = vsbModal;
            }

            new mwf.Modal(options).show();
        }
    });
}());

/**
 * Simple Modal Focus Manager
 * Restores focus when modals close
 */

(function() {
    'use strict';
    
    let lastFocusedElement = null;
    // Capture focus from button clicks (but not close buttons)
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        if (target.matches && target.matches('button') && !target.closest('.modal')) {
            lastFocusedElement = target;
        }
    });

    // Watch for modal closing (show class removal)
    if (window.MutationObserver) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    
                    // Check if it's a modal element
                    if (target.matches && (target.matches('.modal') || target.matches('[data-mount="modal"]'))) {
                        const hadShow = (mutation.oldValue || '').includes('show');
                        const hasShow = target.classList.contains('show');
                        
                        // Modal was closed - restore focus
                        if (hadShow && !hasShow && lastFocusedElement) {
                            setTimeout(function() {
                                if (lastFocusedElement && document.contains(lastFocusedElement)) {
                                    lastFocusedElement.focus();
                                }
                            }, 100);
                        }
                    }
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            attributeOldValue: true,
            subtree: true,
            attributeFilter: ['class']
        });
    }

})();