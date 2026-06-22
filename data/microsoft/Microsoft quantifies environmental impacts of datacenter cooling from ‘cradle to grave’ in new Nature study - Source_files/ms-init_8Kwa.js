var MS_1DS_PLUGIN_VERSION = '1.2.10';

// Initialize 1DS when SDK is ready
function init1DS() {
    var analytics = new oneDS.ApplicationInsights();
    window.owap = analytics;

    var dataSharing = typeof GPC_DataSharingOptIn !== 'undefined' ? GPC_DataSharingOptIn : false;
    if (location.hostname.split('.').reverse().splice(0,2).reverse().join('.') != 'microsoft.com') {
        dataSharing = false;
    }

    var config = {
        instrumentationKey: oneds_object.tenant_key,
        channelConfiguration: { eventsLimitInMem: 50 },
        propertyConfiguration: {
            userAgent: 'Custom User Agent',
            gpcDataSharingOptIn: dataSharing,
            callback: {
                userConsentDetails: typeof siteConsent !== 'undefined' && siteConsent ? siteConsent.getConsent : undefined
            }
        },
        webAnalyticsConfiguration: {
            urlCollectHash: true,
            urlCollectQuery: true,
            autoCapture: { scroll: true, pageView: true, onLoad: true, click: true, resize: true, jsError: true },
            coreData: {
                market: oneds_object.market,
                pageType: oneds_object.pagetype,
                pageName: oneds_object.name
            }
        }
    };
    analytics.initialize(config, []);
    console.info('Microsoft 1DS initialized (plugin v' + MS_1DS_PLUGIN_VERSION + ')');
}

// Poll for oneDS to be defined (handles async loading race condition)
(function waitForSDK() {
    var maxAttempts = 50; // 5 seconds max (50 * 100ms)
    var attempts = 0;

    function checkSDK() {
        attempts++;
        if (typeof oneDS !== 'undefined') {
            init1DS();
        } else if (attempts < maxAttempts) {
            setTimeout(checkSDK, 100);
        } else {
            console.error('Microsoft 1DS SDK failed to load after ' + (maxAttempts * 100 / 1000) + 's - oneDS is not defined (plugin v' + MS_1DS_PLUGIN_VERSION + ')');
        }
    }

    checkSDK();
})();
