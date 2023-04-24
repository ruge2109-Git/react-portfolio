import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  modyo,
  credifamilia,
  ebs,
  java,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const basicInformation = {
  title: `Hi, I'm `,
  name: 'Jonathan',
  email: 'jonathan.ruge.77@gmail.com',
  subText1: `I specialize in developing efficient `,
  subText2: `and innovative software solutions.`,
  description: `Specializing in the development and maintenance of web applications utilizing Angular, Java, React.js, and related technologies. Collaborating with cross-functional teams, including designers, product managers, and developers, to deliver high-quality products. Implementing responsive design and ensuring compatibility across multiple browsers. Actively participating in code reviews and providing constructive feedback to fellow developers.`,
};

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Enginner',
    company_name: 'Modyo',
    icon: modyo,
    iconBg: '#383E56',
    date: 'Sep 2022 - Present',
    points: [
      'Collaborated in developing new functionalities for BCI - Miami',
      `Developed projects for banking clients, integrating features with hexagonal architecture and different entities.`,
      `Modeled the CFG-CA backend with hexagonal architecture, unit tests, database management, and endpoints for the frontend.`,
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Backend Developer',
    company_name: 'Credifamilia C.F',
    icon: credifamilia,
    iconBg: '#E6DEDD',
    date: 'Feb 2021 - Aug 2022',
    points: [
      'Developed a solution using Angular, Spring Boot, and PLSQL that increased company funding.',
      'Reduced daily information migration time from 5 hours to 30 minutes using Spring Boot.',
      `Improved user experience on the company's main portal, increasing customer satisfaction.`,
      'Avoided monetary penalties for the company with software created using Spring Boot and Angular.',
      'Optimized report generation using Excel and VBFA to improve efficiency and accuracy.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Enterprise Business Solutions EBS SAS',
    icon: ebs,
    iconBg: '#383E56',
    date: 'Dec 2019 - Feb 2021',
    points: [
      'Increased sales by 40% through Java and Angular applications developed with my team.',
      'Improved software development performance by 30% using agile methodologies like Scrum.',
      'Migrated obsolete company applications to a more stable tech stack using microservices in Java and Angular.',
      'Reduced task review time with an interim application designed and developed in Angular and Java.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { basicInformation, services, technologies, experiences, testimonials, projects };
