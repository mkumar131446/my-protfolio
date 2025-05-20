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
  role: string
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

export const projects: Project[] = [
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
    company: 'Medline Industries',
    role: 'UI/Web Developer',
    duration: 'Feb 2022 – Present',
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
    image: '/public/certificatesImgs/microsoft_logo.jpeg',
    link: 'https://learn.microsoft.com/en-us/users/manishkumar-5629/credentials/6b3fd3000f1ab2dc',
  },
  {
    title: 'Certified SAFe® 6 Practitioner',
    issuer: 'Scaled Agile, Inc.',
    issued: ' February 14, 2025',
    credentialId: '29980381-8179',
    image: '/public/certificatesImgs/certified-safe-6-badge.png',
    link: 'https://www.credly.com/badges/c26bc780-915a-4d13-b82e-370eecc1da20/linked_in_profile',
  },
]
