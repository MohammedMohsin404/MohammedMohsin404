import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import { FaEye, FaRegListAlt, FaRegUser } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer } from "react-icons/md"
import {
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si"
import About from "./components/aboutPage/About"
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Works from "./components/worksPage/Works"
import {
  CertificationData,
  ClientData,
  ExperienceData,
  MenuData,
  PersonalInfo,
  ServiceData,
  SingleWorkData,
  SkillData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
  WorksConnectionData,
} from "./types"

export const personalInfo: PersonalInfo = {
  fullName: "Mohammed Mafiz Mohsin",
  headline:
    "Software & Technical Executive focused on web applications, APIs, databases, and technical operations.",
  roles: [
    "Software & Technical Executive",
    "Front-end Developer",
    "React.js Developer",
    "Technical Operations Support",
  ],
  email: "mohammedmohsin0725@gmail.com",
  phone: "+8801540118127",
  address: "Narayanganj, Dhaka, Bangladesh",
  residence: "Bangladesh",
  availability: "Open to remote work",
  githubUrl: "https://github.com/MohammedMohsin404",
  linkedInUrl: "https://www.linkedin.com/in/mohammed-mohsin404/",
  portfolioUrl: "https://mohammed-mohsin.vercel.app",
  cvUrl: "/files/Mohammed_Mafiz_Mohsin.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/212501288?v=4",
  summary:
    "Results-driven and adaptable professional with experience in technology, digital systems, and technical operations. Skilled in problem-solving, application development, database management, API integration, and modern digital tools. Quick learner with strong communication, teamwork, and analytical skills. Seeking opportunities in IT, technical support, business operations, and technology-related roles.",
}

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
]

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: personalInfo.githubUrl,
    info: "View my projects on GitHub",
  },
  {
    id: 2,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: personalInfo.linkedInUrl,
    info: "Connect with me on Linkedin",
  },
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Web applications",
    Icon: SiNextdotjs,
    description:
      "Responsive web applications and internal systems using React.js, Next.js, and Tailwind CSS.",
  },
  {
    id: 2,
    title: "API & databases",
    Icon: SiNodedotjs,
    description:
      "API integration, Node.js and Express.js work, MongoDB/MySQL data handling, and performance improvements.",
  },
  {
    id: 3,
    title: "Digital workflows",
    Icon: SiFirebase,
    description:
      "Technical operations support, troubleshooting, system maintenance, and digital workflow management.",
  },
  {
    id: 4,
    title: "UI delivery",
    Icon: SiFigma,
    description:
      "Clean interfaces, responsive layouts, reusable components, and user-centered frontend delivery.",
  },
]

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: personalInfo.linkedInUrl,
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: personalInfo.githubUrl,
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: personalInfo.portfolioUrl,
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: personalInfo.githubUrl,
    imgLocation: "/images/envato.png",
  },
]

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Clean software starts with clear thinking, useful structure, and a strong respect for the people using it.",
  userName: personalInfo.fullName,
  userProfession: "Software & Technical Executive",
  userImage: { url: personalInfo.avatarUrl },
}

export const resumeData: ExperienceData[] = [
  {
    id: "exp-sog",
    badge: "March 2025 - Present",
    desc:
      "Developed and maintained responsive web applications and internal systems; worked on frontend and backend functionality; managed APIs, databases, and application performance improvements; collaborated with team members using GitHub and Jira; supported technical operations, workflow management, troubleshooting, and system maintenance.",
    experience: true,
    subTitle: "Software & Technical Executive",
    title: "Shahida Obayed Group (SOG)",
    logo: { url: "/images/lin.png" },
  },
  {
    id: "edu-bsc",
    badge: "2025",
    desc: "Graduated: 2025",
    experience: false,
    subTitle: "Bachelor of Science in CSE",
    title: "Northern University Bangladesh",
    logo: { url: "/images/freelancer.png" },
  },
  {
    id: "edu-diploma",
    badge: "2021",
    desc: "Graduated: 2021",
    experience: false,
    subTitle: "Diploma in Engineering Computer Technology",
    title: "Munshiganj Polytechnic Institute",
    logo: { url: "/images/envato.png" },
  },
]

export const skillsData: SkillData[] = [
  {
    id: "skills-cv",
    knowledge: [
      "REST API",
      "API Integration",
      "Database Management",
      "SEO Basics",
      "Vercel Deployment",
      "Git & GitHub",
    ],
    backEnd: [
      { id: "be-node", field: "Node.js" },
      { id: "be-express", field: "Express.js" },
      { id: "be-mongodb", field: "MongoDB" },
      { id: "be-mysql", field: "MySQL" },
      { id: "be-firebase", field: "Firebase" },
      { id: "be-database", field: "Database Management" },
    ],
    frontEnd: [
      { id: "fe-javascript", field: "JavaScript" },
      { id: "fe-typescript", field: "TypeScript" },
      { id: "fe-react", field: "React.js" },
      { id: "fe-next", field: "Next.js" },
      { id: "fe-tailwind", field: "Tailwind CSS" },
      { id: "fe-responsive", field: "Responsive Web Design" },
    ],
    languages: [
      { id: "pro-problem", field: "Problem Solving" },
      { id: "pro-communication", field: "Communication Skills" },
      { id: "pro-team", field: "Team Collaboration" },
      { id: "pro-time", field: "Time Management" },
      { id: "pro-research", field: "Research & Analysis" },
      { id: "pro-docs", field: "Documentation" },
      { id: "pro-support", field: "Technical Support" },
      { id: "pro-coordination", field: "Project Coordination" },
      { id: "pro-learning", field: "Fast Learning Ability" },
      { id: "pro-ethics", field: "Professional Work Ethics" },
    ],
  },
]

export const certificationsData: CertificationData[] = [
  {
    id: "cert-jira",
    title: "Jira Fundamentals",
    issuer: "Atlassian",
  },
  {
    id: "cert-web",
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
  },
  {
    id: "cert-design",
    title: "Graphic Design Course",
    issuer: "NYDASA",
  },
]

export const fallbackWorkTabs = [
  { tab: "All" },
  { tab: "Next.js" },
  { tab: "React.js" },
  { tab: "TypeScript" },
  { tab: "Dashboard" },
  { tab: "AI" },
]

export const fallbackSingleWorks: SingleWorkData[] = [
  {
    id: "work-freelancers-dashboard",
    title: "Freelancers Dashboard",
    description:
      "Responsive dashboard application for freelancers to manage projects and workflows efficiently.",
    workUrl: "https://freelancers-dashboard.vercel.app",
    githubUrl: "https://github.com/MohammedMohsin404/Freelancers-Dashboard",
    clientName: "Personal Project",
    ownerName: personalInfo.fullName,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    userActions: [
      "Responsive Dashboard",
      "Clean User Interface",
      "Dynamic Components",
      "Fast Performance",
    ],
    images: [
      {
        url: "/images/projects/freelancers-dashboard.png",
      },
    ],
    date: new Date("2025-08-16"),
  },
  {
    id: "work-ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "AI-based web application that analyzes resumes and provides smart improvement suggestions.",
    workUrl: "",
    githubUrl: "https://github.com/MohammedMohsin404/AI-Resume-Analyzer",
    clientName: "Personal Project",
    ownerName: personalInfo.fullName,
    techStack: ["React.js", "TypeScript", "Tailwind CSS"],
    userActions: [
      "Resume Analysis System",
      "AI-Based Suggestions",
      "File Processing Features",
      "Interactive User Interface",
      "Responsive Design",
    ],
    images: [
      {
        url: "/images/projects/ai-resume-analyzer.svg",
      },
    ],
    date: new Date("2025-12-10"),
  },
]

export const fallbackWorksConnection: WorksConnectionData = {
  edges: [
    {
      node: {
        id: "work-freelancers-dashboard",
        title: "Freelancers Dashboard",
        images: fallbackSingleWorks[0].images,
        workTabs: [
          { tab: "All" },
          { tab: "Next.js" },
          { tab: "TypeScript" },
          { tab: "Dashboard" },
        ],
      },
    },
    {
      node: {
        id: "work-ai-resume-analyzer",
        title: "AI Resume Analyzer",
        images: fallbackSingleWorks[1].images,
        workTabs: [
          { tab: "All" },
          { tab: "React.js" },
          { tab: "TypeScript" },
          { tab: "AI" },
        ],
      },
    },
  ],
  pageInfo: {
    hasNextPage: false,
    endCursor: "",
  },
}

export const statisticsData: StatisticsData[] = [
  {
    title: "public repos",
    info: 15,
    externalLink: personalInfo.githubUrl,
  },
  {
    title: "current role",
    info: "Software & Technical Executive",
  },
  {
    title: "portfolio",
    info: "Vercel",
    externalLink: personalInfo.portfolioUrl,
  },
]
