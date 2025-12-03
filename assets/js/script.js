$(document).ready(function () {

    // Menu toggle button
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll behavior
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll Spy (highlights active menu item)
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling for all anchor links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // --- EmailJS contact form (disabled for now) ---
    /*
    $("#contact-form").submit(function (event) {
        emailjs.init("YOUR_EMAILJS_USER_ID");
        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    */

});

// --- Change title when tab is inactive ---
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Jayanth R";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio 👋";
        $("#favicon").attr("href", "assets/images/favicon.png");
    }
});

// --- Typing text animation ---
var typed = new Typed(".typing-text", {
    strings: ["Data Scientist", "Data Analyst", "Data Engineer", "Database Administrator", "Business Analyst"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
    showCursor: false
});

// --- Fetch skills only (disabled projects for now) ---
const skills = [
    {
        "name": "Tableau",
        "icon": "https://img.icons8.com/color/48/000000/tableau-software.png"
    },
    {
        "name": "Power BI",
        "icon": "https://img.icons8.com/color/48/000000/power-bi.png"
    },
    {
        "name": "Google Analytics",
        "icon": "https://img.icons8.com/?size=48&id=avtI03bQMwX3&format=png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "R",
        "icon": "https://img.icons8.com/external-becris-flat-becris/64/000000/external-r-data-science-becris-flat-becris.png"
    },
    {
        "name": "C",
        "icon": "https://img.icons8.com/color/48/000000/c-programming.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Git",
        "icon": "https://img.icons8.com/?size=48&id=20906&format=png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
        "name": "MATLAB",
        "icon": "https://img.icons8.com/?size=48&id=r5Y16PcDkoWI&format=png"
    },
    {
        "name": "Apache Hadoop",
        "icon": "https://img.icons8.com/?size=48&id=69132&format=png"
    },
    {
        "name": "Apache Sapark",
        "icon": "https://img.icons8.com/?size=48&id=0cRqPqlItA0E&format=png"
    },
    {
        "name": "MS Office",
        "icon": "https://img.icons8.com/color/48/000000/office-365.png"
    },
    {
        "name": "HTML",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    }
];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

showSkills(skills);

// --- Initialize tilt effect ---
VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

// --- Scroll reveal animations ---
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// Home section
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });

// About section
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

// Skills section
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

// Education section
srtop.reveal('.education .box', { interval: 200 });

// Projects section (updated from #work)
srtop.reveal('.projects .timeline-item', { interval: 200 });

// Certifications section
srtop.reveal('.cert-card', { interval: 200 });

// Contact section
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

// --- Disable developer shortcuts ---
document.onkeydown = function (e) {
    if (
        e.keyCode == 123 ||
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) ||
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    ) {
        return false;
    }
};
/* ===== Certifications flip-card JS (append to end of script.js) ===== */
(function () {
    const grid = document.getElementById('certsGrid');
    if (!grid) return;

    // Toggle flip on click/tap (works for mobile)
    grid.addEventListener('click', function (e) {
        // if clicked on Open Image link, do nothing (let link work)
        const target = e.target;
        if (target.tagName.toLowerCase() === 'a') return;

        // find the .cert-card ancestor
        const card = target.closest('.cert-card');
        if (!card) return;

        // toggle flip state
        card.classList.toggle('is-flipped');
    });

    // Keyboard accessibility: Enter/Space toggles, Escape unflips
    grid.addEventListener('keydown', function (e) {
        const card = e.target.closest && e.target.closest('.cert-card');
        if (!card) return;

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.classList.toggle('is-flipped');
        } else if (e.key === 'Escape') {
            card.classList.remove('is-flipped');
        }
    });

    // make cards focusable for keyboard users
    document.querySelectorAll('.cert-card').forEach(c => {
        c.setAttribute('tabindex', '0');
    });

    // clicking outside the grid closes any flipped cards
    document.addEventListener('click', function (ev) {
        if (!grid.contains(ev.target)) {
            document.querySelectorAll('.cert-card.is-flipped').forEach(c => c.classList.remove('is-flipped'));
        }
    });

    // Optional: prevent the hover flip on small screens (so mobile relies on tap)
    function toggleHoverOnTouch() {
        if (window.matchMedia('(hover: none)').matches) {
            // remove hover transform by overriding pointer-events via class:
            document.querySelectorAll('.cert-card').forEach(c => {
                c.classList.remove('hover-enabled');
            });
        }
    }
    toggleHoverOnTouch();
    window.addEventListener('resize', toggleHoverOnTouch);

})();

