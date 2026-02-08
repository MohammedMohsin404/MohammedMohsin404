import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdComputer, MdDashboard } from 'react-icons/md';
import {
  SiFigma,
  SiFirebase,
  SiFiverr,
  SiNextdotjs,
  SiNodedotjs,
} from 'react-icons/si';
import About from './components/aboutPage/About';
import Blogs from './components/blogsPage/Blogs';
import DevBlogs from './components/blogsPage/DevBlogs';
import Contact from './components/contactPage/Contact';
import GuestBook from './components/guestbookPage/GuestBook';
import Resume from './components/resumePage/Resume';
import Stats from './components/statistics/Stats';
import Works from './components/worksPage/Works';
import {
  ClientData,
  ExperienceData,
  MenuData,
  ServiceData,
  SkillData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from './types';

export const menus: MenuData[] = [
  {
    id: 1,
    label: 'about',
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: 'resume',
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: 'works',
    Icon: FaEye,
    Component: Works,
  },
  // {
  //   id: 4,
  //   label: 'blog',
  //   Icon: FaRegNewspaper,
  //   Component: DevBlogs,
  // },
  // {
  //   id: 5,
  //   label: 'stats',
  //   Icon: MdDashboard,
  //   Component: Stats,
  // },
  {
    id: 6,
    label: 'contact',
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: 'guest book',
    Icon: MdComputer,
    Component: GuestBook,
  },
];

export const socialMedia: SocialMedia[] = [
  // {
  //   id: 1,
  //   Icon: FaDev,
  //   label: 'Dev',
  //   logoColor: 'black',
  //   mediaUrl: 'https://www.dev.to/arafat4693',
  //   info: 'Follow me and read my articles on Dev.to',
  // },
  // {
  //   id: 2,
  //   Icon: FaFacebookF,
  //   label: 'Facebook',
  //   logoColor: '#3b5998',
  //   mediaUrl: 'https://www.facebook.com/md.sunny.58910049',
  //   info: 'Follow me on Facebook',
  // },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: 'Github',
    logoColor: '#171515',
    mediaUrl: 'https://github.com/MohammedMohsin404',
    info: 'Star my projects on Github',
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: 'Linkedin',
    logoColor: '#0072b1',
    mediaUrl: 'https://www.linkedin.com/in/mohammed-mohsin-059a67350',
    info: "Let's connect on Linkedin",
  },
  // {
  //   id: 5,
  //   Icon: FaDiscord,
  //   label: 'Discord',
  //   logoColor: '#5865f2',
  //   mediaUrl: 'https://www.discord.com',
  //   info: "Let's chat on Discord. My username - Tyrant#4185",
  // },
  // {
  //   id: 6,
  //   Icon: SiFiverr,
  //   label: 'Fiverr',
  //   logoColor: '#00b22d',
  //   mediaUrl: 'https://www.fiverr.com/sunnyislam990',
  //   info: 'Hire me on fiverr as freelancer',
  // },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: 'Front-end',
    Icon: SiNextdotjs,
    description:
      'Modern and mobile-ready website that will help you reach all of your marketing.',
  },
  {
    id: 2,
    title: 'Back-end',
    Icon: SiNodedotjs,
    description:
      'Backend services using Java, Node.js, and .NET, with AWS integration',
  },
  {
    id: 3,
    title: 'UI/UX design',
    Icon: SiFigma,
    description:
      'Modern user Interface trends with a highly professional and unique design.',
  },
  {
    id: 4,
    title: 'DevOps',
    Icon: SiFirebase,
    description:
      'Streamlined CI/CD with Docker and AWS, ensuring consistent environments across development, staging, and production.',
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: 'https://www.linkedin.com/',
    imgLocation: '/images/lin.png',
  },
  {
    id: 2,
    linkLocation: 'https://www.freelancer.com/',
    imgLocation: '/images/freelancer.png',
  },
  {
    id: 3,
    linkLocation: 'https://www.upwork.com/',
    imgLocation: '/images/upwork.png',
  },
  {
    id: 4,
    linkLocation: 'https://www.envato.com/',
    imgLocation: '/images/envato.png',
  },
];

export const quoteData: TestimonialData = {
  id: 'quote',
  quote:
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  userName: 'Martin Fowler',
  userProfession: 'Software Developer',
  userImage: { url: '/images/martin.jpg' },
};

export const resumeData: ExperienceData[] = [
  {
    id: 'exp-1',
    badge: '2022 - Present',
    desc:
      'Building responsive web applications, collaborating with product teams, and delivering user-focused UI experiences.',
    experience: true,
    subTitle: 'Frontend Developer',
    title: 'Web Studio',
    logo: { url: '/images/lin.png' },
  },
  {
    id: 'exp-2',
    badge: '2020 - 2022',
    desc:
      'Implemented APIs and optimized performance for scalable web platforms across multiple client projects.',
    experience: true,
    subTitle: 'Full Stack Developer',
    title: 'Tech Solutions',
    logo: { url: '/images/upwork.png' },
  },
  {
    id: 'edu-1',
    badge: '2016 - 2020',
    desc:
      'Focused on software engineering fundamentals, data structures, and web technologies.',
    experience: false,
    subTitle: 'B.Sc. in Computer Science',
    title: 'National University',
    logo: { url: '/images/freelancer.png' },
  },
  {
    id: 'edu-2',
    badge: '2014 - 2016',
    desc:
      'Completed foundational studies in mathematics and computer fundamentals.',
    experience: false,
    subTitle: 'Higher Secondary Certificate',
    title: 'City College',
    logo: { url: '/images/envato.png' },
  },
];

export const skillsData: SkillData[] = [
  {
    id: 'skills-1',
    knowledge: [
      'Design Systems',
      'RESTful APIs',
      'GraphQL',
      'CI/CD Pipelines',
      'Accessibility',
      'Agile Delivery',
    ],
    backEnd: [
      { id: 'be-1', field: 'Node.js', value: '85' },
      { id: 'be-2', field: 'Java', value: '75' },
      { id: 'be-3', field: '.NET', value: '70' },
      { id: 'be-4', field: 'PostgreSQL', value: '80' },
    ],
    frontEnd: [
      { id: 'fe-1', field: 'React', value: '90' },
      { id: 'fe-2', field: 'Next.js', value: '88' },
      { id: 'fe-3', field: 'TypeScript', value: '85' },
      { id: 'fe-4', field: 'Tailwind CSS', value: '82' },
    ],
    languages: [
      { id: 'lang-1', field: 'English', value: '90' },
      { id: 'lang-2', field: 'Urdu', value: '100' },
      { id: 'lang-3', field: 'Hindi', value: '80' },
      { id: 'lang-4', field: 'Arabic', value: '60' },
    ],
  },
];

export const statisticsData: StatisticsData[] = [
  {
    title: 'stack',
    info: 'MERN or T3',
  },
  {
    title: 'projects',
    info: '70+',
  },
  {
    title: 'clients',
    info: '40+',
  },
];
