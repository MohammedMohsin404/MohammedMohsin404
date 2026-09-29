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
    "Senior Web Developer & SEO Specialist | WordPress, Performance & Digital Infrastructure",
  roles: [
    "Senior Web Developer",
    "Technical SEO & Web Performance Specialist",
    "WordPress & WooCommerce Expert",
    "Digital Infrastructure & Cloudflare CDN",
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
    "Senior web developer and SEO specialist with 9+ years of experience delivering high-performance WordPress websites, managing web infrastructure, and driving organic growth for healthcare and enterprise clients. Currently supporting Bangkok Hospital's international website and partner sites across web development, technical SEO, Core Web Vitals optimization, Cloudflare CDN management, security hardening, and campaign delivery. Experienced in coordinating with global stakeholders across Asia, Middle East, Europe, and North America.",
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
    title: "WordPress Development",
    Icon: SiWordpress,
    description:
      "High-performance WordPress websites with Elementor, WPBakery, and WooCommerce. Responsive design, custom themes, conversion-focused landing pages, and healthcare/enterprise solutions.",
  },
  {
    id: 2,
    title: "Technical SEO",
    Icon: SiGoogleanalytics,
    description:
      "End-to-end technical SEO including metadata optimization, schema markup, XML sitemaps, redirects, Google Search Console, GA4 setup, and keyword-driven content strategy.",
  },
  {
    id: 3,
    title: "Web Performance & CDN",
    Icon: SiCloudflare,
    description:
      "Core Web Vitals optimization, Cloudflare CDN configuration, caching strategies, image optimization, script tuning, and server-side performance improvements.",
  },
  {
    id: 4,
    title: "Web Infrastructure & Security",
    Icon: SiShopify,
    description:
      "Complete hosting management with cPanel/WHM, DNS configuration, SSL certificates, security hardening, malware monitoring, automated backups, and uptime optimization.",
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
    "Exceptional digital platforms combine robust infrastructure, lightning-fast performance, high search visibility, and seamless user experiences to drive measurable business growth.",
  userName: personalInfo.fullName,
  userProfession: "Senior Web Developer & Technical SEO Specialist",
  userImage: { url: personalInfo.avatarUrl },
}

export const resumeData: ExperienceData[] = [
  {
    id: "exp-bangkok-hospital",
    badge: "July 2022 - Present",
    desc:
      "Lead web development, technical SEO, and digital infrastructure for Bangkok Hospital's international website and partner sites. Manage WordPress/Elementor development, Core Web Vitals optimization, Cloudflare CDN configuration, cPanel/WHM hosting, DNS/SSL management, security hardening, and performance monitoring. Coordinate web support and campaign delivery for international stakeholders across Asia, Middle East, Europe, North America, and Australia.",
    experience: true,
    subTitle: "Senior Web Developer & SEO Specialist",
    title: "Bangkok Hospital",
    logo: { url: "/images/lin.png" },
  },
  {
    id: "exp-freelance",
    badge: "2017 - 2022",
    desc:
      "Delivered 50+ WordPress, WooCommerce, Shopify, LMS, and corporate websites for healthcare, education, real estate, recruitment, and technology clients globally. Provided end-to-end solutions including hosting setup, technical SEO, Google/Meta advertising, performance optimization, and ongoing maintenance. Served clients across Asia, Middle East, Europe, and North America.",
    experience: true,
    subTitle: "Web Developer & Digital Marketing Specialist",
    title: "Freelance / Remote Consultant",
    logo: { url: "/images/freelancer.png" },
  },
  {
    id: "edu-bsc",
    badge: "2016 - 2020",
    desc: "Bachelor of Science in Computer Science with focus on software development and web technologies.",
    experience: false,
    subTitle: "BSc in Computer Science",
    title: "Daffodil International University",
    logo: { url: "/images/freelancer.png" },
  },
  {
    id: "edu-hsc",
    badge: "2011 - 2013",
    desc: "Higher Secondary Certificate in Science.",
    experience: false,
    subTitle: "Higher Secondary Education (Science)",
    title: "Uttara High School & College",
    logo: { url: "/images/envato.png" },
  },
]

export const skillsData: SkillData[] = [
  {
    id: "skills-cv",
    knowledge: [
      "WordPress & Elementor Development",
      "Technical SEO & Core Web Vitals",
      "Google Search Console & GA4 Analytics",
      "Cloudflare CDN & Performance Optimization",
      "cPanel/WHM Hosting Management",
      "DNS Configuration & SSL Management",
      "Security & Malware Monitoring",
      "Git & GitHub Workflow",
      "WooCommerce & Shopify E-commerce",
    ],
    backEnd: [
      { id: "be-cpanel", field: "cPanel & WHM" },
      { id: "be-dns", field: "DNS, Domains & Email" },
      { id: "be-ssl", field: "SSL Certificates & Security" },
      { id: "be-cloudflare", field: "Cloudflare CDN" },
      { id: "be-security", field: "Backups & Malware Monitoring" },
      { id: "be-server", field: "Server Configuration" },
    ],
    frontEnd: [
      { id: "fe-wordpress", field: "WordPress" },
      { id: "fe-elementor", field: "Elementor & WPBakery" },
      { id: "fe-woo", field: "WooCommerce" },
      { id: "fe-shopify", field: "Shopify" },
      { id: "fe-bootstrap", field: "CSS, JavaScript & Responsive" },
      { id: "fe-uiux", field: "UI/UX & Conversion Design" },
    ],
    languages: [
      { id: "pro-bangla", field: "Bangla (Native)" },
      { id: "pro-english", field: "English (Professional)" },
      { id: "pro-hindi", field: "Hindi/Urdu (Conversational)" },
      { id: "pro-arabic", field: "Arabic (Basic)" },
      { id: "pro-thai", field: "Thai (Basic)" },
    ],
  },
]

export const certificationsData: CertificationData[] = [
  {
    id: "cert-next-react",
    title: "Next.js & React.js - Advanced Web Development",
    issuer: "Professional Training",
  },
  {
    id: "cert-digital-marketing",
    title: "Digital Marketing Specialist - SEO, Google Ads, Social Media",
    issuer: "Professional Certification",
  },
  {
    id: "cert-wordpress",
    title: "WordPress Development & Freelancing Business",
    issuer: "Professional Certification",
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
      "Senior-level web development and SEO support for Bangkok Hospital's international website and partner sites. Delivering high-performance healthcare platforms with strict uptime, security, and compliance requirements.",
    workUrl: "",
    githubUrl: "",
    clientName: "Bangkok Hospital (Thailand)",
    ownerName: personalInfo.fullName,
    techStack: ["WordPress", "Elementor", "WPBakery", "Cloudflare", "Technical SEO", "Core Web Vitals"],
    userActions: [
      "Developed and maintained international healthcare website with 24/7 uptime",
      "Optimized Core Web Vitals for improved user experience and SEO rankings",
      "Implemented technical SEO: schema markup, XML sitemaps, 301 redirects",
      "Managed Cloudflare CDN, caching strategies, and performance monitoring",
      "Configured cPanel/WHM, DNS, SSL certificates, and security hardening",
      "Created campaign landing pages for international patient outreach",
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
    title: "Siam Smile Clinic & Hatyai International Dental Center",
    description:
      "Comprehensive WordPress websites for healthcare clients featuring multilingual support, technical SEO, patient conversion optimization, and performance-first architecture.",
    workUrl: "",
    githubUrl: "",
    clientName: "Healthcare Clients (Thailand)",
    ownerName: personalInfo.fullName,
    techStack: ["WordPress", "Elementor", "Cloudflare", "Multilingual WPML", "SEO"],
    userActions: [
      "Designed multilingual healthcare website structure for Thai and English audiences",
      "Optimized for Google indexing with technical SEO and structured data",
      "Implemented caching, CDN, and image optimization for 90+ PageSpeed scores",
      "Configured SSL, automated backups, and security monitoring",
      "Delivered responsive designs for patient-focused booking flows",
    ],
    images: [
      {
        url: "/images/p-2.jpg",
      },
    ],
    date: new Date("2020-01-01"),
  },
  {
    id: "work-ecommerce-platforms",
    title: "WooCommerce & Shopify E-commerce Solutions",
    description:
      "End-to-end e-commerce development for healthcare, education, and retail clients including payment integration, inventory management, and conversion-optimized checkout.",
    workUrl: "",
    githubUrl: "",
    clientName: "E-commerce Clients (Global)",
    ownerName: personalInfo.fullName,
    techStack: ["WooCommerce", "Shopify", "Stripe", "PayPal", "MySQL"],
    userActions: [
      "Built WooCommerce stores with product catalog, payment, shipping, and tax",
      "Developed Shopify stores with custom themes and app integrations",
      "Integrated Stripe, PayPal, and payment gateway configurations",
      "Implemented inventory management and order tracking systems",
      "Created customer account portals and order history features",
    ],
    images: [
      {
        url: "/images/avocado.jpg",
      },
    ],
    date: new Date("2019-01-01"),
  },
  {
    id: "work-learning-platforms",
    title: "LMS & SaaS Learning Platforms",
    description:
      "Custom Learning Management Systems and SaaS platforms with course management, student tracking, and certification systems for education clients.",
    workUrl: "",
    githubUrl: "",
    clientName: "Education Clients (Asia, Middle East)",
    ownerName: personalInfo.fullName,
    techStack: ["WordPress", "LMS Plugins", "PHP", "MySQL"],
    userActions: [
      "Developed custom LMS with course creation, registration, and student areas",
      "Implemented certification and quiz systems for completed courses",
      "Built user role management and dashboard reporting",
      "Configured email notifications and enrollment workflows",
      "Delivered responsive design for mobile and desktop learning",
    ],
    images: [
      {
        url: "/images/pic4.png",
      },
    ],
    date: new Date("2018-01-01"),
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
        title: "Siam Smile Clinic & Hatyai International Dental Center",
        images: fallbackSingleWorks[1].images,
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
        id: "work-ecommerce-platforms",
        title: "WooCommerce & Shopify E-commerce Solutions",
        images: fallbackSingleWorks[2].images,
        workTabs: [
          { tab: "All" },
          { tab: "WordPress" },
          { tab: "E-commerce" },
          { tab: "SEO" },
        ],
      },
    },
    {
      node: {
        id: "work-learning-platforms",
        title: "LMS & SaaS Learning Platforms",
        images: fallbackSingleWorks[3].images,
        workTabs: [
          { tab: "All" },
          { tab: "WordPress" },
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
