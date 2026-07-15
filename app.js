/* ========================================
   Al-Nadwah Legal Consultants
   Main JavaScript
   ======================================== */

// ===== Translations =====
const translations = {
    en: {
        // Nav
        "Home": "Home",
        "About the Firm": "About the Firm",
        "Expertise": "Expertise",
        "Contact": "Contact",
        "Get Started": "Get Started",
        "Learn More": "Learn More",
        "Schedule Consultation": "Schedule Consultation",
        "Our Services": "Our Services",
        "Book Consultation": "Book Consultation",
        "Partner With Us": "Partner With Us",
        "Scroll": "Scroll",
        // About
        "About Us": "About Us",
        "A Legacy of Legal Excellence in Saudi Arabia": "A Legacy of Legal Excellence in Saudi Arabia",
        "Years of Practice": "Years of Practice",
        "Expert Lawyers": "Expert Lawyers",
        "Cases Handled": "Cases Handled",
        // Services
        "Our Expertise": "Our Expertise",
        "Comprehensive Legal Solutions": "Comprehensive Legal Solutions",
        "Corporate Law": "Corporate Law",
        "Real Estate Law": "Real Estate Law",
        "Family Law": "Family Law",
        "International Law": "International Law",
        "Vision 2030 Projects": "Vision 2030 Projects",
        "Labor & Employment": "Labor & Employment",
        // Vision
        "Vision 2030": "Vision 2030",
        "Supporting Saudi Arabia's Bold Transformation": "Supporting Saudi Arabia's Bold Transformation",
        "NEOM": "NEOM",
        "The Red Sea": "The Red Sea",
        "Qiddiya": "Qiddiya",
        // Testimonials
        "Testimonials": "Testimonials",
        "Trusted by Industry Leaders": "Trusted by Industry Leaders",
        // CTA
        "Ready to Secure Your Legal Future?": "Ready to Secure Your Legal Future?",
        "SCHEDULE A CONSULTATION": "SCHEDULE A CONSULTATION",
        // Footer
        "Quick Links": "Quick Links",
        "Legal Services": "Legal Services",
        "Contact Info": "Contact Info",
        "All rights reserved.": "All rights reserved.",
        "Developed by": "Developed by",
        // Practice Areas Page
        "Practice Areas": "Practice Areas",
        "Our Legal Expertise": "Our Legal Expertise",
        "Comprehensive legal services tailored to your needs across Saudi Arabia.": "Comprehensive legal services tailored to your needs across Saudi Arabia.",
        "Corporate & Commercial Law": "Corporate & Commercial Law",
        "Business Formation": "Business Formation",
        "Company registration, licensing, and compliance with Saudi regulations.": "Company registration, licensing, and compliance with Saudi regulations.",
        "Mergers & Acquisitions": "Mergers & Acquisitions",
        "Strategic guidance through complex M&A transactions.": "Strategic guidance through complex M&A transactions.",
        "Contract Drafting": "Contract Drafting",
        "Professional contract review, negotiation, and drafting services.": "Professional contract review, negotiation, and drafting services.",
        "Joint Ventures": "Joint Ventures",
        "Partnership structuring and joint venture agreements.": "Partnership structuring and joint venture agreements.",
        "Real Estate & Property Law": "Real Estate & Property Law",
        "Property Transactions": "Property Transactions",
        "Buy, sell, or lease property with full legal protection.": "Buy, sell, or lease property with full legal protection.",
        "Land Registry": "Land Registry",
        "Title verification and land registration services.": "Title verification and land registration services.",
        "Construction Disputes": "Construction Disputes",
        "Resolution of construction and development conflicts.": "Resolution of construction and development conflicts.",
        "Family & Personal Law": "Family & Personal Law",
        "Marriage Contracts": "Marriage Contracts",
        "Islamic marriage contract (Nikah) drafting and review.": "Islamic marriage contract (Nikah) drafting and review.",
        "Divorce & Custody": "Divorce & Custody",
        "Compassionate guidance through family disputes.": "Compassionate guidance through family disputes.",
        "Inheritance": "Inheritance",
        "Islamic inheritance (Mirath) calculation and distribution.": "Islamic inheritance (Mirath) calculation and distribution.",
        "Labor & Employment Law": "Labor & Employment Law",
        "Employment Contracts": "Employment Contracts",
        "Drafting compliant employment agreements.": "Drafting compliant employment agreements.",
        "Saudization Compliance": "Saudization Compliance",
        "Navigate Nitaqat and Saudization requirements.": "Navigate Nitaqat and Saudization requirements.",
        "Dispute Resolution": "Dispute Resolution",
        "Labor dispute mediation and arbitration.": "Labor dispute mediation and arbitration.",
        "Vision 2030 Legal Advisory": "Vision 2030 Legal Advisory",
        "NEOM Legal Framework": "NEOM Legal Framework",
        "Legal support for NEOM project development.": "Legal support for NEOM project development.",
        "Red Sea Project": "Red Sea Project",
        "Tourism and hospitality legal advisory.": "Tourism and hospitality legal advisory.",
        "Qiddiya Compliance": "Qiddiya Compliance",
        "Entertainment and sports venue legal compliance.": "Entertainment and sports venue legal compliance.",
        "Have a question?": "Have a question?",
        "Our team is ready to help.": "Our team is ready to help.",
        "Contact Us": "Contact Us",
        // About Page
        "Our Story": "Our Story",
        "Founded in 1998 by Sheikh Abdullah Al-Nadwi, our firm began as a small practice in Riyadh's historic district. Over 25 years, we have grown into one of Saudi Arabia's most respected legal consultancies, serving over 3,000 clients across the Kingdom.": "Founded in 1998 by Sheikh Abdullah Al-Nadwi, our firm began as a small practice in Riyadh's historic district. Over 25 years, we have grown into one of Saudi Arabia's most respected legal consultancies, serving over 3,000 clients across the Kingdom.",
        "Our Values": "Our Values",
        "Integrity": "Integrity",
        "Upholding the highest ethical standards in every case.": "Upholding the highest ethical standards in every case.",
        "Excellence": "Excellence",
        "Delivering exceptional results through dedication and expertise.": "Delivering exceptional results through dedication and expertise.",
        "Innovation": "Innovation",
        "Embracing modern legal solutions for Saudi Arabia's evolving landscape.": "Embracing modern legal solutions for Saudi Arabia's evolving landscape.",
        "Client Focus": "Client Focus",
        "Putting our clients' interests at the heart of everything we do.": "Putting our clients' interests at the heart of everything we do.",
        "Meet Our Team": "Meet Our Team",
        "Senior Partner": "Senior Partner",
        "Managing Partner": "Managing Partner",
        "Senior Associate": "Senior Associate",
        "Our Mission": "Our Mission",
        "To provide world-class legal services that empower our clients to achieve their goals while upholding the principles of justice and the laws of Saudi Arabia.": "To provide world-class legal services that empower our clients to achieve their goals while upholding the principles of justice and the laws of Saudi Arabia.",
        // Contact Page
        "Get in Touch": "Get in Touch",
        "We'd love to hear from you. Reach out for a consultation.": "We'd love to hear from you. Reach out for a consultation.",
        "Your Name": "Your Name",
        "Email Address": "Email Address",
        "Phone Number": "Phone Number",
        "How can we help?": "How can we help?",
        "Send Message": "Send Message",
        "Our Office": "Our Office",
        "Visit us at our Riyadh headquarters.": "Visit us at our Riyadh headquarters.",
        "Working Hours": "Working Hours",
        "Sunday - Thursday": "Sunday - Thursday",
        "9:00 AM - 6:00 PM": "9:00 AM - 6:00 PM",
        "Friday - Saturday": "Friday - Saturday",
        "Closed": "Closed"
    },
    ar: {
        // Nav
        "Home": "الرئيسية",
        "About the Firm": "عن المكتب",
        "Expertise": "خبراتنا",
        "Contact": "تواصل",
        "Get Started": "ابدأ الآن",
        "Learn More": "اعرف المزيد",
        "Schedule Consultation": "احجز استشارة",
        "Our Services": "خدماتنا",
        "Book Consultation": "احجز استشارة",
        "Partner With Us": "شاركنا",
        "Scroll": "اسحب",
        // About
        "About Us": "من نحن",
        "A Legacy of Legal Excellence in Saudi Arabia": "إرث من التميّز القانوني في المملكة العربية السعودية",
        "Years of Practice": "سنة من الممارسة",
        "Expert Lawyers": "محامٍ خبير",
        "Cases Handled": "قضية تم التعامل معها",
        // Services
        "Our Expertise": "خبراتنا",
        "Comprehensive Legal Solutions": "حلول قانونية شاملة",
        "Corporate Law": "قانون الشركات",
        "Real Estate Law": "قانون العقارات",
        "Family Law": "قانون الأسرة",
        "International Law": "القانون الدولي",
        "Vision 2030 Projects": "مشاريع رؤية 2030",
        "Labor & Employment": "العمالة والتوظيف",
        // Vision
        "Vision 2030": "رؤية 2030",
        "Supporting Saudi Arabia's Bold Transformation": "دعم التحول الجريء للمملكة العربية السعودية",
        "NEOM": "نيوم",
        "The Red Sea": "البحر الأحمر",
        "Qiddiya": "قيدية",
        // Testimonials
        "Testimonials": "شهادات",
        "Trusted by Industry Leaders": "موثوق من قادة الصناعة",
        // CTA
        "Ready to Secure Your Legal Future?": "مستعد لتأمين مستقبلك القانوني؟",
        "SCHEDULE A CONSULTATION": "احجز استشارة",
        // Footer
        "Quick Links": "روابط سريعة",
        "Legal Services": "الخدمات القانونية",
        "Contact Info": "معلومات التواصل",
        "All rights reserved.": "جميع الحقوق محفوظة.",
        "Developed by": "تطوير بواسطة",
        // Practice Areas Page
        "Practice Areas": "ممارساتنا القانونية",
        "Our Legal Expertise": "خبرتنا القانونية",
        "Comprehensive legal services tailored to your needs across Saudi Arabia.": "خدمات قانونية شاملة مصممة وفقاً لاحتياجاتك في جميع أنحاء المملكة العربية السعودية.",
        "Corporate & Commercial Law": "قانون الشركات والتجارة",
        "Business Formation": "تأسيس الأعمال",
        "Company registration, licensing, and compliance with Saudi regulations.": "تسجيل الشركات والتراخيص والامتثال للوائح السعودية.",
        "Mergers & Acquisitions": "الاندماج والاستحواذ",
        "Strategic guidance through complex M&A transactions": "التوجيه الاستراتيجي عبر معاملات الاندماج والاستحواذ المعقدة",
        "Contract Drafting": "وضع العقود",
        "Professional contract review, negotiation, and drafting services.": "خدمات مراجعة وتفاوض وصياغة العقود الاحترافية.",
        "Joint Ventures": "المشاركات المشتركة",
        "Partnership structuring and joint venture agreements.": "هيكلة الشراكات واتفاقيات المشاركات المشتركة.",
        "Real Estate & Property Law": "قانون العقارات والممتلكات",
        "Property Transactions": "المعاملات العقارية",
        "Buy, sell, or lease property with full legal protection.": "شراء أو بيع أو تأجير العقارات مع الحماية القانونية الكاملة.",
        "Land Registry": "سجل الأراضي",
        "Title verification and land registration services.": "خدمات التحقق منOwnership وتسجيل الأراضي.",
        "Construction Disputes": "نزاعات البناء",
        "Resolution of construction and development conflicts.": "حل نزاعات البناء والتطوير.",
        "Family & Personal Law": "قانون الأسرة والشؤون الشخصية",
        "Marriage Contracts": "عقود الزواج",
        "Islamic marriage contract (Nikah) drafting and review.": "صياغة ومراجعة عقد الزواج الإسلامي (النكاح).",
        "Divorce & Custody": "الطلاق والحضانة",
        "Compassionate guidance through family disputes.": "التوجيه الرحيم عبر النزاعات الأسرية.",
        "Inheritance": "الميراث",
        "Islamic inheritance (Mirath) calculation and distribution.": "حساب وتوزيع الميراث الإسلامي.",
        "Labor & Employment Law": "قانون العمل والتوظيف",
        "Employment Contracts": "عقود التوظيف",
        "Drafting compliant employment agreements.": "صياغة اتفاقيات التوظيف المتوافقة.",
        "Saudization Compliance": "امتثال التوطين",
        "Navigate Nitaqat and Saudization requirements.": "التعامل مع متطلبات نطاق والتوطين.",
        "Dispute Resolution": "حل النزاعات",
        "Labor dispute mediation and arbitration.": "وساطة وتحكيم نزاعات العمل.",
        "Vision 2030 Legal Advisory": "استشارات رؤية 2030 القانونية",
        "NEOM Legal Framework": "الإطار القانوني لنيوم",
        "Legal support for NEOM project development.": "الدعم القانوني لتطوير مشروع نيوم.",
        "Red Sea Project": "مشروع البحر الأحمر",
        "Tourism and hospitality legal advisory.": "الاستشارات القانونية للسياحة والضيافة.",
        "Qiddiya Compliance": "امتثال قيدية",
        "Entertainment and sports venue legal compliance.": "الامتثال القانوني لمرافق الترفيه والرياضة.",
        "Have a question?": "لديك سؤال؟",
        "Our team is ready to help.": "فريقنا جاهز للمساعدة.",
        "Contact Us": "تواصل معنا",
        // About Page
        "Our Story": "قصتنا",
        "Founded in 1998 by Sheikh Abdullah Al-Nadwi, our firm began as a small practice in Riyadh's historic district. Over 25 years, we have grown into one of Saudi Arabia's most respected legal consultancies, serving over 3,000 clients across the Kingdom.": "تأسست في عام 1998 على يد الشيخ عبدالله الندوي، بدأت شركتنا كممارسة صغيرة في الحي التاريخي في الرياض. على مدى 25 عاماً، نمونا لتصبح واحدة من أكثر شركات الاستشارات القانونية احتراماً في المملكة العربية السعودية، حيث خدمنا أكثر من 3000 عميل في جميع أنحاء المملكة.",
        "Our Values": "قيمنا",
        "Integrity": "النزاهة",
        "Upholding the highest ethical standards in every case.": "الالتزام بأعلى المعايير الأخلاقية في كل قضية.",
        "Excellence": "التميز",
        "Delivering exceptional results through dedication and expertise.": "تقديم نتائج استثنائية من خلال التفاني والخبرة.",
        "Innovation": "الابتكار",
        "Embracing modern legal solutions for Saudi Arabia's evolving landscape.": "تبني الحلول القانونية الحديثة للمشهد المتطور في المملكة العربية السعودية.",
        "Client Focus": "التركيز على العميل",
        "Putting our clients' interests at the heart of everything we do.": "وضع مصالح عملائنا في صميم كل ما نفعله.",
        "Meet Our Team": "تعرف على فريقنا",
        "Senior Partner": "شريك أول",
        "Managing Partner": "شريك إداري",
        "Senior Associate": "محامٍ أول",
        "Our Mission": "مهمتنا",
        "To provide world-class legal services that empower our clients to achieve their goals while upholding the principles of justice and the laws of Saudi Arabia.": "تقديم خدمات قانونية عالمية المستوى تمكّن عملائنا من تحقيق أهدافهم مع الحفاظ على مبادئ العدالة وقوانين المملكة العربية السعودية.",
        // Contact Page
        "Get in Touch": "تواصل معنا",
        "We'd love to hear from you. Reach out for a consultation.": "نحب أن نسمع منك. تواصل معنا لاستشارة.",
        "Your Name": "اسمك",
        "Email Address": "البريد الإلكتروني",
        "Phone Number": "رقم الهاتف",
        "How can we help?": "كيف يمكننا المساعدة؟",
        "Send Message": "إرسال الرسالة",
        "Our Office": "مكتبنا",
        "Visit us at our Riyadh headquarters.": "زورنا في مقرنا الرئيسي بالرياض.",
        "Working Hours": "ساعات العمل",
        "Sunday - Thursday": "الأحد - الخميس",
        "9:00 AM - 6:00 PM": "٩:٠٠ صباحاً - ٦:٠٠ مساءً",
        "Friday - Saturday": "الجمعة - السبت",
        "Closed": "مغلق"
    }
};

// ===== Global State =====
let currentLang = localStorage.getItem('lang') || 'en';

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {
    var preloader = document.getElementById('preloader');
    
    function hidePreloader() {
        if (preloader) preloader.classList.add('hidden');
        document.body.classList.remove('loading');
        document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-card').forEach(function(el, i) {
            setTimeout(function() { el.classList.add('revealed'); }, i * 100);
        });
    }
    
    setTimeout(hidePreloader, 2000);
    
    initNav();
    initAboutParticles();
    initVisionParticles();
    initLangToggle();
    initScrollAnimations();
    initCounterAnimations();
    initFooterParticles();
    initPageTransitions();
    applyLanguage();
    applyRTLHero();
    
});

// ===== About Section Particles =====
function initAboutParticles() {
    const container = document.getElementById('aboutParticles');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'about-particle' + (Math.random() > 0.7 ? ' line' : '');
        
        const size = Math.random() * 4 + 2;
        particle.style.width = particle.classList.contains('line') ? '1px' : size + 'px';
        particle.style.height = particle.classList.contains('line') ? (Math.random() * 40 + 20) + 'px' : size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        container.appendChild(particle);
    }
}

// ===== Vision Section Particles =====
function initVisionParticles() {
    const container = document.getElementById('visionParticles');
    if (!container) return;
    
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'vision-particle';
        
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 12 + 8) + 's';
        particle.style.animationDelay = (Math.random() * 8) + 's';
        
        container.appendChild(particle);
    }
}

// ===== Navigation =====
function initNav() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ===== Language Toggle =====
function initLangToggle() {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.addEventListener('click', toggleLang);
    }
}

function toggleLang() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
    applyRTLHero();
}

function applyRTLHero() {
    const parts = document.querySelectorAll('.about-hero-part');
    if (!parts.length) return;
    const isRTL = document.documentElement.dir === 'rtl';
    parts.forEach(part => {
        part.style.display = part.getAttribute('data-lang') === (isRTL ? 'rtl' : 'ltr') ? '' : 'none';
    });
}

function applyLanguage() {
    const langText = document.getElementById('langText');
    const mobileLangText = document.getElementById('mobileLangText');
    
    if (langText) langText.textContent = currentLang === 'en' ? 'عربي' : 'EN';
    if (mobileLangText) mobileLangText.textContent = currentLang === 'en' ? 'عربي' : 'EN';
    
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        const key = el.getAttribute('data-' + currentLang);
        if (key && translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        } else if (key) {
            el.textContent = key;
        }
    });
    
    if (currentLang === 'ar') {
        document.body.style.fontFamily = "'Noto Kufi Arabic', 'Outfit', sans-serif";
    } else {
        document.body.style.fontFamily = "'Outfit', sans-serif";
    }
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Counter Animations =====
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString();
    }, 30);
}

// ===== Footer Particles =====
function initFooterParticles() {
    const container = document.getElementById('footerParticles');
    if (!container) return;
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'footer-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (15 + Math.random() * 15) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ===== Page Transitions =====
function initPageTransitions() {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('http') && !href.endsWith('.pdf')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                transition.classList.add('active');
                setTimeout(() => {
                    window.location.href = href;
                }, 600);
            });
        }
    });
    
    window.addEventListener('pageshow', () => {
        transition.classList.remove('active');
    });
}

// ===== Smooth Scroll for Anchors =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
