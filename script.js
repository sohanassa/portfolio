// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) {
        console.warn('Hamburger menu elements not found');
        return;
    }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
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

// Keep the active link tied to the section nearest the viewport center.
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveSection() {
    const viewportCenter = window.innerHeight / 2;
    const visibleSections = [...sections].filter(section => section.getBoundingClientRect().top <= viewportCenter);
    const closestSection = visibleSections[visibleSections.length - 1] || sections[0];

    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${closestSection.id}`));
}

window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('scrollend', updateActiveSection);
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

const translations = {
    el: {
        'Portfolio': 'Πορτφόλιο', Home: 'Αρχική', About: 'Σχετικά', Experience: 'Εμπειρία', Projects: 'Έργα', Education: 'Εκπαίδευση', Languages: 'Γλώσσες', Skills: 'Δεξιότητες', Volunteering: 'Εθελοντισμός', Contact: 'Επικοινωνία',
        "Hello, I'm Sohaib Nassar": 'Γεια, είμαι ο Sohaib Nassar', 'Automation Engineer | AI Engineer | Backend Developer': 'Μηχανικός Αυτοματισμού | Μηχανικός AI | Backend Developer', 'Download Resume': 'Λήψη Βιογραφικού', 'About Me': 'Σχετικά με εμένα', 'Recent Projects': 'Πρόσφατα έργα', 'Get In Touch': 'Επικοινωνήστε μαζί μου'
    },
    ar: {
        'Portfolio': 'الملف الشخصي', Home: 'الرئيسية', About: 'نبذة عني', Experience: 'الخبرة', Projects: 'المشاريع', Education: 'التعليم', Languages: 'اللغات', Skills: 'المهارات', Volunteering: 'التطوع', Contact: 'تواصل',
        "Hello, I'm Sohaib Nassar": 'مرحباً، أنا صهيب نصار', 'Automation Engineer | AI Engineer | Backend Developer': 'مهندس أتمتة | مهندس ذكاء اصطناعي | مطور Backend', 'Download Resume': 'تحميل السيرة الذاتية', 'About Me': 'نبذة عني', 'Recent Projects': 'أحدث المشاريع', 'Get In Touch': 'تواصل معي'
    }
};

function setLanguage(language) {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const sourceText = element.dataset.i18n;
        element.textContent = translations[language]?.[sourceText] || sourceText;
    });
    document.querySelectorAll('.language-button').forEach(button => {
        const isActive = button.dataset.language === language;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive);
    });
    localStorage.setItem('portfolio-language', language);
}

document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
});

const themeToggle = document.getElementById('themeToggle');
function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeToggle?.setAttribute('aria-pressed', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
}

themeToggle?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

setLanguage(localStorage.getItem('portfolio-language') || 'en');
setTheme(localStorage.getItem('portfolio-theme') || 'light');

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards, skill items, and language items
document.querySelectorAll('.project-card, .skill-item, .language-item, .education-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
