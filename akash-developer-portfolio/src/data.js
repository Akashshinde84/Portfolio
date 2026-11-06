// Resolve public assets relative to Vite's configured deployment base.
export const assetUrl = path => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
export const profile = {
  name: 'Akash Shinde',
  email: 'akashshinde7466@gmail.com',
  phone: '+91 7087473746',
  phoneHref: 'tel:+917087473746',
  location: 'Kolhapur, Maharashtra, India',
  github: 'https://github.com/Akashshinde84',
  linkedin: 'https://www.linkedin.com/in/akashshinde8',
  resume: '/resume.pdf',
  image: '/images/professional-profile.png'
};
export const about = {
  eyebrow: '01 / ABOUT ME',
  title: 'Curious mind. Builder mindset.',
  paragraphs: [
    "I'm an aspiring Software Developer and final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Sanjay Ghodawat University, Kolhapur.",
    'I enjoy building practical applications using Python, Java, React, and modern development technologies. My interests include software engineering, full-stack development, machine learning, data science, and intelligent automation.',
    'Through hands-on projects, I have gained experience developing web applications, working with REST APIs, processing data, and solving real-world problems.',
    'I am continuously strengthening my technical and problem-solving skills and seeking opportunities to contribute to meaningful software projects.'
  ],
  focus: {
    eyebrow: 'CURRENT FOCUS',
    title: 'From concept to deployment.',
    description: 'Building useful products, writing maintainable code, and learning new technologies.',
    linkLabel: "Let's connect",
    linkHref: '#contact'
  }
};

export const skillsSection = {
  eyebrow: '02 / TECH STACK',
  title: 'Technical skills.',
  description: 'The languages, frameworks, and tools I use to build software, work with data, and explore intelligent applications.'
};

export const skills = {
  'Programming': ['Python', 'Java', 'C++', 'SQL', 'JavaScript'],
  'Frontend': ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS'],
  'Backend': ['FastAPI', 'Flask', 'REST APIs', 'Streamlit'],
  'AI / Machine Learning': ['Machine Learning', 'Deep Learning', 'NLP', 'Scikit-learn', 'OpenCV', 'LLM Applications'],
  'Data Analysis': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Excel'],
  'Databases': ['MySQL', 'MongoDB'],
  'Developer Tools': ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter Notebook']
};

export const projectsSection = {
  "eyebrow": "03 / SELECTED WORK",
  "title": "Ideas built into applications.",
  "description": "A closer look at the software, intelligent tools, and data-driven applications I build.",
  "filters": [
    "All Projects",
    "Web Development",
    "Python",
    "AI / Machine Learning"
  ]
};

// Curated content is primary. Add demos only after checking the deployment URL.
export const projects = [
  {
    "id": "enterprise-rag-assistant",
    "number": "FYP",
    "title": "Enterprise Multi-Agent RAG Knowledge Assistant with Tool Use & Memory",
    "category": "Final-Year Academic Project",
    "categories": [
      "AI / Machine Learning"
    ],
    "visual": "brain",
    "featured": true,
    "featuredLabel": "Featured Project",
    "academicLabel": "Final-Year Project",
    "status": "In Progress",
    "developmentStage": "Under Development",
    "featureStage": "planned",
    "featuresLabel": "Planned features",
    "techLabel": "Planned technologies & concepts",
    "planningNote": "Proposed capabilities below are planned, not a list of completed functionality.",
    "description": "Developing an AI-powered enterprise knowledge assistant designed to retrieve relevant information from organizational documents and databases using Retrieval-Augmented Generation (RAG). The proposed system uses specialized AI agents for retrieval, reasoning, and response generation, with planned support for external tool integration, conversational memory, and secure role-based knowledge access.",
    "tech": [
      "Retrieval-Augmented Generation (RAG)",
      "Multi-Agent Architecture",
      "Vector Database",
      "Semantic Search",
      "External APIs",
      "Conversational Memory",
      "Role-Based Access Control"
    ],
    "features": [
      "Multi-Agent RAG architecture",
      "Enterprise document retrieval",
      "Vector database and semantic search",
      "Specialized AI agents for planning, retrieval, and reasoning",
      "External tools and API integration",
      "Conversational memory",
      "Context-aware responses",
      "Source-grounded answer generation",
      "Role-based access control"
    ],
    "github": "",
    "demo": "",
    "demoVerified": false,
    "image": {
      "src": "/images/projects/enterprise-rag.svg",
      "alt": "Conceptual network of planning, retrieval, reasoning, and response agents linked to documents, vector search, memory, and tools.",
      "kind": "illustration",
      "caption": "Concept illustration - Not an application screenshot",
      "width": 960,
      "height": 540
    }
  },
  {
    "id": "mother-tongue",
    "number": "01",
    "title": "Mother Tongue Bridge",
    "category": "Full Stack / AI",
    "categories": [
      "Web Development",
      "Python",
      "AI / Machine Learning"
    ],
    "visual": "languages",
    "description": "An AI-powered multilingual educational platform that translates, simplifies, and explains learning materials in students' native languages.",
    "tech": [
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MongoDB Atlas",
      "Google Gemini API",
      "Tesseract OCR",
      "gTTS"
    ],
    "features": [
      "AI-powered educational assistance",
      "OCR-based text extraction",
      "Text-to-speech learning support",
      "AI doubt-solving",
      "Learning history"
    ],
    "github": "https://github.com/Akashshinde84/Mother-tongue",
    "demo": "",
    "demoVerified": false,
    "image": {
      "src": "/images/projects/mother-tongue-bridge.svg",
      "alt": "Concept illustration of source documents translated into native-language learning material with speech support.",
      "kind": "illustration",
      "caption": "Concept illustration - Not an application screenshot",
      "width": 960,
      "height": 540
    }
  },
  {
    "id": "invoice-processing",
    "number": "02",
    "title": "Automated Invoice Processing and Anomaly Detection",
    "category": "Python / Machine Learning",
    "categories": [
      "Python",
      "AI / Machine Learning"
    ],
    "visual": "invoice",
    "description": "An intelligent invoice processing application that extracts invoice data, validates information, detects duplicates, and identifies potentially unusual transactions.",
    "tech": [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Streamlit",
      "Pandas",
      "NumPy",
      "OCR"
    ],
    "features": [
      "OCR invoice extraction",
      "Duplicate invoice detection",
      "Machine learning anomaly detection",
      "Risk scoring",
      "Streamlit dashboard"
    ],
    "github": "https://github.com/Akashshinde84/Automated-Invoice-Processing-and-Anomaly-Detection",
    "demo": "https://invoice-detection.streamlit.app/",
    "demoVerified": true,
    "image": {
      "src": "/images/projects/invoice-anomaly-detection.svg",
      "alt": "Concept illustration of invoice OCR extraction, validation, duplicate checks, and anomaly review.",
      "kind": "illustration",
      "caption": "Concept illustration - Not an application screenshot",
      "width": 960,
      "height": 540
    }
  },
  {
    "id": "shopping-prediction",
    "number": "03",
    "title": "Smart Online Shopping Prediction",
    "category": "Data Science / Machine Learning",
    "categories": [
      "Python",
      "AI / Machine Learning"
    ],
    "visual": "shopping",
    "description": "A machine learning application that predicts customer purchase intentions based on browsing behavior and website interactions.",
    "tech": [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Streamlit",
      "Pandas",
      "NumPy",
      "SHAP"
    ],
    "features": [
      "Customer purchase prediction",
      "Multiple machine learning models",
      "Interactive dashboard",
      "SHAP explainability",
      "Data visualization"
    ],
    "github": "https://github.com/Akashshinde84/smart-online-shopping-prediction",
    "demo": "",
    "demoVerified": false,
    "image": {
      "src": "/images/projects/shopping-prediction.svg",
      "alt": "Concept illustration of shopping behavior charts, purchase prediction insights, and model explainability.",
      "kind": "illustration",
      "caption": "Concept illustration - Not an application screenshot",
      "width": 960,
      "height": 540
    }
  }
];

export const filterProjects = category => category === 'All Projects' ? projects : projects.filter(project => project.categories.includes(category));

export const educationSection = {
  "eyebrow": "04 / ACADEMIC JOURNEY",
  "title": "Education."
};

export const education = [
  {
    "id": "btech",
    "date": "2023\u20132027 (Expected)",
    "title": "B.Tech \u2014 Artificial Intelligence and Machine Learning",
    "place": "Sanjay Ghodawat University, Kolhapur",
    "resultLabel": "CGPA",
    "result": "7.00",
    "icon": "graduation"
  },
  {
    "id": "higher-secondary",
    "date": "Completed: 2023",
    "title": "Higher Secondary Education (12th)",
    "place": "New Model Junior College, Kolhapur",
    "resultLabel": "Percentage",
    "result": "55.00%",
    "icon": "school"
  },
  {
    "id": "secondary",
    "date": "Completed: 2021",
    "title": "Secondary Education (10th)",
    "place": "Seventh-day Adventist Higher Secondary School, Kolhapur",
    "resultLabel": "Percentage",
    "result": "75.00%",
    "icon": "school"
  }
];

export const achievementsSection = {
  "eyebrow": "BEYOND THE CLASSROOM",
  "title": "Achievements & Activities."
};

export const achievements = [
  {
    "id": "linuxdiary",
    "title": "LINUXDIARY 5.0 \u2014 Linux and Open-Source Participation",
    "category": "Open source",
    "icon": "terminal"
  },
  {
    "id": "genesis",
    "title": "MeitY GENESIS Tech Builders Workshop",
    "detail": "AIC-ADT Baramati Foundation",
    "category": "Workshop",
    "icon": "builders"
  },
  {
    "id": "football",
    "title": "State-Level Football Player",
    "category": "Sports",
    "icon": "football"
  }
];

export const certificationsSection = {
  "eyebrow": "05 / CONTINUOUS LEARNING",
  "title": "Certifications.",
  "description": "Learning put into practice through courses, internships, and professional programs. Open any certificate to view the original document."
};

// Original uploaded files. Keep document identifiers out of public card metadata.
export const certifications = [
  {
    "id": "data-science-internship",
    "title": "Data Science Master Virtual Internship",
    "issuer": "AICTE & EduSkills",
    "support": "Supported by Siemens",
    "date": "July 2026",
    "url": "/certificates/data-science-internship.png",
    "format": "PNG",
    "icon": "data"
  },
  {
    "id": "linuxdiary",
    "title": "LINUXDIARY 5.0",
    "issuer": "Walchand Linux Users' Group",
    "type": "Participation Certificate",
    "date": "2026",
    "url": "/certificates/linuxdiary-participation.png",
    "format": "PNG",
    "icon": "linux"
  },
  {
    "id": "research-methodology",
    "title": "Research Methodology",
    "issuer": "NPTEL / IIT Madras",
    "date": "July\u2013October 2026",
    "result": "Elite, 63%",
    "url": "/certificates/nptel-research-methodology.pdf",
    "format": "PDF",
    "icon": "research"
  },
  {
    "id": "persevex-machine-learning",
    "title": "Machine Learning Course",
    "issuer": "Persevex",
    "date": "October 2026",
    "url": "/certificates/persevex-machine-learning.pdf",
    "format": "PDF",
    "icon": "ml"
  },
  {
    "id": "deloitte-data-analytics",
    "title": "Data Analytics Job Simulation",
    "issuer": "Deloitte / Forage",
    "date": "June 2026",
    "url": "/certificates/deloitte-data-analytics.pdf",
    "format": "PDF",
    "icon": "analytics"
  },
  {
    "id": "simplilearn-machine-learning",
    "title": "Machine Learning for Beginners",
    "issuer": "Simplilearn SkillUp",
    "date": "July 2025",
    "url": "/certificates/simplilearn-machine-learning.pdf",
    "format": "PDF",
    "icon": "learning"
  }
];
export const activities = ['MeitY GENESIS Tech Builders Workshop', 'AIC-ADT Baramati Foundation'];

export const contactSection = {
  eyebrow: '06 / GET IN TOUCH',
  title: "Let's Build Something Great Together",
  message: "Have a software development opportunity or a project in mind? I welcome conversations with recruiters and collaborators about building practical, meaningful applications.",
  formTitle: 'Start a conversation',
  formNote: 'This form opens a draft in your email app. Review it and press Send there. No message is sent from this website.'
};

export const footerNavigation = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'certifications', 'contact'];
