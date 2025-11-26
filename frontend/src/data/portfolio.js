export const personalInfo = {
  name: "IT Student",
  title: "IT Student at Oulu University of Applied Sciences",
  bio: "I am a driven IT student with a passion for problem-solving and innovation. Eager to apply my technical skills and knowledge in real-world scenarios to contribute to cutting-edge projects and make a positive impact. Committed to continuous learning and growth, I strive to excel in every endeavor, embracing challenges as opportunities for personal and professional development.",
  email: "contact@example.com",
  location: "Oulu, Finland",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and modern web applications using React, Node.js, and modern frameworks.",
    icon: "code"
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Creating native mobile applications with React Native and Kotlin for Android platforms.",
    icon: "smartphone"
  },
  {
    id: 3,
    title: "Database Design",
    description: "Designing and implementing efficient database systems using MySQL and PostgreSQL.",
    icon: "database"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Deploying and managing applications on cloud platforms like Microsoft Azure.",
    icon: "cloud"
  }
];

export const skills = {
  frontend: [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "React.js", level: 80 },
    { name: "React Native", level: 75 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "REST API Design", level: 85 },
    { name: "Java", level: 70 },
    { name: "Kotlin", level: 75 }
  ],
  databases: [
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 80 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "Microsoft Azure", level: 75 },
    { name: "WordPress Development", level: 70 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "CleanSync",
    description: "CleanSync is a clean, modern Android application built with Kotlin and Jetpack Compose, focused on providing smooth user management, booking functionality, notification handling, and theme customization.",
    technologies: ["Kotlin", "Jetpack Compose", "Android"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 2,
    title: "NordFlix",
    description: "NordFlix is a feature-rich web app for discovering movies and TV series with search, showtimes, reviews, favorites, and social groups. Built with React, Node/Express, and PostgreSQL, integrating TMDB & Finnkino. Deployed on Azure/Render with Supabase for real-time data.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Azure"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "Designed and implemented a fully responsive and feature-rich e-commerce platform for buying and selling second-hand products.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description: "Crafted an engaging and interactive Tic Tac Toe game, featuring smooth gameplay, responsive design, and intuitive user interface for an enjoyable gaming experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 5,
    title: "Rock Paper Scissors Game",
    description: "Crafted an engaging rock-paper-scissors game with a sleek user interface, demonstrating proficiency in front-end web development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 6,
    title: "Calculator",
    description: "Built a fully functional web-based calculator with a user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "#"
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor's of Engineering in Information Technology",
    institution: "Oulu University of Applied Sciences, Finland",
    period: "2023 - 2027",
    status: "Study Ongoing",
    gpa: null
  },
  {
    id: 2,
    degree: "High School Diploma in Computer Science",
    institution: "Himalayan Secondary School, Nepal",
    period: "2020 - 2022",
    status: "Completed",
    gpa: "3.57 (scale: 0-4)"
  },
  {
    id: 3,
    degree: "Secondary Education Examination",
    institution: "Vidhya Sadan Secondary School, Nepal",
    period: "2020",
    status: "Completed",
    gpa: "3.90 (scale: 0-4)"
  }
];

export const experience = [
  {
    id: 1,
    position: "Jr. Front-end Developer",
    company: "NepWeb Solution",
    location: "Birgunj, Nepal",
    period: "Dec 2022 - July 2023",
    responsibilities: [
      "Developed responsive web applications using HTML5, CSS, Bootstrap, and JavaScript.",
      "Implemented server-side logic with Node.js and integrated with MySQL and PostgreSQL databases.",
      "Engaged in code reviews with senior developers to improve code quality, adhere to best practices, and foster knowledge sharing within the team.",
      "Assisted in testing activities, including cross-browser testing, performance optimization, and usability testing, to identify areas for improvement and enhance the overall quality of web applications.",
      "Utilized Git for version control and collaboration with team members."
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in functional components.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    content: "React Hooks revolutionized the way we write React components..."
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js",
    excerpt: "A comprehensive guide to creating robust REST APIs using Node.js and Express.",
    date: "2024-02-20",
    readTime: "8 min read",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    content: "REST APIs are the backbone of modern web applications..."
  },
  {
    id: 3,
    title: "Docker for Beginners",
    excerpt: "Understanding containerization and how Docker can simplify your development workflow.",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop",
    content: "Docker has become an essential tool in modern software development..."
  }
];