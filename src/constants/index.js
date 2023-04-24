import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  crescendo,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  modyo,
  credifamilia,
  ebs,
  java,
  kpi,
  smartlynx,
  leandro,
  ecolsi
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
    testimonial: 'Excelente persona, recomiendo contratarlo. Nos ha ayudado en problemas que no conocía pero con buen desempeño',
    name: 'Luis Leandro',
    designation: 'CEO',
    company: 'SmartLynx',
    image: leandro,
  },
  {
    testimonial: "Excelente persona, es una de las personas más eficientes y dedicadas que he conocido. Si tienen un proyecto no duden en contratarlo, siempre está atento y tiene mucho conocimiento en angular",
    name: 'Luis Leandro',
    designation: 'CEO',
    company: 'SmartLynx',
    image: leandro,
  },
  {
    testimonial: "Un profesional excepcional, trabaja rápido, comprende las necesidades con facilidad y cuenta con alta disponibilidad",
    name: 'Rafael Ecolsi',
    designation: 'Software Developer',
    company: 'Ecolsi',
    image: ecolsi,
  },
];

const projects = [
  {
    name: 'Crescendo',
    description:
      'The web application allows SEFAZ users to manage their users, creating follow-up assessments, process flows using organizational charts, flowcharts, and reports - all in a 100% dynamic way.',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'primeNg',
        color: 'pink-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient',
      },
    ],
    image: crescendo,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'SmartLynx',
    description:
      'Web application that allows users to write, customize and download different CV, maintaining a subscription paid by Paypal or credit cards',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'Node',
        color: 'pink-text-gradient',
      },
      {
        name: 'Mongo',
        color: 'green-text-gradient',
      },
    ],
    image: smartlynx,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Dashboard KPI',
    description:
      'Web application that allows the user to upload Excel files with different information to generate many indicators. The application saves and generates KPIs on all previously uploaded information. Show tables, charts and comparation about specific ranges',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'Php',
        color: 'pink-text-gradient',
      },
    ],
    image: kpi,
    source_code_link: 'https://github.com/',
  },
];

export { basicInformation, services, technologies, experiences, testimonials, projects };
