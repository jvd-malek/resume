(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const g={en:{nav:{home:"Home",experience:"Experience",projects:"Projects",skills:"Skills",certs:"Certificates",contact:"Contact"},hero:{greeting:"Hello, I'm",name:"Javad Malekian",title:"Full-Stack Developer",subtitle:"I build modern, scalable web applications with high quality and cutting-edge technologies",cta:"View Projects",cta2:"Contact Me",cta3:"Download Resume (PDF)",military:"Military Service Completed",location:"Iran, Tehran"},about:{title:"About Me",desc:"I am a passionate full-stack developer with over 3 years of experience building scalable web applications. I specialize in modern JavaScript ecosystems — from React and Next.js on the frontend to Node.js, GraphQL, Fastify, and REST APIs on the backend. I love crafting clean, performant, and user-friendly digital experiences."},stats:{years:"Years Experience",projects:"Projects Done",certs:"Certificates",clients:"Happy Clients"},experience:{title:"Work Experience",neynegar:{role:"Full-Stack Developer",date:"2023 — 2026",desc:"Designed and developed a complete online marketplace for Persian calligraphy and visual arts. Built the GraphQL backend with Apollo Server, MongoDB, and the Next.js frontend. Implemented SMS authentication, Zarinpal payment, course management, and a comprehensive admin panel."},aqua:{role:"Full-Stack Developer",date:"2026 — Present",desc:"Architected and built a modern pet shop and aquarium e-commerce platform. Developed the backend with Fastify + TypeScript + PostgreSQL using Drizzle ORM, and the frontend with Next.js 16. Features include real-time cart, Bale bot, analytics dashboard, and guest cart merging."}},projects:{title:"Other Projects",bahman:{name:"Bahman Sabz",desc:"A practical front-end interview task for Bahman Sabz. Features server-side product filtering with pagination, SEO metadata, cookie-based authentication, and custom dropdown components.",tech:"Next.js 16, React 19, TypeScript, Tailwind CSS 4",repo:"https://github.com/jvd-malek/frontend-test-bahmansabz",live:"https://frontend-test-bahmansabz.vercel.app"},bale:{name:"Bale Shopping Bot",desc:"A comprehensive Telegram-like shopping bot built for both NeyNegar and Aqua Blue platforms. Users can browse products, track orders, receive discount notifications, search products, and get support. Admins receive real-time alerts for new orders, comments, tickets, and more.",tech:"Node.js, Axios, Long Polling, REST API",repo:null,live:null}},skills:{title:"Tech Stack",subtitle:"Technologies I work with",frontend:"Frontend",backend:"Backend",database:"Database & Tools"},certs:{title:"Certificates",seoTitle:"Practical SEO",seoDesc:"Search Engine Optimization — Maktabkhooneh",cleanTitle:"Clean Code",cleanDesc:"Writing maintainable and scalable code — Maktabkhooneh",verify:"Verify"},testimonials:{title:"Testimonials",neynegar:"Working with Javad was a great experience. He built our entire platform from scratch — from the GraphQL backend to the modern Next.js frontend. His attention to detail and understanding of Persian calligraphy market needs made all the difference.",aqua:"Javad developed our pet shop e-commerce platform with exceptional quality. The Bale bot integration was a game-changer for our customer engagement. His expertise in both frontend and backend made the development process smooth and efficient."},contact:{title:"Get In Touch",subtitle:"Let's build something amazing together",email:"jvd.malek0079@gmail.com",collaborate:"Collaborate",collaborateDesc:"Have a project in mind? Let's discuss how I can help bring your ideas to life.",sendMsg:"Send Message",namePlaceholder:"Your Name",msgPlaceholder:"Tell me about your project..."},footer:{rights:"All rights reserved",made:"Made with"},lang:"فارسی"},fa:{nav:{home:"خانه",experience:"سابقه کار",projects:"سایر پروژه‌ها",skills:"مهارت‌ها",certs:"مدارک",contact:"تماس"},hero:{greeting:"سلام، من",name:"جواد ملکیان",title:"توسعه‌دهنده فول‌استک",subtitle:"اپلیکیشن‌های مدرن و مقیاس‌پذیر وب را با کیفیت بالا می‌سازم",cta:"مشاهده پروژه‌ها",cta2:"تماس با من",cta3:"دانلود رزومه (PDF)",military:"✅ پایان خدمت سربازی",location:"ایران، تهران"},about:{title:"درباره من",desc:"توسعه‌دهنده فول‌استک با بیش از ۳ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر. متخصص در اکوسیستم مدرن جاوااسکریپت — از React و Next.js در فرانت‌اند تا Node.js، GraphQL، Fastify و REST API در بک‌اند. عاشق خلق تجربه‌های دیجیتال سریع، کاربرپسند و باکیفیت."},stats:{years:"سال تجربه",projects:"پروژه انجام شده",certs:"گواهینامه",clients:"کارفرمای راضی"},experience:{title:"سابقه کار",neynegar:{role:"توسعه‌دهنده فول‌استک",date:"۱۴۰۲ — ۱۴۰۴",desc:"طراحی و توسعه کامل یک فروشگاه اینترنتی برای هنر خوشنویسی و هنرهای تجسمی ایرانی. بک‌اند GraphQL با Apollo Server و MongoDB، فرانت‌اند Next.js. پیاده‌سازی احراز هویت با پیامک، درگاه زرین‌پال، مدیریت دوره‌ها و پنل ادمین جامع."},aqua:{role:"توسعه‌دهنده فول‌استک",date:"۱۴۰۵ — اکنون",desc:"معماری و ساخت یک فروشگاه اینترنتی مدرن برای حیوانات خانگی و آکواریوم. بک‌اند با Fastify + TypeScript + PostgreSQL و Drizzle ORM، فرانت‌اند با Next.js 16. شامل سبد خرید لحظه‌ای، ربات بله، داشبورد تحلیلی و ادغام سبد مهمان."}},projects:{title:"سایر پروژه‌ها",bahman:{name:"بهمن سبز",desc:"تسک عملی مصاحبه ورودی بهمن سبز. شامل فیلتر محصولات سمت سرور با صفحه‌بندی، متادیتای سئو، احراز هویت با کوکی و کامپوننت‌های dropdown سفارشی.",tech:"Next.js 16, React 19, TypeScript, Tailwind CSS 4",repo:"https://github.com/jvd-malek/frontend-test-bahmansabz",live:"https://frontend-test-bahmansabz.vercel.app"},bale:{name:"ربات خرید بله",desc:"ربات خرید تلگرامی (مشابه بله) ساخته شده برای پلتفرم‌های نی نگار و آکوا بلو. کاربران می‌توانند محصولات را مرور کنند، سفارشات را پیگیری کنند، تخفیف‌ها را دریافت کنند و پشتیبانی بگیرند. ادمین‌ها برای سفارشات جدید، کامنت‌ها و تیکت‌ها نوتیفیکیشن لحظه‌ای دریافت می‌کنند.",tech:"Node.js, Axios, Long Polling, REST API",repo:null,live:null}},skills:{title:"تکنولوژی‌ها",subtitle:"فناوری‌هایی که باهاشون کار می‌کنم",frontend:"فرانت‌اند",backend:"بک‌اند",database:"دیتابیس و ابزارها"},certs:{title:"گواهینامه‌ها",seoTitle:"سئوی کاربردی",seoDesc:"بهینه‌سازی موتور جستجو — مکتب‌خونه",cleanTitle:"Clean Code",cleanDesc:"نوشتن کد قابل نگهداری و مقیاس‌پذیر — مکتب‌خونه",verify:"اعتبارسنجی"},testimonials:{title:"نظرات کارفرمایان",neynegar:"همکاری با جواد تجربه عالی‌ای بود. او کل پلتفرم ما را از صفر تا صد ساخت — از بک‌اند GraphQL تا فرانت‌اند مدرن Next.js. دقتش به جزئیات و درک نیازهای بازار خوشنویسی ایرانی واقعاً بی‌نظیر بود.",aqua:"جواد پلتفرم فروشگاهی حیوانات خانگی ما را با کیفیت فوق‌العاده‌ای توسعه داد. اتصال ربات بله تحول بزرگی در ارتباط با مشتریان ایجاد کرد. تخصصش در فرانت‌اند و بک‌اند باعث شد پروژه روان و بدون دردسر پیش بره."},contact:{title:"ارتباط با من",subtitle:"بیا باهم کسب و کارت رو توسعه بدیم",email:"jvd.malek0079@gmail.com",collaborate:"همکاری",collaborateDesc:"پروژه‌ای تو ذهنت داری؟ بیا درموردش صحبت کنیم تا بتونم ایده‌هات رو به واقعیت تبدیل کنم.",sendMsg:"ارسال پیام",namePlaceholder:"اسم شما",msgPlaceholder:"درباره پروژه‌ات بگو..."},footer:{rights:"تمامی حقوق محفوظ است.",made:"ساخته شده با"},lang:"English"}};let l=localStorage.getItem("lang")||"en";function o(){return l}function m(e){l=e,localStorage.setItem("lang",e),document.documentElement.lang=e==="fa"?"fa":"en",document.documentElement.dir=e==="fa"?"rtl":"ltr"}function t(e){const a=e.split(".");let r=g[l];for(const i of a)r=r==null?void 0:r[i];return r||e}function x(){document.querySelectorAll("[data-i18n]").forEach(r=>{const i=r.dataset.i18n,n=t(i);n&&(r.textContent=n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(r=>{const i=r.dataset.i18nPlaceholder,n=t(i);n&&(r.placeholder=n)});const e=document.getElementById("lang-toggle");if(e){const r=e.querySelector("span");r&&(r.textContent=t("lang"))}document.querySelectorAll("#resume-btn, .resume-btn").forEach(r=>{r.href=l==="fa"?"/resume-fa.html":"/resume-en.html"})}function h(){m(l)}const v=document.getElementById("app"),d=[{id:"home",ref:"nav.home"},{id:"experience",ref:"nav.experience"},{id:"projects",ref:"nav.projects"},{id:"skills",ref:"nav.skills"},{id:"certs",ref:"nav.certs"},{id:"contact",ref:"nav.contact"}];function u(){return`
    <nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16">
          <a href="#home" class="text-xl font-bold gradient-text">JM</a>
          <div class="hidden md:flex items-center gap-1">
            ${d.map(e=>`
              <a href="#${e.id}" data-i18n="${e.ref}" class="px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-200">${t(e.ref)}</a>
            `).join("")}
          </div>
          <div class="flex items-center gap-2">
            <button id="lang-toggle" onclick="window.__toggleLang()" class="px-3 py-1.5 text-sm font-medium rounded-lg border border-white/10 text-gray-400 hover:bg-gray-800 transition-all duration-200">
              <span>${t("lang")}</span>
            </button>
            <button id="mobile-menu-btn" onclick="window.__toggleMobileMenu()" class="md:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-800">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden border-t border-white/5 glass">
        <div class="px-4 py-3 space-y-1">
          ${d.map(e=>`
            <a href="#${e.id}" onclick="window.__closeMobileMenu()" data-i18n="${e.ref}" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">${t(e.ref)}</a>
          `).join("")}
        </div>
      </div>
    </nav>
  `}function f(){return`
    <section id="home" class="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16">
      <div class="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full blur-3xl animate-float"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style="animation-delay: -3s"></div>
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div class="flex-shrink-0 animate-scale-in">
            <div class="relative">
              <div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                <img src="/profile-picture-2.png" alt="Javad Malekian" class="w-full h-full object-cover" />
              </div>
              <div class="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg animate-float">
                <span class="text-2xl">💻</span>
              </div>
            </div>
          </div>
          <div class="text-center lg:text-left max-w-2xl">
            <p data-i18n="hero.greeting" class="text-lg sm:text-xl text-gray-400 mb-2 animate-fade-in-up">${t("hero.greeting")}</p>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style="animation-delay: 0.1s">
              <span class="shimmer-text">${t("hero.name")}</span>
            </h1>
            <h2 data-i18n="hero.title" class="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in-up" style="animation-delay: 0.2s">${t("hero.title")}</h2>
            <p data-i18n="hero.subtitle" class="text-base sm:text-lg text-gray-400 mb-4 animate-fade-in-up" style="animation-delay: 0.3s">${t("hero.subtitle")}</p>
            <div class="flex flex-wrap items-center gap-3 justify-center lg:justify-start text-sm text-gray-500 mb-6 animate-fade-in-up" style="animation-delay: 0.35s">
              <span class="flex items-center gap-1">📍 <span data-i18n="hero.location">${t("hero.location")}</span></span>
              <span class="text-gray-700 hidden sm:inline">|</span>
              <span data-i18n="hero.military" class="flex items-center gap-1">${t("hero.military")}</span>
            </div>
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.4s">
              <a href="#experience" class="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                ${t("hero.cta")}
              </a>
              <a href="#contact" class="px-8 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-xl hover:border-primary hover:text-primary transition-all duration-300">
                ${t("hero.cta2")}
              </a>
              <a href="${o()==="fa"?"/resume-fa.html":"/resume-en.html"}" target="_blank" class="resume-btn px-8 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2">
                <span>📄</span>
                <span>${t("hero.cta3")}</span>
              </a>
            </div>
            <div class="flex items-center gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.5s">
              <a href="https://linkedin.com/in/javad-malekian" target="_blank" rel="noopener" class="p-2.5 rounded-xl bg-gray-800 text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-200" aria-label="LinkedIn">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/jvd-malek" target="_blank" rel="noopener" class="p-2.5 rounded-xl bg-gray-800 text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-200" aria-label="GitHub">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://t.me/jvdmalek" target="_blank" rel="noopener" class="p-2.5 rounded-xl bg-gray-800 text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-200" aria-label="Telegram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://eitaa.com/jvdmalek" target="_blank" rel="noopener" class="p-2.5 rounded-xl bg-gray-800 text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-200" aria-label="Eitaa">
                <img src="/logo-Eitaa.webp" alt="Eitaa" class="w-5 h-5 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-fade absolute bottom-0 left-0 right-0 h-48 pointer-events-none"></div>
    </section>
  `}function b(){return`
    <section class="py-20 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="glass rounded-3xl p-8 md:p-12 section-hidden" data-animate>
          <h2 data-i18n="about.title" class="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">${t("about.title")}</h2>
          <p data-i18n="about.desc" class="text-lg text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">${t("about.desc")}</p>
        </div>
      </div>
    </section>
  `}function y(){return`
    <section class="py-16 relative -mt-8">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 section-hidden" data-animate>
          ${[{label:"stats.years",value:"3+",icon:"⏳"},{label:"stats.projects",value:"5+",icon:"🚀"},{label:"stats.certs",value:"2",icon:"🎓"},{label:"stats.clients",value:"2",icon:"🤝"}].map(e=>`
            <div class="glass rounded-2xl p-6 text-center card-hover">
              <span class="text-3xl block mb-2">${e.icon}</span>
              <span class="text-3xl font-bold gradient-text block">${e.value}</span>
              <span data-i18n="${e.label}" class="text-sm text-gray-500 mt-1 block">${t(e.label)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function w(){return`
    <section id="experience" class="py-20 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 section-hidden" data-animate>
          <h2 data-i18n="experience.title" class="text-3xl md:text-4xl font-bold gradient-text mb-4">${t("experience.title")}</h2>
        </div>
        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block"></div>
          <div class="space-y-12">
            ${["neynegar","aqua"].map((e,a)=>`
              <div class="relative pl-0 md:pl-20 section-hidden" data-animate style="animation-delay: ${a*.15}s">
                <div class="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
                <div class="glass rounded-2xl p-8">
                  <div class="flex flex-wrap items-center gap-3 mb-1">
                    <span class="text-sm font-bold text-primary">${t(`experience.${e}.role`)}</span>
                    <span class="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary/80">${t(`experience.${e}.date`)}</span>
                  </div>
                  <div class="flex items-center gap-3 mb-4">
                    <img src="${e==="neynegar"?"/neynegar-Logo.webp":"/aqua-blue-Logo.webp"}" class="w-8 h-8 rounded-lg object-contain bg-gray-800 p-1" />
                    <span class="font-semibold">${e==="neynegar"?"NeyNegar":"Aqua Blue"}</span>
                  </div>
                  <p class="text-gray-400 text-sm leading-relaxed">${t(`experience.${e}.desc`)}</p>
                  <div class="flex flex-wrap gap-3 mt-4">
                    <a href="${e==="neynegar"?"https://github.com/jvd-malek/neynegar-next-version":"https://github.com/jvd-malek/aqua-blue-frontend"}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      Frontend
                    </a>
                    <a href="${e==="neynegar"?"https://github.com/jvd-malek/neynegar-graphql-version":"https://github.com/jvd-malek/aqua-blue-backend"}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      Backend
                    </a>
                    <a href="${e==="neynegar"?"https://neynegar1.ir":"https://aquablueiran.com"}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors">
                      🌐 Live
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function k(){const e=[{key:"bahman",logo:"/Logo-bahmansabz.webp",hasRepo:!0,hasLive:!0,gradient:"from-green-500/20 to-emerald-500/10"},{key:"bale",logo:null,icon:"🤖",hasRepo:!1,hasLive:!1,gradient:"from-purple-500/20 to-pink-500/10"}];return`
    <section id="projects" class="py-20 relative">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 section-hidden" data-animate>
          <h2 data-i18n="projects.title" class="text-3xl md:text-4xl font-bold gradient-text mb-4">${t("projects.title")}</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          ${e.map((a,r)=>`
            <div class="glass rounded-2xl p-8 section-hidden" data-animate style="animation-delay: ${r*.15}s">
              <div class="flex items-center gap-4 mb-5">
                ${a.logo?`
                  <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center">
                    <img src="${a.logo}" alt="${t(`projects.${a.key}.name`)}" class="h-10 object-contain" />
                  </div>
                `:`
                  <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center text-3xl">
                    ${a.icon}
                  </div>
                `}
                <div>
                  <h3 class="text-lg font-bold">${t(`projects.${a.key}.name`)}</h3>
                </div>
              </div>
              <p class="text-sm text-gray-400 mb-4 leading-relaxed">${t(`projects.${a.key}.desc`)}</p>
              <div class="flex flex-wrap gap-1.5 mb-5">
                ${t(`projects.${a.key}.tech`).split(", ").map(i=>`
                  <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">${i}</span>
                `).join("")}
              </div>
              <div class="flex gap-4">
                ${a.hasRepo?`
                  <a href="${t(`projects.${a.key}.repo`)}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-primary transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                `:""}
                ${a.hasLive?`
                  <a href="${t(`projects.${a.key}.live`)}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-primary transition-colors">
                    🌐 Live
                  </a>
                `:""}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function $(){const e=["React","Next.js","TypeScript","Tailwind CSS","JavaScript","HTML/CSS","Zustand","SWR","Apollo Client","Material UI"],a=["Node.js","Express.js","Fastify","GraphQL","REST API","Apollo Server","JWT","MongoDB","Mongoose","PostgreSQL","Drizzle ORM","Zod"],r=["Git","Docker","Vercel","SMS API","Zarinpal","Web Push","Bale Bot","SEO","Clean Code","Responsive Design","RTL/LTR"];return`
    <section id="skills" class="py-20 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 section-hidden" data-animate>
          <h2 data-i18n="skills.title" class="text-3xl md:text-4xl font-bold gradient-text mb-2">${t("skills.title")}</h2>
          <p data-i18n="skills.subtitle" class="text-gray-400">${t("skills.subtitle")}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${[{label:"skills.frontend",items:e},{label:"skills.backend",items:a},{label:"skills.database",items:r}].map((i,n)=>`
            <div class="glass rounded-2xl p-6 section-hidden" data-animate style="animation-delay: ${n*.1}s">
              <h3 data-i18n="${i.label}" class="text-lg font-bold mb-4 text-primary">${t(i.label)}</h3>
              <div class="flex flex-wrap gap-2">
                ${i.items.map(s=>`
                  <span class="skill-tag px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-800 text-gray-300 cursor-default hover:bg-primary/20 hover:text-primary">${s}</span>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function j(){return`
    <section id="certs" class="py-20 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 section-hidden" data-animate>
          <h2 data-i18n="certs.title" class="text-3xl md:text-4xl font-bold gradient-text mb-2">${t("certs.title")}</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          ${[{key:"seo",link:"https://www.maktabkhooneh.org/certificates/MK-PUNMCX/",faImg:"/Javad-malekian-seo-certificate-Fa.png",enImg:"/Javad-Malekian-seo-certificate-Eng.png"},{key:"clean",link:"https://www.maktabkhooneh.org/certificates/MK-LJ4YSK/",faImg:"/Javad-Malekian-clean-code-certificate-Fa.png",enImg:"/Javad-Malekian-clean-code-certificate-Eng.png"}].map((e,a)=>`
            <div class="glass rounded-2xl p-6 section-hidden" data-animate style="animation-delay: ${a*.15}s">
              <div class="rounded-xl overflow-hidden mb-4 bg-gray-900">
                <img src="${o()==="fa"?e.faImg:e.enImg}" alt="${t(`certs.${e.key}Title`)}" class="w-full h-48 object-contain p-2 hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 class="text-lg font-bold mb-1">${t(`certs.${e.key}Title`)}</h3>
              <p class="text-sm text-gray-400 mb-4">${t(`certs.${e.key}Desc`)}</p>
              <a href="${e.link}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                <span>${t("certs.verify")}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function M(){return`
    <section class="py-20 relative">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 section-hidden" data-animate>
          <h2 data-i18n="testimonials.title" class="text-3xl md:text-4xl font-bold gradient-text mb-4">${t("testimonials.title")}</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          ${["neynegar","aqua"].map((e,a)=>`
            <div class="glass rounded-2xl p-8 section-hidden" data-animate style="animation-delay: ${a*.15}s">
              <div class="flex items-center gap-3 mb-4">
                <img src="${e==="neynegar"?"/neynegar-Logo.webp":"/aqua-blue-Logo.webp"}" class="w-10 h-10 rounded-lg object-contain bg-gray-800 p-1.5" />
                <div>
                  <p class="font-semibold">${e==="neynegar"?"NeyNegar":"Aqua Blue"}</p>
                  <p class="text-xs text-gray-500">${t(`experience.${e}.role`)}</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed italic">"${t(`testimonials.${e}`)}"</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function S(){return`
    <section id="contact" class="py-20 relative">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 section-hidden" data-animate>
          <h2 data-i18n="contact.title" class="text-3xl md:text-4xl font-bold gradient-text mb-2">${t("contact.title")}</h2>
          <p data-i18n="contact.subtitle" class="text-gray-400">${t("contact.subtitle")}</p>
        </div>
        <div class="grid md:grid-cols-5 gap-8">
          <div class="md:col-span-3 section-hidden" data-animate>
            <div class="glass rounded-3xl p-8">
              <h3 class="text-xl font-bold mb-2">${t("contact.collaborate")}</h3>
              <p data-i18n="contact.collaborateDesc" class="text-sm text-gray-400 mb-6">${t("contact.collaborateDesc")}</p>
              <div class="space-y-4">
                <input type="text" placeholder="${t("contact.namePlaceholder")}" data-i18n-placeholder="contact.namePlaceholder" class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors text-sm" />
                <input type="email" placeholder="Email" class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors text-sm" />
                <textarea rows="4" placeholder="${t("contact.msgPlaceholder")}" data-i18n-placeholder="contact.msgPlaceholder" class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"></textarea>
                <a href="mailto:jvd.malek0079@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all text-sm">
                  <span>✉️</span>
                  <span>${t("contact.sendMsg")}</span>
                </a>
              </div>
            </div>
          </div>
          <div class="md:col-span-2 space-y-6 section-hidden" data-animate>
            <div class="glass rounded-2xl p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg flex-shrink-0">📧</div>
                <div>
                  <p class="text-xs text-gray-500">Email</p>
                  <a href="mailto:jvd.malek0079@gmail.com" class="text-sm font-medium hover:text-primary transition-colors">jvd.malek0079@gmail.com</a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg flex-shrink-0">📍</div>
                <div>
                  <p class="text-xs text-gray-500">Location</p>
                  <p class="text-sm font-medium" data-i18n="hero.location">${t("hero.location")}</p>
                </div>
              </div>
            </div>
            <div class="glass rounded-2xl p-6">
              <p class="text-xs text-gray-500 mb-4 uppercase tracking-wider">Follow Me</p>
              <div class="flex flex-wrap gap-2">
                <a href="https://linkedin.com/in/javad-malekian" target="_blank" rel="noopener" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gray-800 text-gray-300 hover:bg-primary/20 hover:text-primary transition-all text-xs font-medium">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/jvd-malek" target="_blank" rel="noopener" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gray-800 text-gray-300 hover:bg-primary/20 hover:text-primary transition-all text-xs font-medium">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://t.me/jvdmalek" target="_blank" rel="noopener" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gray-800 text-gray-300 hover:bg-primary/20 hover:text-primary transition-all text-xs font-medium">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Telegram
                </a>
                <a href="https://eitaa.com/jvdmalek" target="_blank" rel="noopener" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gray-800 text-gray-300 hover:bg-primary/20 hover:text-primary transition-all text-xs font-medium">
                  <img src="/logo-Eitaa.webp" alt="Eitaa" class="w-4 h-4 brightness-0 invert opacity-60" />
                  Eitaa
                </a>
              </div>
              <a href="${o()==="fa"?"/resume-fa.html":"/resume-en.html"}" target="_blank" class="resume-btn flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30 transition-all text-xs font-medium mt-3">
                <span>📄</span>
                <span>${t("hero.cta3")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function C(){return`
    <footer class="border-t border-white/5 glass py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-sm text-gray-500">
          © ${new Date().getFullYear()} Javad Malekian — <span data-i18n="footer.rights">${t("footer.rights")}</span>. <span data-i18n="footer.made">${t("footer.made")}</span> ❤️
        </p>
      </div>
    </footer>
  `}function p(){v.innerHTML=`
    ${u()}
    <main class="page-gradient">
      ${f()}
      ${y()}
      ${b()}
      ${w()}
      ${k()}
      ${$()}
      ${j()}
      ${M()}
      ${S()}
    </main>
    ${C()}
  `,document.querySelectorAll("[data-animate]").forEach(e=>{const a=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&(i.target.classList.add("section-visible"),a.unobserve(i.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});a.observe(e)}),x()}window.__toggleLang=()=>{const e=o()==="en"?"fa":"en";m(e),p()};window.__toggleMobileMenu=()=>{var e;(e=document.getElementById("mobile-menu"))==null||e.classList.toggle("hidden")};window.__closeMobileMenu=()=>{var e;(e=document.getElementById("mobile-menu"))==null||e.classList.add("hidden")};p();h();
