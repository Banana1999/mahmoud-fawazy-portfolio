/**
 * MohamedFawazy Portfolio — script.js
 * Pure Vanilla JavaScript — No frameworks, no dependencies.
 *
 * TABLE OF CONTENTS
 *  1.  Translations
 *  2.  Theme Manager
 *  3.  Language Manager
 *  4.  Loading Screen
 *  5.  Navigation (scroll + mobile menu + active link)
 *  6.  Particle Background
 *  7.  Typing Effect (hero role)
 *  8.  Scroll Reveal (IntersectionObserver)
 *  9.  Tilt Effect (skill cards)
 * 10.  Portfolio Filter
 * 11.  Contact Form Validation
 * 12.  Ripple Effect
 * 13.  Back-to-Top Button
 * 14.  Init
 */

'use strict';

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    // Loading
    loading: 'MahmoudFawazy Portfolio',
    // Logo
    logoName: 'Mahmoud Fawazy',
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navPortfolio: 'Portfolio',
    navContact: 'Contact',
    downloadCV: 'CV',
    downloadCVFull: 'Download CV',
    // Hero
    heroGreeting: "Hello, I'm",
    heroRolePrefix: "I'm a",
    heroBio: 'Over 16 years of expertise in print design — delivering precision, quality, and creativity across every printed piece. From concept to production, I make print work.',
    contactMe: 'Contact Me',
    statYears: 'Years Exp.',
    statProjects: 'Projects',
    statClients: 'Clients',
    // Hero roles (typed)
    heroRoles: ['Graphic Designer', 'Print Design Expert', 'Creative Director', 'Print Production Specialist'],
    // About
    aboutTag: 'Get to know me',
    aboutTitle: 'About Me',
    aboutSubtitle: 'Print Design Expert',
    aboutDesc1: "I'm Mahmoud Fawazy, a print design expert with over 16 years of experience. Print is my passion and my craft — from brochures and roll-ups to large-format banners, I bring precision and creativity to every piece that goes to press.",
    aboutDesc2: 'My work covers every stage — from initial concept to press-ready files — ensuring every detail is sharp, every colour is accurate, and every printed piece is something to be proud of.',
    badgeYears: 'Years of\nExperience',
    specTitle: 'Specialized in:',
    spec1: 'Brand Identity',
    spec2: 'Print Design',
    spec3: 'Social Media Design',
    spec4: 'Marketing Designs',
    spec5: 'Large Format & Banners',
    // Skills
    skillsTag: 'What I Use',
    skillsTitle: 'My Skills',
    skillPS: 'Adobe Photoshop',
    skillPSDesc: 'Photo editing, digital painting, compositing, and advanced retouching for print and digital media.',
    skillAI: 'Adobe Illustrator',
    skillAIDesc: 'Vector illustration, logo design, iconography, and scalable graphics for brand identity systems.',
    skillCDR: 'CorelDRAW',
    skillCDRDesc: 'Professional vector design, print production, layout design, and technical illustration for diverse industries.',
    // Portfolio
    portfolioTag: 'My Work',
    portfolioTitle: 'Portfolio',
    filterAll: 'All',
    filterBrand: 'Brand Identity',
    filterPrint: 'Print',
    filterSocial: 'Social Media',
    filterMarketing: 'Marketing',
    catBrand: 'Brand Identity',
    catPrint: 'Print Design',
    catSocial: 'Social Media',
    catMarketing: 'Marketing',
    viewProject: 'View Project',
    proj1Title: 'Logo Design',
    proj2Title: 'Print Design',
    proj3Title: 'Social Media Design',
    proj4Title: 'Roll Up Design',
    proj5Title: 'Logo Design II',
    proj6Title: 'Visual Design',
    proj7Title: 'Social Media Design II',
    proj8Title: 'Social Media Design III',
    proj9Title: 'Marketing Design',
    proj10Title: 'Logo Design III',
    proj11Title: 'Design Print',
    proj12Title: 'Backcare Design I',
    proj13Title: 'Backcare Design II',
    proj14Title: 'Backcare Design III',
    proj15Title: 'Backcare Design IV',
    proj16Title: 'Backcare Design V',
    proj17Title: 'Backcare Design VI',
    proj18Title: 'Backcare Design VII',
    proj19Title: 'Facade 3D Design I',
    proj20Title: 'Facade 3D Design II',
    proj21Title: 'Facade 3D Design III',
    proj22Title: 'Facade 3D Design IV',
    proj23Title: 'Facade 3D Design V',
    proj24Title: 'Facade 3D Design VI',
    proj25Title: 'Facade 3D Design VII',
    proj26Title: 'Facade 3D Design VIII',
    proj27Title: 'Othaim Design I',
    proj28Title: 'Othaim Design II',
    proj29Title: 'Othaim Design III',
    proj30Title: 'Othaim Design IV',
    proj31Title: 'Othaim Design V',
    proj32Title: 'STC Design I',
    proj33Title: 'STC Design II',
    proj34Title: 'STC Design III',
    proj35Title: 'Profile Design I',
    proj36Title: 'Profile Design II',
    proj37Title: 'Profile Design III',
    proj38Title: 'Social Media 1',
    proj39Title: 'Social Media 2',
    proj40Title: 'Social Media 3',
    proj41Title: 'Social Media 4',
    proj42Title: 'Social Media 5',
    proj43Title: 'Social Media 6',
    proj44Title: 'Social Media 7',
    proj45Title: 'Social Media 8',
    proj46Title: 'Social Media 9',
    proj47Title: 'Social Media 10',
    proj48Title: 'Social Media 11',
    proj49Title: 'Social Media 12',
    proj50Title: 'Social Media 13',
    proj51Title: 'Social Media 14',
    proj52Title: 'Social Media 15',
    proj53Title: 'Social Media 16',
    proj54Title: 'Social Media 17',
    proj55Title: 'Social Media 18',
    proj56Title: 'Social Media 19',
    // Social
    socialTag: 'Find me online',
    socialTitle: "Let's Connect",
    // Contact
    contactTag: 'Get in touch',
    contactTitle: 'Contact Me',
    contactIntro: "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactWhatsApp: 'WhatsApp',
    contactLocation: 'Location',
    contactCity: 'Riyadh, Saudi Arabia',
    formName: 'Full Name',
    formNamePlaceholder: 'Your full name',
    formEmail: 'Email Address',
    formEmailPlaceholder: 'your@email.com',
    formMessage: 'Message',
    formMessagePlaceholder: 'Tell me about your project...',
    formSend: 'Send Message',
    formSuccess: 'Your message was sent successfully!',
    // Validation errors
    errName: 'Please enter your full name.',
    errNameMin: 'Name must be at least 2 characters.',
    errEmail: 'Please enter a valid email address.',
    errMessage: 'Please enter your message.',
    errMessageMin: 'Message must be at least 10 characters.',
    // Footer
    footerCopy: '© 2026 Mahmoud Fawazy. All Rights Reserved.',
    footerCredit: 'Crafted with passion & creativity',
  },

  ar: {
    // Loading
    loading: 'محفظة محمود فوزي',
    // Logo
    logoName: 'محمود فوزي',
    // Navbar
    navHome: 'الرئيسية',
    navAbout: 'نبذة عني',
    navSkills: 'مهاراتي',
    navPortfolio: 'أعمالي',
    navContact: 'تواصل معي',
    downloadCV: 'السيرة',
    downloadCVFull: 'تحميل السيرة الذاتية',
    // Hero
    heroGreeting: 'مرحباً، أنا',
    heroRolePrefix: 'أنا',
    heroBio: 'أكثر من 16 عاماً من الخبرة في تصميم المطبوعات — دقة واحترافية وإبداع في كل قطعة مطبوعة. من الفكرة إلى الإنتاج، أجعل المطبوعات تتحدث.',
    contactMe: 'تواصل معي',
    statYears: 'سنوات خبرة',
    statProjects: 'مشروع',
    statClients: 'عميل',
    // Hero roles (typed) — Arabic
    heroRoles: ['مصمم جرافيك', 'خبير مطبوعات', 'مدير إبداعي', 'متخصص إنتاج مطبوع'],
    // About
    aboutTag: 'تعرف علي',
    aboutTitle: 'نبذة عني',
    aboutSubtitle: 'خبير مطبوعات',
    aboutDesc1: 'أنا محمود فوزي، خبير مطبوعات بأكثر من 16 عاماً من الخبرة. المطبوعات هي شغفي وحرفتي — من البروشورات والرول أب إلى اللافتات الكبيرة، أضع الدقة والإبداع في كل قطعة تذهب للطباعة.',
    aboutDesc2: 'عملي يغطي كل مرحلة — من الفكرة الأولى حتى الملف الجاهز للطباعة — مع ضمان حدة كل تفصيلة ودقة كل لون واحترافية كل قطعة مطبوعة.',
    badgeYears: 'سنوات\nمن الخبرة',
    specTitle: 'متخصص في:',
    spec1: 'الهوية التجارية',
    spec2: 'تصميم المطبوعات',
    spec3: 'تصميم السوشيال ميديا',
    spec4: 'تصميمات تسويقية',
    spec5: 'لافتات وطباعة كبيرة',
    // Skills
    skillsTag: 'ما أستخدمه',
    skillsTitle: 'مهاراتي',
    skillPS: 'أدوبي فوتوشوب',
    skillPSDesc: 'تحرير الصور والرسم الرقمي والتركيب والتشطيب المتقدم للوسائط المطبوعة والرقمية.',
    skillAI: 'أدوبي إليستريتور',
    skillAIDesc: 'الرسم الفيكتوري وتصميم الشعارات والأيقونات والرسومات القابلة للتحجيم لأنظمة الهوية التجارية.',
    skillCDR: 'كوريل درو',
    skillCDRDesc: 'تصميم فيكتور احترافي وإنتاج مطبوع وتصميم تخطيط ورسم توضيحي تقني للصناعات المتنوعة.',
    // Portfolio
    portfolioTag: 'أعمالي',
    portfolioTitle: 'معرض الأعمال',
    filterAll: 'الكل',
    filterBrand: 'هوية تجارية',
    filterPrint: 'مطبوعات',
    filterSocial: 'سوشيال ميديا',
    filterMarketing: 'تسويق',
    catBrand: 'هوية تجارية',
    catPrint: 'تصميم مطبوع',
    catSocial: 'سوشيال ميديا',
    catMarketing: 'تسويق',
    viewProject: 'عرض المشروع',
    proj1Title: 'تصميم لوجو',
    proj2Title: 'تصميم مطبوع',
    proj3Title: 'تصميم سوشيال ميديا',
    proj4Title: 'تصميم رول أب',
    proj5Title: 'تصميم لوجو II',
    proj6Title: 'تصميم بصري',
    proj7Title: 'تصميم سوشيال ميديا II',
    proj8Title: 'تصميم سوشيال ميديا III',
    proj9Title: 'تصميم تسويقي',
    proj10Title: 'تصميم لوجو III',
    proj11Title: 'تصميم مطبوع II',
    proj12Title: 'تصميم باك كير I',
    proj13Title: 'تصميم باك كير II',
    proj14Title: 'تصميم باك كير III',
    proj15Title: 'تصميم باك كير IV',
    proj16Title: 'تصميم باك كير V',
    proj17Title: 'تصميم باك كير VI',
    proj18Title: 'تصميم باك كير VII',
    proj19Title: 'واجهة ثلاثية الأبعاد I',
    proj20Title: 'واجهة ثلاثية الأبعاد II',
    proj21Title: 'واجهة ثلاثية الأبعاد III',
    proj22Title: 'واجهة ثلاثية الأبعاد IV',
    proj23Title: 'واجهة ثلاثية الأبعاد V',
    proj24Title: 'واجهة ثلاثية الأبعاد VI',
    proj25Title: 'واجهة ثلاثية الأبعاد VII',
    proj26Title: 'واجهة ثلاثية الأبعاد VIII',
    proj27Title: 'تصميم العثيم I',
    proj28Title: 'تصميم العثيم II',
    proj29Title: 'تصميم العثيم III',
    proj30Title: 'تصميم العثيم IV',
    proj31Title: 'تصميم العثيم V',
    proj32Title: 'تصميم STC I',
    proj33Title: 'تصميم STC II',
    proj34Title: 'تصميم STC III',
    proj35Title: 'تصميم بروفايل I',
    proj36Title: 'تصميم بروفايل II',
    proj37Title: 'تصميم بروفايل III',
    proj38Title: 'سوشيال ميديا 1',
    proj39Title: 'سوشيال ميديا 2',
    proj40Title: 'سوشيال ميديا 3',
    proj41Title: 'سوشيال ميديا 4',
    proj42Title: 'سوشيال ميديا 5',
    proj43Title: 'سوشيال ميديا 6',
    proj44Title: 'سوشيال ميديا 7',
    proj45Title: 'سوشيال ميديا 8',
    proj46Title: 'سوشيال ميديا 9',
    proj47Title: 'سوشيال ميديا 10',
    proj48Title: 'سوشيال ميديا 11',
    proj49Title: 'سوشيال ميديا 12',
    proj50Title: 'سوشيال ميديا 13',
    proj51Title: 'سوشيال ميديا 14',
    proj52Title: 'سوشيال ميديا 15',
    proj53Title: 'سوشيال ميديا 16',
    proj54Title: 'سوشيال ميديا 17',
    proj55Title: 'سوشيال ميديا 18',
    proj56Title: 'سوشيال ميديا 19',
    // Social
    socialTag: 'ابحث عني',
    socialTitle: 'تواصل معي',
    // Contact
    contactTag: 'تواصل معي',
    contactTitle: 'تواصل معي',
    contactIntro: 'هل لديك مشروع في ذهنك؟ يسعدني سماعه. لنبتكر شيئاً رائعاً معاً.',
    contactEmail: 'البريد الإلكتروني',
    contactPhone: 'رقم الهاتف',
    contactWhatsApp: 'واتساب',
    contactLocation: 'الموقع',
    contactCity: 'الرياض، المملكة العربية السعودية',
    formName: 'الاسم الكامل',
    formNamePlaceholder: 'اكتب اسمك الكامل',
    formEmail: 'البريد الإلكتروني',
    formEmailPlaceholder: 'your@email.com',
    formMessage: 'الرسالة',
    formMessagePlaceholder: 'أخبرني عن مشروعك...',
    formSend: 'إرسال الرسالة',
    formSuccess: 'تم إرسال رسالتك بنجاح!',
    // Validation errors
    errName: 'من فضلك أدخل اسمك الكامل.',
    errNameMin: 'يجب أن يكون الاسم حرفين على الأقل.',
    errEmail: 'من فضلك أدخل بريدًا إلكترونيًا صحيحًا.',
    errMessage: 'من فضلك أدخل رسالتك.',
    errMessageMin: 'يجب أن تكون الرسالة 10 أحرف على الأقل.',
    // Footer
    footerCopy: '© 2026 محمود فوزي. جميع الحقوق محفوظة.',
    footerCredit: 'صُنع بشغف وإبداع',
  },
};

/* ============================================================
   2. THEME MANAGER
   ============================================================ */
const ThemeManager = (() => {
  const STORAGE_KEY = 'mf-theme';
  const DARK  = 'dark';
  const LIGHT = 'light';

  /** Read saved theme or detect system preference */
  function getInitial() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === DARK || saved === LIGHT) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK;
  }

  /** Apply theme to <html> element */
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /** Toggle between dark and light */
  function toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    apply(current === DARK ? LIGHT : DARK);
  }

  function init() {
    apply(getInitial());

    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
  }

  return { init, apply, toggle };
})();

/* ============================================================
   3. LANGUAGE MANAGER
   ============================================================ */
const LangManager = (() => {
  const STORAGE_KEY = 'mf-lang';
  let currentLang = 'en';

  /** Apply a language to the DOM */
  function apply(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    const t = translations[lang];

    // Update <html> lang + dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update lang toggle button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Restart typing effect with new roles
    if (window._typingInstance) {
      window._typingInstance.restart(t.heroRoles || []);
    }
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || 'en';
    apply(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => apply(btn.dataset.lang));
    });
  }

  function getCurrent() { return currentLang; }
  function getT()       { return translations[currentLang]; }

  return { init, apply, getCurrent, getT };
})();

/* ============================================================
   4. LOADING SCREEN
   ============================================================ */
const LoadingScreen = (() => {
  function hide() {
    const screen = document.getElementById('loading-screen');
    if (!screen) return;
    screen.classList.add('hidden');
    // Remove from DOM after transition so it doesn't block accessibility
    screen.addEventListener('transitionend', () => screen.remove(), { once: true });
  }

  function init() {
    // Hide after 2 seconds (loader-bar animation is 1.8s)
    window.setTimeout(hide, 2000);
  }

  return { init };
})();

/* ============================================================
   5. NAVIGATION
   ============================================================ */
const Navigation = (() => {
  let scrollTimer = null;

  function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Scrolled state
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link based on section in view
    const sections = document.querySelectorAll('main section[id]');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function toggleMobileMenu() {
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('nav-links-mobile');
    if (!hamburger || !mobileMenu) return;

    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  }

  function closeMobileMenu() {
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('nav-links-mobile');
    if (!hamburger || !mobileMenu) return;

    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  function init() {
    // Scroll listener (throttled)
    window.addEventListener('scroll', () => {
      if (scrollTimer) return;
      scrollTimer = window.requestAnimationFrame(() => {
        handleScroll();
        scrollTimer = null;
      });
    }, { passive: true });

    handleScroll(); // Run once on load

    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

    // Close mobile menu on nav link click
    document.querySelectorAll('.nav-mobile .nav-link, .nav-mobile .btn-cv').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  return { init };
})();

/* ============================================================
   6. PARTICLE BACKGROUND
   ============================================================ */
const Particles = (() => {
  let canvas, ctx, particles, animFrame;
  const PARTICLE_COUNT = 60;
  const MAX_DIST       = 130;

  class Particle {
    constructor(w, h) {
      this.reset(w, h);
    }

    reset(w, h) {
      this.x   = Math.random() * w;
      this.y   = Math.random() * h;
      this.vx  = (Math.random() - 0.5) * 0.5;
      this.vy  = (Math.random() - 0.5) * 0.5;
      this.r   = Math.random() * 2 + 1;
      this.a   = Math.random() * 0.6 + 0.2;
    }

    update(w, h) {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = w;
      if (this.x > w) this.x = 0;
      if (this.y < 0) this.y = h;
      if (this.y > h) this.y = 0;
    }
  }

  function getAccentRGB() {
    // Read accent color from CSS variable
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'light' ? '0, 153, 204' : '0, 212, 255';
  }

  function draw() {
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const rgb = getAccentRGB();

    particles.forEach((p, i) => {
      p.update(w, h);

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, ${p.a})`;
      ctx.fill();

      // Draw connection lines
      for (let j = i + 1; j < particles.length; j++) {
        const q    = particles[j];
        const dx   = p.x - q.x;
        const dy   = p.y - q.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MAX_DIST) {
          const lineA = (1 - dist / MAX_DIST) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${rgb}, ${lineA})`;
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    });

    animFrame = requestAnimationFrame(draw);
  }

  function resize() {
    if (!canvas) return;
    const hero   = document.getElementById('home');
    canvas.width  = hero ? hero.offsetWidth  : window.innerWidth;
    canvas.height = hero ? hero.offsetHeight : window.innerHeight;
  }

  function init() {
    canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resize();

    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle(canvas.width, canvas.height));

    window.addEventListener('resize', () => {
      resize();
      // Reposition particles within new bounds
      particles.forEach(p => p.reset(canvas.width, canvas.height));
    }, { passive: true });

    draw();
  }

  return { init };
})();

/* ============================================================
   7. TYPING EFFECT (Hero Role)
   ============================================================ */
const TypingEffect = (() => {
  let roles        = [];
  let roleIndex    = 0;
  let charIndex    = 0;
  let isDeleting   = false;
  let timeoutId    = null;
  let targetEl     = null;

  const TYPE_SPEED   = 100;
  const DELETE_SPEED = 60;
  const PAUSE_AFTER  = 2000;
  const PAUSE_BEFORE = 400;

  function tick() {
    if (!targetEl || !roles.length) return;

    const current = roles[roleIndex % roles.length];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    targetEl.textContent = current.substring(0, charIndex);

    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    if (!isDeleting && charIndex === current.length) {
      // Fully typed — pause then delete
      delay = PAUSE_AFTER;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Fully deleted — move to next role
      isDeleting = false;
      roleIndex++;
      delay = PAUSE_BEFORE;
    }

    timeoutId = window.setTimeout(tick, delay);
  }

  function restart(newRoles) {
    if (timeoutId) window.clearTimeout(timeoutId);
    roles      = newRoles;
    roleIndex  = 0;
    charIndex  = 0;
    isDeleting = false;
    if (targetEl) targetEl.textContent = '';
    timeoutId  = window.setTimeout(tick, 500);
  }

  function init() {
    targetEl = document.getElementById('typed-role');
    if (!targetEl) return;

    const t = LangManager.getT();
    roles    = t.heroRoles || ['Graphic Designer'];

    window._typingInstance = { restart };
    tick();
  }

  return { init };
})();

/* ============================================================
   8. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
const ScrollReveal = (() => {
  function init() {
    const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only reveal once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  return { init };
})();

/* ============================================================
   9. TILT EFFECT (Skill Cards)
   ============================================================ */
const TiltEffect = (() => {
  const INTENSITY = 12; // Max tilt degrees
  const SCALE     = 1.03;

  function bindCard(card) {
    function onMouseMove(e) {
      const rect    = card.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const mouseX  = e.clientX - centerX;
      const mouseY  = e.clientY - centerY;
      const rotateX = -(mouseY / (rect.height / 2)) * INTENSITY;
      const rotateY =  (mouseX / (rect.width  / 2)) * INTENSITY;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${SCALE})`;
    }

    function onMouseLeave() {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.transition = 'transform 0.4s ease';
    }

    function onMouseEnter() {
      card.style.transition = 'transform 0.1s ease';
    }

    card.addEventListener('mousemove',  onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
    card.addEventListener('mouseenter', onMouseEnter);
  }

  function init() {
    // Only apply on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.tilt-card').forEach(bindCard);
  }

  return { init };
})();

/* ============================================================
   10. PORTFOLIO FILTER
   ============================================================ */
const PortfolioFilter = (() => {
  function init() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards      = document.querySelectorAll('.portfolio-card');

    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Show/hide cards with a smooth fade
        cards.forEach(card => {
          const category = card.dataset.category;
          const show     = filter === 'all' || category === filter;

          if (show) {
            card.style.display = '';
            // Force reflow for animation
            void card.offsetWidth;
            card.style.opacity   = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.style.opacity   = '0';
            card.style.transform = 'scale(0.92)';
            window.setTimeout(() => {
              if (card.style.opacity === '0') card.style.display = 'none';
            }, 280);
          }
        });
      });
    });

    // Apply initial styles
    cards.forEach(card => {
      card.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
    });
  }

  return { init };
})();

/* ============================================================
   11. CONTACT FORM VALIDATION
   ============================================================ */
const ContactForm = (() => {
  function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input)  input.classList.add('error');
    if (error)  error.textContent = message;
  }

  function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input)  input.classList.remove('error');
    if (error)  error.textContent = '';
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validate() {
    const t       = LangManager.getT();
    const name    = document.getElementById('form-name')?.value.trim()    || '';
    const email   = document.getElementById('form-email')?.value.trim()   || '';
    const message = document.getElementById('form-message')?.value.trim() || '';
    let   valid   = true;

    // Name
    clearError('form-name', 'error-name');
    if (!name) {
      showError('form-name', 'error-name', t.errName);
      valid = false;
    } else if (name.length < 2) {
      showError('form-name', 'error-name', t.errNameMin);
      valid = false;
    }

    // Email
    clearError('form-email', 'error-email');
    if (!email || !validateEmail(email)) {
      showError('form-email', 'error-email', t.errEmail);
      valid = false;
    }

    // Message
    clearError('form-message', 'error-message');
    if (!message) {
      showError('form-message', 'error-message', t.errMessage);
      valid = false;
    } else if (message.length < 10) {
      showError('form-message', 'error-message', t.errMessageMin);
      valid = false;
    }

    return valid;
  }

  function init() {
    const form       = document.getElementById('contact-form');
    const submitBtn  = document.getElementById('form-submit');
    const successMsg = document.getElementById('form-success');

    if (!form) return;

    // Real-time validation — clear errors as user types
    ['form-name', 'form-email', 'form-message'].forEach(id => {
      const errorId = id.replace('form-', 'error-');
      document.getElementById(id)?.addEventListener('input', () => clearError(id, errorId));
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate()) return;

      // Simulate sending
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> <span>Sending…</span>';
      }

      window.setTimeout(() => {
        // Show success
        if (successMsg) successMsg.removeAttribute('hidden');
        form.reset();

        // Reset button
        if (submitBtn) {
          const t = LangManager.getT();
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane" aria-hidden="true"></i> <span>${t.formSend}</span>`;
        }

        // Hide success after 5 seconds
        window.setTimeout(() => {
          if (successMsg) successMsg.setAttribute('hidden', '');
        }, 5000);
      }, 1500);
    });
  }

  return { init };
})();

/* ============================================================
   12. RIPPLE EFFECT
   ============================================================ */
const RippleEffect = (() => {
  function createRipple(e) {
    const btn  = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x    = e.clientX - rect.left - size / 2;
    const y    = e.clientY - rect.top  - size / 2;

    const wave = document.createElement('span');
    wave.classList.add('ripple-wave');
    wave.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${x}px;
      top:    ${y}px;
    `;

    btn.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove(), { once: true });
  }

  function init() {
    document.querySelectorAll('.ripple').forEach(btn => {
      btn.addEventListener('click', createRipple);
    });
  }

  return { init };
})();

/* ============================================================
   13. BACK-TO-TOP BUTTON
   ============================================================ */
const BackToTop = (() => {
  function init() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.removeAttribute('hidden');
      } else {
        btn.setAttribute('hidden', '');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  return { init };
})();

/* ============================================================
   14. INIT — wire everything up on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Order matters: theme + language first (affects UI), then loading screen
  ThemeManager.init();
  LangManager.init();
  LoadingScreen.init();
  Navigation.init();
  Particles.init();
  TypingEffect.init();
  ScrollReveal.init();
  TiltEffect.init();
  PortfolioFilter.init();
  Lightbox.init();
  ContactForm.init();
  RippleEffect.init();
  BackToTop.init();
});

/* ============================================================
   LIGHTBOX
   ============================================================ */
const Lightbox = (() => {
  let lightbox, backdrop, mainImg, titleEl, categoryEl, counterEl, thumbsEl, prevBtn, nextBtn;
  let group = [];   // cards in current category
  let idx   = 0;   // active index within group

  /* ---------- helpers ---------- */
  function cardData(card) {
    return {
      src      : card.querySelector('.portfolio-img img')?.src || '',
      alt      : card.querySelector('.portfolio-img img')?.alt || '',
      title    : card.querySelector('.portfolio-title')?.textContent?.trim() || '',
      category : card.querySelector('.portfolio-category')?.textContent?.trim() || '',
    };
  }

  function buildThumbs() {
    thumbsEl.innerHTML = '';
    if (group.length <= 1) return;          // hide strip for single items
    group.forEach((card, i) => {
      const d   = cardData(card);
      const th  = document.createElement('button');
      th.className  = 'lightbox-thumb' + (i === idx ? ' active' : '');
      th.setAttribute('aria-label', d.title);
      th.innerHTML  = `<img src="${d.src}" alt="${d.alt}" loading="lazy" />`;
      th.addEventListener('click', () => goTo(i));
      thumbsEl.appendChild(th);
    });
  }

  function updateArrows() {
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === group.length - 1;
  }

  function renderSlide(animate = true) {
    const d = cardData(group[idx]);
    mainImg.src              = d.src;
    mainImg.alt              = d.alt;
    titleEl.textContent      = d.title;
    categoryEl.textContent   = d.category;
    counterEl.textContent    = group.length > 1 ? `${idx + 1} / ${group.length}` : '';

    // Highlight active thumb
    thumbsEl.querySelectorAll('.lightbox-thumb').forEach((th, i) => {
      th.classList.toggle('active', i === idx);
      if (i === idx) th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });

    updateArrows();

    if (animate) {
      mainImg.style.opacity   = '0';
      mainImg.style.transform = 'scale(0.97)';
      requestAnimationFrame(() => {
        mainImg.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
        mainImg.style.opacity    = '1';
        mainImg.style.transform  = 'scale(1)';
      });
    }
  }

  function goTo(i) {
    idx = Math.max(0, Math.min(i, group.length - 1));
    renderSlide();
  }

  /* ---------- open / close ---------- */
  function open(card) {
    const category = card.dataset.category;

    // Build group = all visible cards with same category (or all if no category match)
    const allCards = [...document.querySelectorAll('.portfolio-card')].filter(
      c => c.style.display !== 'none'
    );
    group = allCards.filter(c => c.dataset.category === category);
    if (!group.length) group = [card];
    idx = group.indexOf(card);
    if (idx < 0) idx = 0;

    buildThumbs();
    renderSlide(false);   // no fade on first open — container animation handles it

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';

    // Re-trigger container animation
    const container = lightbox.querySelector('.lightbox-container');
    container.style.animation = 'none';
    void container.offsetWidth;
    container.style.animation = '';
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    mainImg.src = '';
  }

  /* ---------- init ---------- */
  function init() {
    lightbox    = document.getElementById('lightbox');
    backdrop    = lightbox?.querySelector('.lightbox-backdrop');
    mainImg     = document.getElementById('lightbox-img');
    titleEl     = document.getElementById('lightbox-title');
    categoryEl  = document.getElementById('lightbox-category');
    counterEl   = document.getElementById('lightbox-counter');
    thumbsEl    = document.getElementById('lightbox-thumbs');
    prevBtn     = document.getElementById('lb-prev');
    nextBtn     = document.getElementById('lb-next');

    if (!lightbox) return;

    // Open on card image click
    document.querySelectorAll('.portfolio-card').forEach(card => {
      const imgWrap = card.querySelector('.portfolio-img');
      if (imgWrap) {
        imgWrap.style.cursor = 'pointer';
        imgWrap.addEventListener('click', () => open(card));
      }
    });

    // Arrow buttons
    prevBtn.addEventListener('click', () => goTo(idx - 1));
    nextBtn.addEventListener('click', () => goTo(idx + 1));

    // Close
    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    backdrop.addEventListener('click', close);

    // Keyboard
    document.addEventListener('keydown', e => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  goTo(idx - 1);
      if (e.key === 'ArrowRight') goTo(idx + 1);
    });
  }

  return { init };
})();
