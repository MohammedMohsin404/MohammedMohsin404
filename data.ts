import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import { FaEye, FaRegListAlt, FaRegUser } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer } from "react-icons/md"
import {
  SiCloudflare,
  SiGoogleanalytics,
  SiShopify,
  SiWordpress,
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
    "Senior Web Developer | WordPress & Digital Marketing Specialist",
  roles: [
    "Senior Web Developer",
    "WordPress & WooCommerce Specialist",
    "Technical SEO Specialist",
    "Web Performance & Infrastructure",
  ],
  email: "mohammed.mafiz@gmail.com",
  phone: "+66 95 161 5070",
  address: "Bangkok, Thailand",
  residence: "Thailand",
  availability: "Full-time, remote & freelance",
  githubUrl: "https://github.com/MohammedMohsin404",
  linkedInUrl: "https://www.linkedin.com/in/mohammed-mohsin404/",
  portfolioUrl: "https://mohammed-mohsin.vercel.app",
  cvUrl: "/files/Mohammed_Mafiz_Mohsin_Bangkok_Hospital_Web_SEO_CV_2026.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/212501288?v=4",
  summary:
    "Senior web developer and digital marketing specialist with 9+ years of experience building high-performance WordPress websites, managing web infrastructure, improving SEO visibility, and delivering secure, scalable digital platforms. I support Bangkok Hospital's international website and partner sites across web development, technical SEO, performance, security, and campaign delivery.",
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
    title: "WordPress development",
    Icon: SiWordpress,
    description:
      "High-performance WordPress websites with Elementor, WPBakery, WooCommerce, responsive design, and conversion-focused landing pages.",
  },
  {
    id: 2,
    title: "Technical SEO",
    Icon: SiGoogleanalytics,
    description:
      "Technical SEO, metadata, schema markup, sitemaps, redirects, Google Search Console, GA4, and keyword-led content improvements.",
  },
  {
    id: 3,
    title: "Performance & CDN",
    Icon: SiCloudflare,
    description:
      "Core Web Vitals improvements through caching, Cloudflare CDN, image optimization, script tuning, and server configuration.",
  },
  {
    id: 4,
    title: "E-commerce & hosting",
    Icon: SiShopify,
    description:
      "WooCommerce and Shopify stores plus cPanel/WHM, DNS, SSL, backups, firewall monitoring, and site maintenance.",
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
    "The best websites unite clear information, dependable infrastructure, strong search visibility, and an effortless user experience.",
  userName: personalInfo.fullName,
  userProfession: "Senior Web Developer & Digital Marketing Specialist",
  userImage: { url: personalInfo.avatarUrl },
}

export const resumeData: ExperienceData[] = [
  {
    id: "exp-bangkok-hospital",
    badge: "July 2022 - Present",
    desc:
      "Develop and maintain Bangkok Hospital's public international website and partner sites. Lead WordPress, Elementor, WPBakery, WooCommerce, technical SEO, Core Web Vitals, Cloudflare/CDN, cPanel/WHM, DNS, SSL, security, backups, campaign landing pages, and performance reporting. Coordinate web support across Asia, the Middle East, Europe, North America, and Australia.",
    experience: true,
    subTitle: "Senior Web Developer & Digital Marketing Specialist",
    title: "Bangkok Hospital",
    logo: { url: "/images/lin.png" },
  },
  {
    id: "exp-freelance",
    badge: "2017 - 2022",
    desc:
      "Delivered WordPress, WooCommerce, Shopify, LMS, SaaS, corporate, and e-commerce websites for healthcare, education, real estate, recruitment, and technology clients. Managed hosting, SEO, Google and Meta campaigns, web performance, security, and end-to-end website delivery for projects across Asia, the Middle East, Europe, North America, and Australia.",
    experience: true,
    subTitle: "Web Developer & Digital Marketing Specialist",
    title: "Freelancer / Remote",
    logo: { url: "/images/freelancer.png" },
  },
  {
    id: "edu-bsc",
    badge: "2016 - 2020",
    desc: "Bachelor of Science in Computer Science.",
    experience: false,
    subTitle: "Bachelor of Science in Computer Science",
    title: "Daffodil International University",
    logo: { url: "/images/freelancer.png" },
  },
  {
    id: "edu-hsc",
    badge: "2011 - 2013",
    desc: "Higher Secondary Certificate.",
    experience: false,
    subTitle: "Higher Secondary Education",
    title: "Uttara High School & College",
    logo: { url: "/images/envato.png" },
  },
]

export const skillsData: SkillData[] = [
  {
    id: "skills-cv",
    knowledge: [
      "WordPress & Elementor",
      "Technical SEO",
      "Core Web Vitals",
      "Google Search Console & GA4",
      "Cloudflare & CDN",
      "cPanel/WHM, DNS & SSL",
      "Git & GitHub",
    ],
    backEnd: [
      { id: "be-cpanel", field: "cPanel & WHM" },
      { id: "be-dns", field: "DNS, Domains & Email" },
      { id: "be-ssl", field: "SSL & Access Control" },
      { id: "be-cloudflare", field: "Cloudflare & CDN" },
      { id: "be-security", field: "Backups & Malware Monitoring" },
      { id: "be-server", field: "Hosting & Server Configuration" },
    ],
    frontEnd: [
      { id: "fe-wordpress", field: "WordPress" },
      { id: "fe-elementor", field: "Elementor & WPBakery" },
      { id: "fe-woo", field: "WooCommerce" },
      { id: "fe-shopify", field: "Shopify" },
      { id: "fe-bootstrap", field: "Bootstrap, CSS & JavaScript" },
      { id: "fe-uiux", field: "Responsive Web Design & UI/UX" },
    ],
    languages: [
      { id: "pro-bangla", field: "Bangla (Native)" },
      { id: "pro-english", field: "English (Professional)" },
      { id: "pro-hindi", field: "Hindi/Urdu (Conversational)" },
      { id: "pro-arabic", field: "Arabic (Basic)" },
      { id: "pro-thai", field: "Thai (Basic)" },
      { id: "pro-global", field: "Global Stakeholder Coordination" },
    ],
  },
]

export const certificationsData: CertificationData[] = [
  {
    id: "cert-next-react",
    title: "Next JS and React JS",
    issuer: "Training",
  },
  {
    id: "cert-digital-marketing",
    title: "Digital Marketing (SEO, Social Media, Google Ads)",
    issuer: "Professional Training",
  },
  {
    id: "cert-wordpress",
    title: "WordPress Development and Freelancing",
    issuer: "Professional Training",
  },
]

export const fallbackWorkTabs = [
  { tab: "All" },
  { tab: "Healthcare" },
  { tab: "WordPress" },
  { tab: "SEO" },
  { tab: "Performance" },
  { tab: "E-commerce" },
]

export const fallbackSingleWorks: SingleWorkData[] = [
  {
    id: "work-bangkok-hospital",
    title: "Bangkok Hospital International Website",
    description:
      "Ongoing web development, technical SEO, Core Web Vitals, Cloudflare/CDN, security, and campaign support for Bangkok Hospital's international website and partner sites.",
    workUrl: "",
    githubUrl: "",
    clientName: "Bangkok Hospital",
    ownerName: personalInfo.fullName,
    techStack: ["WordPress", "Elementor", "WPBakery", "Cloudflare", "Technical SEO"],
    userActions: [
      "International healthcare website support",
      "Core Web Vitals and speed optimization",
      "Schema, metadata, sitemaps, and redirects",
      "Secure hosting, CDN, and performance monitoring",
    ],
    images: [
      {
        url: "/images/pic4.png",
      },
    ],
    date: new Date("2022-07-01"),
  },
  {
    id: "work-healthcare-websites",
    title: "Healthcare & Clinic Websites",
    description:
      "WordPress healthcare websites for Siam Smile Clinic and Hatyai International Dental Center, including multilingual service structures, technical SEO, patient landing pages, performance optimization, security, and maintenance.",
    workUrl: "",
    githubUrl: "https://github.com/MohammedMohsin404/AI-Resume-Analyzer",
    clientName: "Healthcare clients",
    ownerName: personalInfo.fullName,
    techStack: ["WordPress", "Elementor", "Cloudflare", "SEO", "Multilingual Content"],
    userActions: [
      "Healthcare content and service-page structure",
      "Technical SEO and Google indexing",
      "Caching, CDN, and image optimization",
      "Security, backups, and ongoing maintenance",
    ],
    images: [
      {
        url: "/images/p-2.jpg",
      },
    ],
    date: new Date("2020-01-01"),
  },
  {
    id: "work-global-digital-platforms",
    title: "Global Digital Platforms",
    description:
      "Freelance WordPress, WooCommerce, Shopify, LMS, SaaS, corporate, and e-commerce projects delivered for clients in healthcare, education, real estate, recruitment, and technology.",
    workUrl: "",
    githubUrl: "",
    clientName: "Freelance / Remote",
    ownerName: personalInfo.fullName,
    techStack: ["WordPress", "WooCommerce", "Shopify", "LMS", "SEO", "Web Performance"],
    userActions: [
      "E-commerce catalog, payment, shipping, and checkout delivery",
      "Learning platforms with courses, registrations, and student areas",
      "Hosting, domains, SSL, CDN, and security management",
      "SEO strategy, content optimization, and reporting",
    ],
    images: [
      {
        url: "/images/avocado.jpg",
      },
    ],
    date: new Date("2017-01-01"),
  },
]

export const fallbackWorksConnection: WorksConnectionData = {
  edges: [
    {
      node: {
        id: "work-bangkok-hospital",
        title: "Bangkok Hospital International Website",
        images: fallbackSingleWorks[0].images,
        workTabs: [
          { tab: "All" },
          { tab: "Healthcare" },
          { tab: "WordPress" },
          { tab: "SEO" },
          { tab: "Performance" },
        ],
      },
    },
    {
      node: {
        id: "work-healthcare-websites",
        title: "Healthcare & Clinic Websites",
        images: fallbackSingleWorks[1].images,
        workTabs: [
          { tab: "All" },
          { tab: "Healthcare" },
          { tab: "WordPress" },
          { tab: "SEO" },
        ],
      },
    },
    {
      node: {
        id: "work-global-digital-platforms",
        title: "Global Digital Platforms",
        images: fallbackSingleWorks[2].images,
        workTabs: [
          { tab: "All" },
          { tab: "WordPress" },
          { tab: "E-commerce" },
          { tab: "SEO" },
          { tab: "Performance" },
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
    title: "years experience",
    info: "9+",
  },
  {
    title: "current role",
    info: "Senior Web Developer",
  },
  {
    title: "portfolio",
    info: "Global remote",
    externalLink: personalInfo.portfolioUrl,
  },
]
