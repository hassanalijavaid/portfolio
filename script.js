document.addEventListener('DOMContentLoaded', () => {
  // --- NAVBAR SCROLL EFFECT ---
  const navbar = document.getElementById('navbar');
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
  const body = document.body;

  // Check for saved theme
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

  // --- ACTIVE NAV LINK ON SCROLL ---
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinksItems.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href').includes(current)) {
        a.classList.add('active');
      }
    });
  });

  // Old skill observer removed to be re-initialized after dynamic render

  // --- CONTACT FORM HANDLING ---
  const contactForm = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate sending
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';
    
    setTimeout(() => {
      contactForm.reset();
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Message 🚀';
      formSuccess.style.display = 'block';
      
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 5000);
    }, 1500);
  });

  // --- BACK TO TOP BUTTON ---
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // --- DYNAMIC RENDERING ---
  if (typeof portfolioData !== 'undefined') {
    // Personal Info
    document.getElementById('nav-logo').innerHTML = `${portfolioData.personal.logoText}<span>.</span>`;
    document.getElementById('hero-name').innerHTML = `${portfolioData.personal.firstName} <span class="gradient-text">${portfolioData.personal.lastName}</span>`;
    document.getElementById('hero-title').innerHTML = portfolioData.personal.jobTitle.replace('AI Engineer', '<span class="gradient-text">AI Engineer</span>');
    document.getElementById('hero-bio').innerHTML = portfolioData.personal.bio;
    
    document.getElementById('contact-email').href = `mailto:${portfolioData.personal.email}`;
    document.getElementById('contact-email-text').textContent = portfolioData.personal.email;
    
    document.getElementById('contact-linkedin').href = portfolioData.personal.linkedIn;
    document.getElementById('contact-linkedin-text').textContent = portfolioData.personal.linkedIn.replace('https://', '').replace('www.', '');
    
    document.getElementById('contact-github').href = portfolioData.personal.github;
    document.getElementById('contact-github-text').textContent = portfolioData.personal.github.replace('https://', '').replace('www.', '');
    
    document.getElementById('footer-name').textContent = `${portfolioData.personal.firstName} ${portfolioData.personal.lastName}`;

    // About Text & Stats
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
            <div class="skill-bar"><div class="skill-fill" data-width="${s.percentage}"></div></div>
          </div>`).join('')}
        </div>
      </div>
      <div class="skill-card">
        <div class="skill-card-header"><span class="skill-icon">📚</span><h3>Libraries & Frameworks</h3></div>
        <div class="skill-items">${portfolioData.skills.libraries.map(s => `
          <div class="skill-item">
            <div class="skill-info"><span>${s.name}</span><span>${s.percentage}%</span></div>
            <div class="skill-bar"><div class="skill-fill" data-width="${s.percentage}"></div></div>
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
        <div class="project-header">
          <span class="project-num">0${i + 1}</span>
          <div class="project-links"><a href="${p.githubLink}" target="_blank" class="proj-link" title="GitHub">⬡ GitHub</a></div>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-meta">
          <div class="project-meta-item"><span>🎯 Role:</span> ${p.role}</div>
          <div class="project-meta-item"><span>📊 Result:</span> ${p.result}</div>
        </div>
        <div class="project-tech">${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
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

    // Education
    const educationContainer = document.getElementById('education-container');
    const eduHtml = portfolioData.education.map(e => `
      <div class="edu-card">
        <div class="edu-icon">🎓</div>
        <div class="edu-content">
          <span class="edu-badge">${e.date}</span>
          <h3>${e.title}</h3>
          <p class="edu-org">${e.org}</p>
          <p>${e.desc}</p>
          <span class="edu-grade">${e.grade}</span>
        </div>
      </div>
    `).join('');
    
    const certsHtml = `
      <div class="certs-section">
        <h3 class="certs-title">Certifications</h3>
        <div class="certs-list">${portfolioData.certifications.map(c => `
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
    educationContainer.innerHTML = eduHtml + certsHtml;
  }

  // --- SKILL BARS ANIMATION RE-INITIALIZED ---
  const skillSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-fill');
  
  const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = `${width}%`;
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const skillObserver = new IntersectionObserver(animateSkills, { threshold: 0.5 });
  if (skillSection) skillObserver.observe(skillSection);

  // --- REVEAL ANIMATION ON SCROLL ---
  const revealElements = document.querySelectorAll('.project-card, .skill-card, .timeline-item, .edu-card, .about-text');
  
  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealOnScroll, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(el);
  });

  // --- ADD FLOATING PARTICLES ANIMATION ---
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for(let i=0; i<40; i++) {
      let span = document.createElement('span');
      span.classList.add('particle-anim');
      span.style.top = Math.random() * 100 + '%';
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDelay = (Math.random() * 5) + 's';
      span.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(span);
    }
  }
});
