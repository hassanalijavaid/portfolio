document.addEventListener('DOMContentLoaded', () => {
  // --- NAVBAR SCROLL EFFECT ---

    // Magnetic buttons
    const magneticBtns = document.querySelectorAll('.btn, .nav-links a, .theme-toggle');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

  // --- NAVBAR SCROLL EFFECT ---
  const navbar = document.getElementById('navbar');
  const body = document.body;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- MOBILE MENU ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-links li a');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
      gsap.from('.nav-links li', {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  });

  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // --- THEME TOGGLE ---
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // --- DYNAMIC RENDERING ---
  if (typeof portfolioData !== 'undefined') {
    renderContent();
  }

  function renderContent() {
    const resumeLink = portfolioData.personal.resumeLink || "#";

    // Personal Info
    document.getElementById('nav-logo').innerHTML = `${portfolioData.personal.logoText}<span>.</span>`;
    document.getElementById('hero-name').innerHTML = `${portfolioData.personal.firstName} <span class="gradient-text">${portfolioData.personal.lastName}</span>`;
    document.getElementById('hero-title').innerHTML = portfolioData.personal.jobTitle.replace('AI Engineer', '<span class="gradient-text">AI Engineer</span>');
    document.getElementById('hero-bio').innerHTML = portfolioData.personal.bio;
    
    // Hero Tags
    const heroTags = document.querySelector('.hero-tags');
    if (heroTags) {
      const tags = [...portfolioData.skills.programming.slice(0, 1), ...portfolioData.skills.libraries.slice(0, 1), ...portfolioData.skills.tools.slice(0, 2)];
      heroTags.innerHTML = tags.map(t => `<span class="tag">${typeof t === 'string' ? t : t.name}</span>`).join('');
    }
    
    document.getElementById('contact-email').href = `mailto:${portfolioData.personal.email}`;
    document.getElementById('contact-email-text').textContent = portfolioData.personal.email;
    
    document.getElementById('contact-linkedin').href = portfolioData.personal.linkedIn;
    document.getElementById('contact-linkedin-text').textContent = portfolioData.personal.linkedIn.split('in/')[1]?.split('?')[0] || 'LinkedIn';
    
    document.getElementById('contact-github').href = portfolioData.personal.github;
    document.getElementById('contact-github-text').textContent = portfolioData.personal.github.replace('https://', '').replace('www.', '');
    
    const contactCV = document.getElementById('contact-cv');
    if (contactCV) {
      contactCV.href = resumeLink;
      contactCV.setAttribute('download', resumeLink.split('/').pop() || 'Hassan_Ali_Javaid_CV.pdf');
    }

    document.getElementById('footer-name').textContent = `${portfolioData.personal.firstName} ${portfolioData.personal.lastName}`;

    // About
    const aboutTextContainer = document.getElementById('about-text-container');
    const parasHtml = portfolioData.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    const statsHtml = `<div class="about-stats">${portfolioData.about.stats.map(s => `
      <div class="stat">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label}</span>
      </div>`).join('')}</div>`;
    aboutTextContainer.innerHTML = parasHtml + statsHtml;

    // Interests
    const interestsContainer = document.getElementById('interests-container');
    interestsContainer.innerHTML = portfolioData.about.interests.map(i => `
      <div class="interest-item"><span class="interest-icon">${i.icon}</span><div><strong>${i.title}</strong><p>${i.desc}</p></div></div>
    `).join('');

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = `
      <div class="skill-card">
        <div class="skill-card-header"><span class="skill-icon">💻</span><h3>Programming</h3></div>
        <div class="skill-items">${portfolioData.skills.programming.map(s => `
          <div class="skill-item">
            <div class="skill-info"><span>${s.name}</span><span>${s.percentage}%</span></div>
            <div class="skill-bar"><div class="skill-fill" style="width: 0" data-width="${s.percentage}"></div></div>
          </div>`).join('')}
        </div>
      </div>
      <div class="skill-card">
        <div class="skill-card-header"><span class="skill-icon">📚</span><h3>Libraries & Frameworks</h3></div>
        <div class="skill-items">${portfolioData.skills.libraries.map(s => `
          <div class="skill-item">
            <div class="skill-info"><span>${s.name}</span><span>${s.percentage}%</span></div>
            <div class="skill-bar"><div class="skill-fill" style="width: 0" data-width="${s.percentage}"></div></div>
          </div>`).join('')}
        </div>
      </div>
      <div class="skill-card">
        <div class="skill-card-header"><span class="skill-icon">🛠️</span><h3>Tools & Platforms</h3></div>
        <div class="skill-tags">${portfolioData.skills.tools.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="skill-card">
        <div class="skill-card-header"><span class="skill-icon">🧠</span><h3>ML Concepts</h3></div>
        <div class="skill-tags">${portfolioData.skills.concepts.map(c => `<span class="skill-tag">${c}</span>`).join('')}</div>
      </div>
    `;

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = portfolioData.projects.map((p, i) => `
      <div class="project-card">
        <div class="project-img-container">
          <img src="${p.image || 'hero_bg.png'}" alt="${p.title}" class="project-img" />
        </div>
        <div class="project-content">
          <div class="project-header">
            <span class="project-num">0${i + 1}</span>
            <a href="${p.githubLink}" target="_blank" class="proj-link">View Project</a>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-meta">
            <div class="project-meta-item"><span>🎯 Role:</span> ${p.role}</div>
            <div class="project-meta-item"><span>📊 Result:</span> ${p.result}</div>
          </div>
          <div class="project-tech">${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');

    // Experience
    const experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = portfolioData.experience.map(e => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <span class="timeline-date">${e.date}</span>
          <h3>${e.title}</h3>
          <p class="timeline-org">${e.org}</p>
          <p>${e.desc}</p>
          <div class="timeline-tags">${e.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');

    // Certifications Only
    const educationContainer = document.getElementById('education-container');
    const certsHtml = `
      <div class="certs-section-full" style="width: 100%;">
        <div class="certs-list-large">${portfolioData.certifications.map(c => `
          <div class="cert-item">
            <div class="cert-logo">${c.icon}</div>
            <div class="cert-info">
              <strong>${c.title}</strong>
              <span>${c.org}</span>
              <span class="cert-year">${c.year}</span>
            </div>
          </div>
        `).join('')}</div>
      </div>
    `;
    educationContainer.innerHTML = certsHtml;

    // CV View & Download Links
    const viewCVBtn = document.getElementById('viewCV');
    const downloadBtn = document.getElementById('downloadCV');

    if (viewCVBtn) viewCVBtn.href = resumeLink;
    
    if (downloadBtn) {
      downloadBtn.href = resumeLink;
      if (resumeLink && resumeLink !== "#") {
        const fileName = resumeLink.split('/').pop() || 'Hassan_Ali_Javaid_CV.pdf';
        downloadBtn.setAttribute('download', fileName);
      }
    }

    // Initialize GSAP Animations after rendering
    initGSAP();
  }

  function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section
    const heroTl = gsap.timeline();
    heroTl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".hero-name", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-bio", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-cta .btn", { scale: 0.8, opacity: 0, stagger: 0.2, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
          .from(".hero-visual", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=1");

    // Scroll Revelations
    gsap.utils.toArray('.section-header, .about-grid, .skill-card, .project-card, .timeline-item, .edu-card').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Skill Bars
    gsap.utils.toArray('.skill-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: "top 90%"
        },
        width: `${width}%`,
        duration: 1.5,
        ease: "power2.out"
      });
    });

    // Parallax background
    gsap.to(".hero-particles", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      opacity: 0
    });
  }

  // --- CONTACT FORM ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sendBtn = document.getElementById('sendBtn');
      const formSuccess = document.getElementById('formSuccess');
      
      sendBtn.disabled = true;
      sendBtn.textContent = 'Sending...';
      
      setTimeout(() => {
        contactForm.reset();
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Message 🚀';
        formSuccess.style.display = 'block';
        setTimeout(() => formSuccess.style.display = 'none', 5000);
      }, 1500);
    });
  }

  // --- BACK TO TOP ---
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
});
