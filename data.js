const portfolioData = {
  // Personal Information
  personal: {
    firstName: "Hassan Ali",
    lastName: "Javaid",
    logoText: "HAJ",
    jobTitle: "Junior AI Engineer & Cybersecurity Specialist",
    email: "hassanalijavaid1@gmail.com",
    linkedIn: "https://www.linkedin.com/in/hassan-ali-javaid-4b8834345",
    github: "https://github.com/hassanalijavaid",
    bio: "Highly motivated IT graduate specializing in Artificial Intelligence and Machine Learning. Proven expertise in model training and building advanced Agentic AI solutions, combined with a strong background in Cybersecurity to drive secure and innovative engineering.",
    resumeLink: "Hassan_Ali_Javaid_CV.pdf"
  },

  // About Section
  about: {
    paragraphs: [
      "I am an IT graduate with a deep-seated passion for **Artificial Intelligence** and its transformative potential. My expertise lies in developing **Agentic AI solutions**, e-commerce platforms, and data-driven technical projects.",
      "With a unique blend of **AI and Cybersecurity** skills, I focus on building intelligent systems that are not only high-performing but also secure and resilient against digital threats. I am proficient in Python frameworks including **Django, PyTorch, and Scikit-Learn**.",
      "I thrive on solving complex mysteries within datasets and am committed to continuous learning to stay at the forefront of AI engineering."
    ],
    stats: [
      { num: "5+", label: "AI Projects" },
      { num: "2", label: "Specializations" },
      { num: "Expert", label: "Django Dev" }
    ],
    interests: [
      { icon: "🤖", title: "Agentic AI", desc: "Building autonomous AI agents and solutions" },
      { icon: "🛡️", title: "Cybersecurity", desc: "Vulnerability scanning and secure AI modeling" },
      { icon: "🛍️", title: "Web Solutions", desc: "Scalable e-commerce and Django web apps" },
      { icon: "📊", title: "Data Science", desc: "Analysis using NumPy, Pandas, and Scikit-Learn" }
    ]
  },

  // Skills Section
  skills: {
    programming: [
      { name: "Python", percentage: 92 },
      { name: "JavaScript", percentage: 80 },
      { name: "HTML5 / CSS3", percentage: 85 }
    ],
    libraries: [
      { name: "PyTorch", percentage: 85 },
      { name: "Django / Flask", percentage: 88 },
      { name: "Scikit-learn", percentage: 82 },
      { name: "NumPy / Pandas", percentage: 85 }
    ],
    tools: [
      "Microsoft Azure", "Nessus", "Burp Suite", "OWASP ZAP", "Nmap", "Metasploit", "Wireshark", "Git & GitHub"
    ],
    concepts: [
      "Agentic AI", "Model Training", "Deep Learning", "Vulnerability Scanning", "Network Mapping", "Secure Coding", "Data Preprocessing"
    ]
  },

  // Projects Section
  projects: [
    {
      title: "Twitter Sentiment Web App",
      desc: "Built a Python-based sentiment analysis engine that identifies emotions (Positive/Negative) in real-time Twitter data using NLTK and Flask.",
      role: "AI Developer",
      result: "Real-time Processing",
      tech: ["Python", "NLTK", "Flask", "Data Visualization"],
      image: "heart_disease.png", // Reusing generated assets for visual consistency
      githubLink: "https://github.com/hassanalijavaid"
    },
    {
      title: "E-Commerce AI Platform",
      desc: "Designed and developed a scalable e-commerce front-end with custom headers, footers, and product layouts, ensuring full mobile responsiveness.",
      role: "Web Engineer",
      result: "Full Responsive",
      tech: ["Django", "JavaScript", "CSS3", "HTML5"],
      image: "house_price.png",
      githubLink: "https://github.com/hassanalijavaid"
    },
    {
      title: "Agentic AI Solutions",
      desc: "Specialized development and deployment of autonomous AI agents using PyTorch and Azure for smart decision-making from complex data.",
      role: "AI Engineer",
      result: "Cloud Deployed",
      tech: ["PyTorch", "Azure", "Agentic AI", "Python"],
      image: "hero_background_ai.png",
      githubLink: "https://github.com/hassanalijavaid"
    }
  ],

  // Experience Section
  experience: [
    {
      date: "Jan 2026 – Feb 2026",
      title: "Azure AI & Machine Learning Trainee",
      org: "Professional Training Program",
      desc: "Trained smart models using PyTorch, handled data cleaning with NumPy/Pandas, and learned to host and run AI projects on Microsoft Azure.",
      tags: ["Azure", "PyTorch", "Model Training"]
    },
    {
      date: "Aug 2025 – Nov 2025",
      title: "Certified Ethical Hacker (CEH) Trainee",
      org: "Cybersecurity Training",
      desc: "Conducted automated network scanning, web security checks, and network mapping using Nessus, Burp Suite, and Metasploit to test system defenses.",
      tags: ["CEH", "Nessus", "Security"]
    }
  ],

  // Certifications Only (Education is handled in experience or removed as requested)
  certifications: [
    {
      icon: "🛡️",
      title: "Certified Ethical Hacker (CEH)",
      org: "Corvit Institute Gulberg",
      year: "2025"
    },
    {
      icon: "🧠",
      title: "AI & Machine Learning Specialization",
      org: "TEEVTA College Lytton Road, Lahore",
      year: "2026"
    }
  ]
};
