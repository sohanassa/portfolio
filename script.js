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
        'Portfolio': 'Πορτφόλιο', Home: 'Αρχική', About: 'Σχετικά', Experience: 'Εμπειρία', Projects: 'Έργα', Education: 'Εκπαίδευση', Languages: 'Γλώσσες', Skills: 'Δεξιότητες', Volunteering: 'Εθελοντισμός', Contact: 'Επικοινωνία', Email: 'Email', GitHub: 'GitHub', LinkedIn: 'LinkedIn',
        "Hello, I'm Sohaib Nassar": 'Γεια, είμαι ο Σουχαήπ Νασσάρ', 'Download Resume': 'Λήψη Βιογραφικού', 'About Me': 'Σχετικά με εμένα', 'Recent Projects': 'Πρόσφατα έργα', 'Get In Touch': 'Επικοινωνήστε μαζί μου',
        'I’m a Software Engineer specializing in backend development and test automation, with a passion for building reliable and efficient software. I’m particularly interested in AI systems, RAG, LLM applications, and prompt engineering, and I enjoy exploring how emerging technologies can solve complex problems.': 'Είμαι Software Engineer με εξειδίκευση στην ανάπτυξη backend και στον αυτοματισμό δοκιμών. Με ενδιαφέρουν ιδιαίτερα τα συστήματα AI, τα RAG, οι εφαρμογές LLM και το prompt engineering.',
        "When I'm not coding, you can find me exploring new technologies, enjoying the outdoors and travelling.": 'Όταν δεν προγραμματίζω, εξερευνώ νέες τεχνολογίες, απολαμβάνω τη φύση και ταξιδεύω.',
        'January 2024 – Present': 'Ιανουάριος 2024 – Σήμερα', 'January 2024 – January 2025': 'Ιανουάριος 2024 – Ιανουάριος 2025', 'Developed and maintained robust backend solutions and automated testing frameworks. Specialized in enhancing automation frameworks, building testing solutions, and implementing high-quality software with a focus on reliability and efficiency.': 'Ανάπτυξη και συντήρηση backend λύσεων και πλαισίων αυτοματοποιημένων δοκιμών, με έμφαση στην αξιοπιστία και την αποδοτικότητα.', 'Served as Vice National Representative, contributing to community development and international student exchange initiatives. Organized events, fostered cross-cultural connections, and supported student welfare programs across the organization.': 'Υπηρέτησα ως Αντιπρόσωπος Εθνικού Δικτύου, συμβάλλοντας στην ανάπτυξη της κοινότητας και σε πρωτοβουλίες διεθνών ανταλλαγών φοιτητών.',
        'A constraint satisfaction programming tool for automated course scheduling. Built with PHP, Python, and constraint programming techniques to optimize scheduling conflicts.': 'Εργαλείο προγραμματισμού περιορισμών για αυτοματοποιημένο προγραμματισμό μαθημάτων, με PHP και Python.', 'Full-featured e-commerce platform with shopping cart, user authentication, product management, and order checkout. Built with PHP and custom database integration for a seamless user experience.': 'Πλήρης πλατφόρμα ηλεκτρονικού εμπορίου με καλάθι αγορών, έλεγχο ταυτότητας, διαχείριση προϊόντων και ολοκλήρωση παραγγελιών.', 'A Java-based simulation tool modeling pandemic spread dynamics. Demonstrates object-oriented design principles and data structure implementation for complex system modeling.': 'Εργαλείο προσομοίωσης σε Java που μοντελοποιεί τη δυναμική εξάπλωσης μιας πανδημίας.', 'View on GitHub': 'Προβολή στο GitHub',
        '2019 – 2023 | Nicosia, Cyprus': '2019 – 2023 | Λευκωσία, Κύπρος', 'Final Grade: 8.68/10': 'Τελικός βαθμός: 8.68/10', 'Comprehensive education in computer science fundamentals, software engineering, and advanced computing concepts.': 'Ολοκληρωμένη εκπαίδευση στις βασικές αρχές της επιστήμης υπολογιστών, της μηχανικής λογισμικού και των προηγμένων υπολογιστικών εννοιών.', 'March – July 2022 | Reutlingen, Germany': 'Μάρτιος – Ιούλιος 2022 | Ρόιτλινγκεν, Γερμανία', 'Grade: 1.98 (German System) / 8.2/10 | 30 Credits': 'Βαθμός: 1.98 (γερμανικό σύστημα) / 8.2/10 | 30 μονάδες', 'Coursework: Web Programming, Mobile Computing, Advanced Databases, Distributed Systems, Cloud Computing': 'Μαθήματα: Προγραμματισμός Ιστού, κινητές υπολογιστικές συσκευές, προηγμένες βάσεις δεδομένων, κατανεμημένα συστήματα, υπολογιστικό νέφος', '2017 – 2019': '2017 – 2019', 'Introduction to Networks & Routing and Switching Essentials certifications': 'Πιστοποιήσεις Introduction to Networks και Routing and Switching Essentials', 'Proficient C1': 'Άριστη γνώση C1', Native: 'Μητρική γλώσσα', "Feel free to reach out if you'd like to collaborate or have any questions!": 'Επικοινώνησε μαζί μου για συνεργασία ή για οποιαδήποτε ερώτηση!', '© 2026 Sohaib Nassar. All rights reserved.': '© 2026 Sohaib Nassar. Με επιφύλαξη παντός δικαιώματος.'
    },
    ar: {
        'Portfolio': 'الملف الشخصي', Home: 'الرئيسية', About: 'نبذة عني', Experience: 'الخبرة', Projects: 'المشاريع', Education: 'التعليم', Languages: 'اللغات', Skills: 'المهارات', Volunteering: 'التطوع', Contact: 'تواصل', Email: 'البريد الإلكتروني', GitHub: 'GitHub', LinkedIn: 'LinkedIn',
        "Hello, I'm Sohaib Nassar": 'مرحباً، أنا صهيب نصار', 'Download Resume': 'تحميل السيرة الذاتية', 'About Me': 'نبذة عني', 'Recent Projects': 'أحدث المشاريع', 'Get In Touch': 'تواصل معي',
        'I’m a Software Engineer specializing in backend development and test automation, with a passion for building reliable and efficient software. I’m particularly interested in AI systems, RAG, LLM applications, and prompt engineering, and I enjoy exploring how emerging technologies can solve complex problems.': 'أنا مهندس برمجيات متخصص في تطوير الواجهات الخلفية وأتمتة الاختبارات، وأهتم بأنظمة الذكاء الاصطناعي وتطبيقات LLM وهندسة الأوامر.', "When I'm not coding, you can find me exploring new technologies, enjoying the outdoors and travelling.": 'عندما لا أبرمج، أستكشف التقنيات الجديدة وأستمتع بالطبيعة والسفر.', 'January 2024 – Present': 'يناير 2024 – الآن', 'January 2024 – January 2025': 'يناير 2024 – يناير 2025', 'Developed and maintained robust backend solutions and automated testing frameworks. Specialized in enhancing automation frameworks, building testing solutions, and implementing high-quality software with a focus on reliability and efficiency.': 'طورت وحافظت على حلول خلفية وأطر اختبار آلية موثوقة، مع التركيز على الجودة والكفاءة.', 'Served as Vice National Representative, contributing to community development and international student exchange initiatives. Organized events, fostered cross-cultural connections, and supported student welfare programs across the organization.': 'عملت كنائب ممثل وطني، وساهمت في تطوير المجتمع ومبادرات التبادل الطلابي الدولي.', 'A constraint satisfaction programming tool for automated course scheduling. Built with PHP, Python, and constraint programming techniques to optimize scheduling conflicts.': 'أداة برمجية لجدولة المقررات تلقائياً باستخدام قيود البرمجة و PHP وPython.', 'Full-featured e-commerce platform with shopping cart, user authentication, product management, and order checkout. Built with PHP and custom database integration for a seamless user experience.': 'منصة تجارة إلكترونية متكاملة تشمل سلة التسوق وتسجيل المستخدمين وإدارة المنتجات وإتمام الطلبات.', 'A Java-based simulation tool modeling pandemic spread dynamics. Demonstrates object-oriented design principles and data structure implementation for complex system modeling.': 'أداة محاكاة بلغة Java لنمذجة انتشار الأوبئة وتطبيق مبادئ التصميم وهياكل البيانات.', 'View on GitHub': 'عرض على GitHub', '2019 – 2023 | Nicosia, Cyprus': '2019 – 2023 | نيقوسيا، قبرص', 'Final Grade: 8.68/10': 'النتيجة النهائية: 8.68/10', 'Comprehensive education in computer science fundamentals, software engineering, and advanced computing concepts.': 'دراسة شاملة لأساسيات علوم الحاسوب وهندسة البرمجيات والمفاهيم الحاسوبية المتقدمة.', 'March – July 2022 | Reutlingen, Germany': 'مارس – يوليو 2022 | رويتلينغن، ألمانيا', 'Grade: 1.98 (German System) / 8.2/10 | 30 Credits': 'النتيجة: 1.98 (النظام الألماني) / 8.2/10 | 30 ساعة معتمدة', 'Coursework: Web Programming, Mobile Computing, Advanced Databases, Distributed Systems, Cloud Computing': 'المقررات: برمجة الويب، الحوسبة المتنقلة، قواعد البيانات المتقدمة، الأنظمة الموزعة والحوسبة السحابية', '2017 – 2019': '2017 – 2019', 'Introduction to Networks & Routing and Switching Essentials certifications': 'شهادتا Introduction to Networks وRouting and Switching Essentials', 'Proficient C1': 'متقدم C1', Native: 'اللغة الأم', "Feel free to reach out if you'd like to collaborate or have any questions!": 'تواصل معي للتعاون أو لطرح أي أسئلة!', '© 2026 Sohaib Nassar. All rights reserved.': '© 2026 Sohaib Nassar. جميع الحقوق محفوظة.'
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
