const translations = {
  en: {
    nav: { home: 'Home', experience: 'Experience', projects: 'Projects', skills: 'Skills', certs: 'Certificates', contact: 'Contact' },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Javad Malekian',
      title: 'Full-Stack Developer',
      subtitle: 'I build modern, scalable web applications with high quality and cutting-edge technologies',
      cta: 'View Projects',
      cta2: 'Contact Me',
      cta3: 'Download Resume (PDF)',
      military: 'Military Service Completed',
      location: 'Iran, Tehran',
    },
    about: {
      title: 'About Me',
      desc: 'I am a passionate full-stack developer with over 3 years of experience building scalable web applications. I specialize in modern JavaScript ecosystems — from React and Next.js on the frontend to Node.js, GraphQL, Fastify, and REST APIs on the backend. I love crafting clean, performant, and user-friendly digital experiences.',
    },
    stats: {
      years: 'Years Experience',
      projects: 'Projects Done',
      certs: 'Certificates',
      clients: 'Happy Clients',
    },
    experience: {
      title: 'Work Experience',
      neynegar: {
        role: 'Full-Stack Developer',
        date: '2023 — 2026',
        desc: 'Designed and developed a complete online marketplace for Persian calligraphy and visual arts. Built the GraphQL backend with Apollo Server, MongoDB, and the Next.js frontend. Implemented SMS authentication, Zarinpal payment, course management, and a comprehensive admin panel.',
      },
      aqua: {
        role: 'Full-Stack Developer',
        date: '2026 — Present',
        desc: 'Architected and built a modern pet shop and aquarium e-commerce platform. Developed the backend with Fastify + TypeScript + PostgreSQL using Drizzle ORM, and the frontend with Next.js 16. Features include real-time cart, Bale bot, analytics dashboard, and guest cart merging.',
      },
    },
    projects: {
      title: 'Other Projects',
      bahman: {
        name: 'Bahman Sabz',
        desc: 'A practical front-end interview task for Bahman Sabz. Features server-side product filtering with pagination, SEO metadata, cookie-based authentication, and custom dropdown components.',
        tech: 'Next.js 16, React 19, TypeScript, Tailwind CSS 4',
        repo: 'https://github.com/jvd-malek/frontend-test-bahmansabz',
        live: 'https://frontend-test-bahmansabz.vercel.app',
      },
      bale: {
        name: 'Bale Shopping Bot',
        desc: 'A comprehensive Telegram-like shopping bot built for both NeyNegar and Aqua Blue platforms. Users can browse products, track orders, receive discount notifications, search products, and get support. Admins receive real-time alerts for new orders, comments, tickets, and more.',
        tech: 'Node.js, Axios, Long Polling, REST API',
        repo: null,
        live: null,
      },
    },
    skills: {
      title: 'Tech Stack',
      subtitle: 'Technologies I work with',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database & Tools',
    },
    certs: {
      title: 'Certificates',
      seoTitle: 'Practical SEO',
      seoDesc: 'Search Engine Optimization — Maktabkhooneh',
      cleanTitle: 'Clean Code',
      cleanDesc: 'Writing maintainable and scalable code — Maktabkhooneh',
      verify: 'Verify',
    },
    testimonials: {
      title: 'Testimonials',
      neynegar: 'Working with Javad was a great experience. He built our entire platform from scratch — from the GraphQL backend to the modern Next.js frontend. His attention to detail and understanding of Persian calligraphy market needs made all the difference.',
      aqua: 'Javad developed our pet shop e-commerce platform with exceptional quality. The Bale bot integration was a game-changer for our customer engagement. His expertise in both frontend and backend made the development process smooth and efficient.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s build something amazing together',
      email: 'jvd.malek0079@gmail.com',
      collaborate: 'Collaborate',
      collaborateDesc: 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
      sendMsg: 'Send Message',
      namePlaceholder: 'Your Name',
      msgPlaceholder: 'Tell me about your project...',
    },
    footer: {
      rights: 'All rights reserved',
      made: 'Made with',
    },
    lang: 'فارسی',
  },

  fa: {
    nav: { home: 'خانه', experience: 'سابقه کار', projects: 'سایر پروژه‌ها', skills: 'مهارت‌ها', certs: 'مدارک', contact: 'تماس' },
    hero: {
      greeting: 'سلام، من',
      name: 'جواد ملکیان',
      title: 'توسعه‌دهنده فول‌استک',
      subtitle: 'اپلیکیشن‌های مدرن و مقیاس‌پذیر وب را با کیفیت بالا می‌سازم',
      cta: 'مشاهده پروژه‌ها',
      cta2: 'تماس با من',
      cta3: 'دانلود رزومه (PDF)',
      military: '✅ پایان خدمت سربازی',
      location: 'ایران، تهران',
    },
    about: {
      title: 'درباره من',
      desc: 'توسعه‌دهنده فول‌استک با بیش از ۳ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر. متخصص در اکوسیستم مدرن جاوااسکریپت — از React و Next.js در فرانت‌اند تا Node.js، GraphQL، Fastify و REST API در بک‌اند. عاشق خلق تجربه‌های دیجیتال سریع، کاربرپسند و باکیفیت.',
    },
    stats: {
      years: 'سال تجربه',
      projects: 'پروژه انجام شده',
      certs: 'گواهینامه',
      clients: 'کارفرمای راضی',
    },
    experience: {
      title: 'سابقه کار',
      neynegar: {
        role: 'توسعه‌دهنده فول‌استک',
        date: '۱۴۰۲ — ۱۴۰۴',
        desc: 'طراحی و توسعه کامل یک فروشگاه اینترنتی برای هنر خوشنویسی و هنرهای تجسمی ایرانی. بک‌اند GraphQL با Apollo Server و MongoDB، فرانت‌اند Next.js. پیاده‌سازی احراز هویت با پیامک، درگاه زرین‌پال، مدیریت دوره‌ها و پنل ادمین جامع.',
      },
      aqua: {
        role: 'توسعه‌دهنده فول‌استک',
        date: '۱۴۰۵ — اکنون',
        desc: 'معماری و ساخت یک فروشگاه اینترنتی مدرن برای حیوانات خانگی و آکواریوم. بک‌اند با Fastify + TypeScript + PostgreSQL و Drizzle ORM، فرانت‌اند با Next.js 16. شامل سبد خرید لحظه‌ای، ربات بله، داشبورد تحلیلی و ادغام سبد مهمان.',
      },
    },
    projects: {
      title: 'سایر پروژه‌ها',
      bahman: {
        name: 'بهمن سبز',
        desc: 'تسک عملی مصاحبه ورودی بهمن سبز. شامل فیلتر محصولات سمت سرور با صفحه‌بندی، متادیتای سئو، احراز هویت با کوکی و کامپوننت‌های dropdown سفارشی.',
        tech: 'Next.js 16, React 19, TypeScript, Tailwind CSS 4',
        repo: 'https://github.com/jvd-malek/frontend-test-bahmansabz',
        live: 'https://frontend-test-bahmansabz.vercel.app',
      },
      bale: {
        name: 'ربات خرید بله',
        desc: 'ربات خرید تلگرامی (مشابه بله) ساخته شده برای پلتفرم‌های نی نگار و آکوا بلو. کاربران می‌توانند محصولات را مرور کنند، سفارشات را پیگیری کنند، تخفیف‌ها را دریافت کنند و پشتیبانی بگیرند. ادمین‌ها برای سفارشات جدید، کامنت‌ها و تیکت‌ها نوتیفیکیشن لحظه‌ای دریافت می‌کنند.',
        tech: 'Node.js, Axios, Long Polling, REST API',
        repo: null,
        live: null,
      },
    },
    skills: {
      title: 'تکنولوژی‌ها',
      subtitle: 'فناوری‌هایی که باهاشون کار می‌کنم',
      frontend: 'فرانت‌اند',
      backend: 'بک‌اند',
      database: 'دیتابیس و ابزارها',
    },
    certs: {
      title: 'گواهینامه‌ها',
      seoTitle: 'سئوی کاربردی',
      seoDesc: 'بهینه‌سازی موتور جستجو — مکتب‌خونه',
      cleanTitle: 'Clean Code',
      cleanDesc: 'نوشتن کد قابل نگهداری و مقیاس‌پذیر — مکتب‌خونه',
      verify: 'اعتبارسنجی',
    },
    testimonials: {
      title: 'نظرات کارفرمایان',
      neynegar: 'همکاری با جواد تجربه عالی‌ای بود. او کل پلتفرم ما را از صفر تا صد ساخت — از بک‌اند GraphQL تا فرانت‌اند مدرن Next.js. دقتش به جزئیات و درک نیازهای بازار خوشنویسی ایرانی واقعاً بی‌نظیر بود.',
      aqua: 'جواد پلتفرم فروشگاهی حیوانات خانگی ما را با کیفیت فوق‌العاده‌ای توسعه داد. اتصال ربات بله تحول بزرگی در ارتباط با مشتریان ایجاد کرد. تخصصش در فرانت‌اند و بک‌اند باعث شد پروژه روان و بدون دردسر پیش بره.',
    },
    contact: {
      title: 'ارتباط با من',
      subtitle: 'بیا باهم کسب و کارت رو توسعه بدیم',
      email: 'jvd.malek0079@gmail.com',
      collaborate: 'همکاری',
      collaborateDesc: 'پروژه‌ای تو ذهنت داری؟ بیا درموردش صحبت کنیم تا بتونم ایده‌هات رو به واقعیت تبدیل کنم.',
      sendMsg: 'ارسال پیام',
      namePlaceholder: 'اسم شما',
      msgPlaceholder: 'درباره پروژه‌ات بگو...',
    },
    footer: {
      rights: 'تمامی حقوق محفوظ است.',
      made: 'ساخته شده با',
    },
    lang: 'English',
  },
}

let currentLang = localStorage.getItem('lang') || 'en'

export function getLang() {
  return currentLang
}

export function setLang(lang) {
  currentLang = lang
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang === 'fa' ? 'fa' : 'en'
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
}

export function t(key) {
  const keys = key.split('.')
  let value = translations[currentLang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}

export function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    const translation = t(key)
    if (translation) {
      el.textContent = translation
    }
  })
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder
    const translation = t(key)
    if (translation) {
      el.placeholder = translation
    }
  })
  const langBtn = document.getElementById('lang-toggle')
  if (langBtn) {
    const span = langBtn.querySelector('span')
    if (span) span.textContent = t('lang')
  }

  // update resume button href
  const resumeBtns = document.querySelectorAll('#resume-btn, .resume-btn')
  resumeBtns.forEach(btn => {
    btn.href = currentLang === 'fa' ? '/javad-malekian-resume-fa.pdf' : '/javad-malekian-resume.pdf'
  })
}

export function initI18n() {
  setLang(currentLang)
}
