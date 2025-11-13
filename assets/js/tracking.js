/********************************************
 * GOOGLE ANALYTICS (GA4)
 ********************************************/
(function () {
    const GA_ID = "G-YV2RX6P4RP"; // ← REPLACE WITH YOUR GA4 ID

    // Load Google Analytics script
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }

    gtag("js", new Date());
    gtag("config", GA_ID);
})();


/********************************************
 * TRACK RESUME CLICK
 ********************************************/
document.addEventListener("DOMContentLoaded", function () {
    const resumeBtn = document.querySelector(".resumebtn a");

    if (resumeBtn) {
        resumeBtn.addEventListener("click", () => {
            gtag('event', 'resume_click', {
                'event_category': 'engagement',
                'event_label': 'Resume Button Clicked'
            });
        });
    }
});


/********************************************
 * TRACK SOCIAL ICON CLICKS
 ********************************************/
document.querySelectorAll(".social-icons a, .share a").forEach(icon => {
    icon.addEventListener("click", function () {
        gtag('event', 'social_click', {
            'event_category': 'social',
            'event_label': this.href
        });
    });
});


/********************************************
 * TRACK PROJECT / CERTIFICATE CLICK
 ********************************************/
document.querySelectorAll(".box-container a").forEach(btn => {
    btn.addEventListener("click", function () {
        gtag('event', 'project_or_certificate_click', {
            'event_category': 'projects',
            'event_label': this.href
        });
    });
});


/********************************************
 * SCROLL DEPTH TRACKING
 ********************************************/
let scrollTracked25 = false;
let scrollTracked50 = false;
let scrollTracked75 = false;
let scrollTracked100 = false;

window.addEventListener("scroll", () => {
    const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercent >= 25 && !scrollTracked25) {
        scrollTracked25 = true;
        gtag('event', 'scroll_25%', { 'event_category': 'scroll' });
    }
    if (scrollPercent >= 50 && !scrollTracked50) {
        scrollTracked50 = true;
        gtag('event', 'scroll_50%', { 'event_category': 'scroll' });
    }
    if (scrollPercent >= 75 && !scrollTracked75) {
        scrollTracked75 = true;
        gtag('event', 'scroll_75%', { 'event_category': 'scroll' });
    }
    if (scrollPercent >= 100 && !scrollTracked100) {
        scrollTracked100 = true;
        gtag('event', 'scroll_100%', { 'event_category': 'scroll' });
    }
});


/********************************************
 * TRACK TIME ON SITE (EVERY 15 SECONDS)
 ********************************************/
let seconds = 0;

setInterval(() => {
    seconds += 15;
    gtag('event', 'time_spent', {
        'event_category': 'engagement',
        'event_label': `${seconds} seconds`
    });
}, 15000);


/********************************************
 * HOTJAR TRACKING
 ********************************************/
(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
    h._hjSettings = { hjid: 0000000, hjsv: 6 }; // ← REPLACE hjid WITH YOUR HOTJAR ID
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script"); r.async = true;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
