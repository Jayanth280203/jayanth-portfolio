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
    strings: ["Data Scientist", "Data Analyst", "Business Analyst"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// --- Fetch skills only (disabled projects for now) ---
async function fetchData(type = "skills") {
    let response = await fetch("skills.json");
    const data = await response.json();
    return data;
}

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

fetchData().then(data => {
    showSkills(data);
});

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
srtop.reveal('.projects .box', { interval: 200 });

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
