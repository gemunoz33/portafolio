// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project cards click to open project detail page
const projectCards = document.querySelectorAll('.project-card');
const projectUrls = [
    './proyectos/la-pipa.html',
    './proyectos/zoni-international.html',
    './proyectos/karfel-living.html',
    './proyectos/centro-medico-belen.html'
];

projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        window.location.href = projectUrls[index];
    });
});

// Portfolio Filters
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projects.forEach(project => {
            if (filter === 'all') {
                project.classList.remove('hidden');
            } else {
                const categories = project.getAttribute('data-category').split(' ');
                if (categories.includes(filter)) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            }
        });
    });
});

/* Theme Toggle */
const toggle = document.getElementById('themeToggle');

const saved = localStorage.getItem('theme');
if(saved){
    document.documentElement.setAttribute('data-theme', saved);
    toggle.textContent = saved === 'light' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');

    if (current === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        toggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        toggle.textContent = '☀️';
    }
});

