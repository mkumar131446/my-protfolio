export interface Project {
  title: string
  description: string
  image: string
  link: string
}

export interface ContactLink {
  icon: string
  label: string
  href: string
}

export interface Experience {
  company: string
  role?: string
  duration: string
  logo: string
  bullets: Array<string>
}

export interface Certifications {
  title: string
  issuer: string
  issued: string
  credentialId: string
  image: string
  link?: string
}

export interface Publication {
  title: string
  journal: string
  date: string // ISO yyyy-mm-dd
  type: string
  contributions: Array<string>
  contributors: Array<string>
  doi?: string
  link?: string
}

// Set to your ORCID iD (e.g. '0000-0000-0000-0000') to show the "View on ORCID" button
export const ORCID_ID = '0009-0003-0575-8072'

export const publications: Publication[] = [
  {
    title: 'The Economic Impact of Web Performance Budgets: A Data-Driven Approach to Conversion Optimization',
    journal: 'Hampton Global Business Review',
    date: '2025-07-30',
    type: 'Journal article',
    contributions: ['Conceptualization', 'Methodology', 'Writing - original draft', 'Writing - review & editing'],
    contributors: ['Manish Kumar'],
  },
  {
    title: 'Developer Productivity and Project Cost Savings through Component Reusability',
    journal: 'Global Journal of Engineering and Basic Sciences (GBEJ)',
    date: '2025-07-04',
    type: 'Journal article',
    contributions: ['Conceptualization', 'Methodology', 'Writing - original draft', 'Writing - review & editing'],
    contributors: ['Manish Kumar'],
  },
  {
    title: 'Designing Resilient Front End Architectures for Real-Time Web Application',
    journal: 'International Journal of Engineering Technology Research & Management (IJETRM)',
    date: '2024-08-30',
    type: 'Journal article',
    contributions: ['Conceptualization', 'Methodology', 'Writing - original draft', 'Writing - review & editing'],
    contributors: ['Manish Kumar'],
    doi: '10.5281/zenodo.15486443',
  },
  {
    title: 'Bridging the Gap: Integrating AI Assisted Code Suggestions in Your UI Workflow',
    journal: 'International Journal of Engineering Technology Research & Management (IJETRM)',
    date: '2023-09-11',
    type: 'Journal article',
    contributions: ['Writing - original draft', 'Conceptualization', 'Methodology', 'Writing - review & editing'],
    contributors: ['Manish Kumar'],
    doi: '10.5281/zenodo.15321149',
  },
]

export const projects: Project[] = [
  {
    title: 'CenVexa',
    description: 'AI-powered supply chain forecasting and enterprise planning platform, built end to end. Architected multi-tenant SaaS infrastructure with role-based access control, a shared component/design system, and CI/CD-driven production deployment.',
    image: '/images/logo.svg',
    link: 'https://cenvexa.co',
  },
  {
    title: 'MPA Analytics Platform',
    description: 'A URL-based, desktop-responsive supply chain analytics platform built for Motorcar Parts of America, migrating an existing Streamlit prototype into a production-ready React + FastAPI architecture.',
    image: '/images/mpa-logo.svg',
    link: 'https://mpa-analytics-platform.vercel.app/',
  },
  {
    title: 'GANESH AGRO',
    description: 'A responsive website for selling agricultural commodities like food and seeds, built using Angular, SCSS, and JavaScript. Led UI development aligned with UILine design system',
    image: 'http://pic.accessify.com/thumbnails/777x423/g/ganeshagro.com.png',
    link: 'https://ganeshagro.com/',
  },
  {
    title: 'DRIVEDGE',
    description: 'Led the development of a clean, responsive web app for Drivedge, a leader in ERP and offshore delivery services. Built using Angular, SCSS, and JavaScript, the app improved their digital presence and showcased my full-stack front-end skills.',
    image: 'https://image2.owler.com/5851362-1473621736376_thumbnail.png',
    link: 'https://www.drivedge.com/',
  },
  {
    title: 'RALPHENS SYSTEMS INC',
    description: 'This was the project I worked on Web application for a software consulting company',
    image: '/images/ralphen.jpg',
    link: 'https://ralphensengr.net/',
  },
  {
    title: 'PUNK GOGGLES',
    description: 'Developed a robust e-commerce web app with a smooth shopping experience and rich product details. Built with Angular, SCSS, JavaScript, and PHP, this project highlights my ability to lead full-stack UI development and deliver feature-rich platforms.',
    image: '/images/punk-goggles.png',
    link: '#',
  },
  {
    title: 'Supply Chain Link (SCL)',
    description: 'Contributed to building and deploying Supply Chain Link — an internal Medline app for sales reps to streamline ordering and manage supply statuses. Built with Angular, Ag-Grid, and JavaScript, it brought e-commerce-level efficiency to internal operations.',
    image: '/images/medline-logo.jpg',
    link: '#',
  },
  {
    title: 'GitHub Copilot Usage Dashboard',
    description: 'Internal dashboard to monitor Copilot usage via GitHub API and Chart.js.',
    image: '/images/medline-logo.jpg',
    link: '#',
  },
  {
    title: 'React Component Library',
    description: 'In-house reusable React component library developed as part of the UiKit system, styled using UiLine — Medline’s internal style library similar to Bootstrap. Built with TypeScript, SCSS, Storybook, and comprehensive test coverage.',
    image: '/images/medline-logo.jpg',
    link: '#',
  },
  {
    title: 'Talent Planning Process (TPP)',
    description: 'Sole UI developer for Medline’s Talent Planning Process app, built from scratch using Angular 15, SCSS, and Ag-Grid. The tool streamlined employee performance and potential tracking, boosting collaboration between managers and HR.',
    image: '/images/medline-logo.jpg',
    link: '#',
  },
]

export const contactLinks: ContactLink[] = [
  {
    icon: '/email-1.svg',
    label: 'Email',
    href: 'mailto:mkumar131446@gmail.com',
  },
  {
    icon: '/linkedin-1.svg',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manishkumar-ui/',
  },
  {
    icon: '/github.svg',
    label: 'GitHub',
    href: 'https://github.com/mkumar131446',
  },
  {
    icon: '/telephone.svg',
    label: '551-229-2663',
    href: 'tel:+15512292663',
  },

  {
    icon: '/Medium-Icon-Black.svg',
    label: 'Medium',
    href: 'https://medium.com/@mkumar131446',
  },
]

export const experience: Experience[] = [
  {
    company: 'CenVexa',
    duration: 'Jan 2026 – Present',
    logo: '/images/logo.svg',
    bullets: [
      'Building an AI-powered supply chain forecasting and enterprise planning platform from the ground up as the sole engineer.',
      'Architected multi-tenant SaaS infrastructure with role-based access control, tenant isolation, and scalable database design.',
      'Own the full stack: frontend platform, backend services & APIs, authentication, cloud infrastructure, and CI/CD pipelines.',
      'Designing a shared component library and design system for consistent UX across web and mobile products.',
      'Shipping simultaneously across Supply Chain Infonomics (B2B forecasting) and the underlying multi-tenant SaaS infrastructure.'
    ]
  },
  {
    company: 'Medline Industries',
    role: 'Developer Analyst',
    duration: 'Jan 2022 – Jan 2026',
    logo: '/images/medline-logo.jpg',
    bullets: [
      'Leading development of Medline’s UI libraries (UiLine and React Component Library) for reusable enterprise components.',
      'Standardized UI/UX workflows by driving adoption of the internal UI Kit.',
      'Created accessible, responsive React components integrated with UiLine.',
      'Led a solo project using Angular and JavaScript to build engaging web tools.',
      'Implemented features using TypeScript, Ag-Grid, and deployed via Azure CI/CD.',
      'Enhanced usability with ARIA roles, keyboard navigation, and WCAG compliance.'
    ]
  },
  {
    company: 'Bank of America',
    role: 'UI/Web Developer',
    duration: 'Jun 2020 – Dec 2021',
    logo: '/images/bofa-logo.jpg',
    bullets: [
      'Built UI components using HTML5, CSS3, jQuery/JavaScript, and AngularJS.',
      'Executed SIT and UAT test cases with live data and wrote JUnit tests.',
      'Used Jasmine and Karma for unit testing and end-to-end UI testing.'
    ]
  },
  {
    company: 'Dun & Bradstreet',
    role: 'UI/Web Developer',
    duration: 'Jan 2019 – Jun 2020',
    logo: '/images/dnb-logo.webp',
    bullets: [
      'Upgraded AngularJS app to Angular 11 with improved data binding and SPA performance.',
      'Used Angular CLI, forms, services, and pipes to modernize components.'
    ]
  },
  {
    company: 'Anthem Inc.',
    role: 'UI/Front-End Developer',
    duration: 'Aug 2018 – Dec 2018',
    logo: '/images/anthem-logo.png',
    bullets: [
      'Built responsive SPAs with AngularJS, HTML5, SCSS, and JavaScript.',
      'Created custom directives and used $http service to bind APIs.'
    ]
  },
  {
    company: 'SQA Labs',
    role: 'UI Developer/UX Designer',
    duration: 'Apr 2018 – Dec 2018',
    logo: '/images/sqa-logo.webp',
    bullets: [
      'Designed prototypes using Axure, Photoshop, and Illustrator.',
      'Implemented production-ready UI using JavaScript, jQuery, HTML, and CSS.'
    ]
  },
  {
    company: 'Perseverance Softwares Pvt. Ltd',
    role: 'UI/UX Designer (Web Developer)',
    duration: 'Jan 2014 – Jan 2016',
    logo: '/images/perseverance-logo.jpeg',
    bullets: [
      'Built responsive websites using JavaScript, jQuery, PHP, HTML, and Bootstrap.',
      'Focused on customer engagement through clean UX and modular design.'
    ]
  }
]
export const certifications: Certifications[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    issued: 'August 5, 2023',
    credentialId: '6B3FD3000F1AB2DC',
    image: '/certificatesImgs/microsoft_logo.jpeg',
    link: 'https://learn.microsoft.com/en-us/users/manishkumar-5629/credentials/6b3fd3000f1ab2dc',
  },
  {
    title: 'Certified SAFe® 6 Practitioner',
    issuer: 'Scaled Agile, Inc.',
    issued: ' February 14, 2025',
    credentialId: '29980381-8179',
    image: '/certificatesImgs/certified-safe-6-badge.png',
    link: 'https://www.credly.com/badges/c26bc780-915a-4d13-b82e-370eecc1da20/linked_in_profile',
  },
  {
    title: 'Data Visualization and Dashboards with Excel and Cognos',
    issuer: 'IBM (via Coursera)',
    issued: 'June 29, 2026',
    credentialId: '4EJRYROPIZQ0',
    image: '/images/ibm-logo.jpeg',
    link: 'https://coursera.org/verify/4EJRYROPIZQ0',
  },
  {
    title: 'Improving Your Judgment for Better Decision-Making',
    issuer: 'LinkedIn Learning',
    issued: '',
    credentialId: '',
    image: '/linkedin.svg',
  },
  {
    title: 'HTML Essential Training',
    issuer: 'LinkedIn Learning',
    issued: '',
    credentialId: '',
    image: '/linkedin.svg',
  },
  {
    title: 'Excel Basics for Data Analysis',
    issuer: 'IBM (via Coursera)',
    issued: 'June 17, 2026',
    credentialId: '33WCPDON2282',
    image: '/images/ibm-logo.jpeg',
    link: 'https://coursera.org/verify/33WCPDON2282',
  },
  {
    title: 'Introduction to Data Analytics',
    issuer: 'IBM (via Coursera)',
    issued: 'June 11, 2026',
    credentialId: 'CMNOCP6M10W7',
    image: '/images/ibm-logo.jpeg',
    link: 'https://coursera.org/verify/CMNOCP6M10W7',
  },
  {
    title: 'Assessment for Data Analysis and Visualization Foundations',
    issuer: 'IBM (via Coursera)',
    issued: 'June 29, 2026',
    credentialId: 'Y8L1HGYCCSTI',
    image: '/images/ibm-logo.jpeg',
    link: 'https://coursera.org/verify/Y8L1HGYCCSTI',
  },
]
