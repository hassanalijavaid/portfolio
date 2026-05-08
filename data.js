const portfolioData = {
  // Personal Information
  personal: {
    firstName: "Hassan Ali",
    lastName: "Javaid",
    logoText: "HA", // Text for the top left logo
    jobTitle: "Junior AI Engineer",
    email: "hassanalijavaid1@email.com", // Change this
    linkedIn: "https://www.linkedin.com/in/hassan-ali-javaid-4b8834345?utm_source=share_via&utm_content=profile&utm_medium=member_android", // Change this
    github: "https://github.com/hassanalijavaid", // Change this
    bio: "Passionate about building intelligent systems that solve real-world problems. I combine Python, Machine Learning, and Deep Learning to turn data into actionable insights.",
    resumeLink: "#" // Add link to your resume if you have one
  },

  // About Section
  about: {
    paragraphs: [
      "I'm a Computer Science graduate with a deep passion for <strong>Artificial Intelligence</strong> and how it can reshape the world. My journey started with fascination over how machines can learn patterns and make decisions — and I've been hooked ever since.",
      "I specialize in building <strong>machine learning pipelines</strong>, developing <strong>predictive models</strong>, and exploring domains like <strong>Natural Language Processing</strong>, <strong>Computer Vision</strong>, and <strong>Predictive Modeling</strong>. Every dataset is a mystery I love to solve.",
      "I'm a continuous learner who thrives on challenges. My goal is to grow into a full-fledged AI Engineer contributing to impactful products — while staying curious and collaborative."
    ],
    stats: [
      { num: "5+", label: "AI Projects" },
      { num: "2", label: "Certifications" },
      { num: "94%", label: "Best Model Accuracy" }
    ],
    interests: [
      { icon: "💬", title: "Natural Language Processing", desc: "Building chatbots and text classifiers" },
      { icon: "👁️", title: "Computer Vision", desc: "CNNs for image recognition & detection" },
      { icon: "📈", title: "Predictive Modeling", desc: "Regression & classification pipelines" },
      { icon: "🔬", title: "Research & Learning", desc: "Reading papers, Kaggle competitions" }
    ]
  },

  // Skills Section
  skills: {
    programming: [
      { name: "Python", percentage: 90 },
      { name: "SQL", percentage: 60 }
    ],
    libraries: [
      { name: "Scikit-learn", percentage: 75 },
      { name: "TensorFlow / Keras", percentage: 78 },
      { name: "NumPy / Pandas", percentage: 78 },
      { name: "PyTorch", percentage: 60 }
    ],
    tools: [
      "Jupyter Notebook", "Git & GitHub", "VS Code", "Google Colab", "Kaggle", "Matplotlib"
    ],
    concepts: [
      "Supervised Learning", "Classification", "Regression", "Data Preprocessing", "Feature Engineering", "Model Evaluation", "CNN", "NLP Basics"
    ]
  },

  // Projects Section (Add or remove projects here)
  projects: [
    {
      title: "Heart Disease Prediction",
      desc: "Built a binary classification model to predict heart disease risk using patient health metrics. Applied feature engineering and class-balancing techniques for high accuracy.",
      role: "ML Engineer",
      result: "91% Accuracy",
      tech: ["Python", "Scikit-learn", "Logistic Regression", "Pandas"],
      githubLink: "#"
    },
    {
      title: "House Price Prediction",
      desc: "Developed a regression pipeline to predict housing prices from structured data. Used feature correlation analysis and regularization (Ridge/Lasso) to minimize overfitting.",
      role: "Data Scientist",
      result: "R² Score 0.89",
      tech: ["Python", "Linear Regression", "Ridge/Lasso", "Matplotlib"],
      githubLink: "#"
    },
    {
      title: "Image Classifier (CNN)",
      desc: "Trained a Convolutional Neural Network on CIFAR-10 to classify 10 object categories. Applied data augmentation and dropout regularization to boost generalization.",
      role: "Deep Learning Engineer",
      result: "94% Test Accuracy",
      tech: ["TensorFlow", "Keras", "CNN", "Data Augmentation"],
      githubLink: "#"
    },
    {
      title: "NLP Chatbot",
      desc: "Designed an intent-based chatbot using TF-IDF vectorization and a neural classifier. Supports 15+ intents and returns context-aware responses from a custom knowledge base.",
      role: "NLP Engineer",
      result: "87% Intent Accuracy",
      tech: ["Python", "NLTK", "TF-IDF", "Keras"],
      githubLink: "#"
    },
    {
      title: "Customer Churn Analysis",
      desc: "End-to-end ML pipeline analyzing telecom customer churn using Random Forest and XGBoost. Included EDA, feature importance visualization, and a Jupyter-based report.",
      role: "ML Analyst",
      result: "F1-Score 0.88",
      tech: ["XGBoost", "Random Forest", "EDA", "Seaborn"],
      githubLink: "#"
    }
  ],

  // Experience Section
  experience: [
    {
      date: "Jan 2024 – Apr 2024",
      title: "AI/ML Academic Project Lead",
      org: "University Capstone Project",
      desc: "Led a team of 3 to build a predictive health analytics system. Designed the ML pipeline, preprocessed clinical data, and presented results to faculty evaluators. Project scored distinction.",
      tags: ["Python", "Scikit-learn", "Team Lead"]
    },
    {
      date: "Jun 2023 – Aug 2023",
      title: "Data Science Virtual Internship",
      org: "AICTE – Virtual Internship Program",
      desc: "Completed a structured 8-week virtual internship focused on data preprocessing, exploratory data analysis, and building supervised learning models using real-world datasets.",
      tags: ["EDA", "Pandas", "Regression"]
    },
    {
      date: "2023 – Present",
      title: "Kaggle Competitions Participant",
      org: "Kaggle",
      desc: "Actively competing in ML challenges including Titanic Survival Prediction and Housing Price competitions. Focused on feature engineering, ensemble methods, and leaderboard improvement.",
      tags: ["Kaggle", "XGBoost", "Competition"]
    }
  ],

  // Education Section (Add or remove courses/certifications here)
  education: [
    {
      date: "2021 – 2025",
      title: "B.Sc. Computer Science (AI Specialization)",
      org: "National University of Technology",
      desc: "Relevant Coursework: Machine Learning, Data Structures, Algorithms, Database Systems, Statistics, Computer Vision, Natural Language Processing",
      grade: "CGPA: 3.0 / 4.0"
    }
  ],

  certifications: [
    {
      icon: "📘",
      title: "Machine Learning Specialization",
      org: "Coursera — Andrew Ng (Stanford)",
      year: "2024"
    },
    {
      icon: "🟠",
      title: "Deep Learning A–Z",
      org: "Udemy — Kirill Eremenko",
      year: "2023"
    },
    {
      icon: "🏅",
      title: "Intro to Machine Learning",
      org: "Kaggle Learn",
      year: "2023"
    },
    {
      icon: "🐍",
      title: "Python for Data Science",
      org: "IBM — Coursera",
      year: "2022"
    }
  ]
};
