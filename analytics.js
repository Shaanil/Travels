// Vercel Web Analytics Initialization
// This script initializes Vercel Analytics for the static HTML site

(function() {
    // Initialize the analytics queue
    window.va = window.va || function() {
        (window.vaq = window.vaq || []).push(arguments);
    };

    // Detect environment
    var mode = 'production'; // Default to production for deployed sites
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        mode = 'development';
    }
    window.vam = mode;

    // Load the Vercel Analytics script
    // When deployed on Vercel, this will be automatically replaced with the correct script
    var script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/insights/script.js';
    document.head.appendChild(script);
})();
