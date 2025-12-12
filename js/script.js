/* ==========================================================
   ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
========================================================== */
document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const HEADER_OFFSET = 70;

    function updateActiveLink() {
        let current = 'home';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - HEADER_OFFSET;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();



    /* ==========================================================
       SKILL BAR ANIMATIONS
    ========================================================== */
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillPercentages = document.querySelectorAll('.skill-percentage');
    const skillSection = document.getElementById('skills');
    let skillsAnimated = false;

    function animateSkills() {
        if (skillsAnimated) return;

        const skillsTop = skillSection.offsetTop;
        const windowBottom = window.scrollY + window.innerHeight;

        if (windowBottom > skillsTop + 200) {
            skillLevels.forEach(level => {
                level.style.width = level.dataset.width;
            });

            skillPercentages.forEach(span => {
                span.style.opacity = '1';
            });

            skillsAnimated = true;
        }
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills();



    /* ==========================================================
       EXPERIENCE SECTION
    ========================================================== */
    const expItems = document.querySelectorAll(".exp-item");

    function animateExperience() {
        expItems.forEach(item => {
            let itemTop = item.offsetTop;

            if (window.scrollY + window.innerHeight > itemTop + 50) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", animateExperience);
    animateExperience();

});


const hamburger = document.getElementById("hamburger");
const navLinksMenu = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinksMenu.classList.toggle("show");
});


