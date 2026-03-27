const config = {
  header: {
    name: 'Pragya Arya',
    menu: ['ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'EDUCATION']
  },

  detail: {
    name: 'Pragya Arya',
    bio: 'Frontend Developer | B.Tech CSE (Data Science) student at VIT Vellore.',
    location: 'Vellore, India',
    image: '/resources/images/profile.png'
  },

  github: {
    username: 'PragyaArya3333',
    sortBy: 'updated',
    limit: 6,
    exclude: {
      forks: true,
      projects: []
    }
  },

  social: {
    github: 'PragyaArya3333',
    trailhead: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    medium: '',
    dev: '',
    artstation: '',
    stackoverflow: '',
    website: '',
    phone: '',
    email: 'workaryapragya9@gmail.com',
    location: 'Vellore, India'
  },

  resume: '',

  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Bootstrap',
    'Git',
    'GitHub',
    'Responsive Design',
    'REST API'
  ],

  experiences: [
    {
      name: 'Personal Frontend Projects',
      title: 'Frontend Developer',
      from: '2025',
      to: 'Present',
      link: '',
      location: 'Vellore, India',
      description: 'Built responsive web pages and frontend projects using HTML, CSS, JavaScript, React, and GitHub.'
    },
    {
      name: 'Academic Project Work',
      title: 'Student Developer',
      from: '2022',
      to: 'Present',
      link: '',
      location: 'VIT Vellore',
      description: 'Worked on UI-based academic and personal web projects, focusing on layout, responsiveness, and clean frontend design.'
    }
  ],

  certifications: null,

  education: [
    {
      name: 'VIT Vellore',
      title: 'B.Tech in Computer Science and Engineering (Data Science)',
      from: '2022',
      to: '2026',
      location: 'Vellore, Tamil Nadu'
    }
  ],

  projects: [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website built and customized for my frontend resume.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
      link: ''
    },
    {
      title: 'Frontend UI Practice Project',
      description: 'A responsive user interface project focused on layout, styling, and clean frontend design.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/891/891462.png',
      link: ''
    },
    {
      title: 'Weather App UI',
      description: 'A simple frontend weather interface with search and responsive design.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1779/1779940.png',
      link: ''
    }
  ],

  blog: {
    source: 'dev',
    username: '',
    limit: 2
  },

  googleAnalytics: {
    id: ''
  },

  formspree: {
    id: ''
  },

  themeConfig: {
    defaultTheme: 'light',
    light: {
      primary: '#f5f7ff',
      primaryText: '#1f2937',
      baseText: '#1f2937',
      baseL1: '#ffffff'
    },
    aqua: {
      primary: '#f8fbff',
      primaryText: '#0f4c5c',
      baseL1: '#ffffff',
      baseL2: '#dff6ff',
      highlight: '#38bdf8',
      baseText: '#0f172a',
      roundedbox: '10px',
      roundedbtn: '10px'
    },
    dark: {
      primary: '#111827',
      primaryText: '#f9fafb',
      baseL1: '#1f2937',
      baseL2: '#0f172a',
      highlight: '#60a5fa',
      baseText: '#f3f4f6',
      roundedbox: '10px',
      roundedbtn: '10px'
    }
  },

  footer: 'Designed and customized by Pragya Arya'
};

export { config };