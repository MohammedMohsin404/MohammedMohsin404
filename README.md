# Mohammed Mafiz Mohsin Portfolio

Professional portfolio website for **Mohammed Mafiz Mohsin**, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Apollo GraphQL**. The site can load content from Hygraph, and it also includes a CV-based structured fallback data layer so the portfolio still renders accurately without CMS credentials.

## Profile

| Field | Details |
| --- | --- |
| Name | Mohammed Mafiz Mohsin |
| Role | Software & Technical Executive |
| Location | Narayanganj, Dhaka, Bangladesh |
| Email | mohammedmohsin0725@gmail.com |
| Phone | +8801540118127 |
| LinkedIn | https://www.linkedin.com/in/mohammed-mohsin404/ |
| GitHub | https://github.com/MohammedMohsin404 |
| Portfolio | https://mohammed-mohsin.vercel.app |
| CV | `public/files/Mohammed_Mafiz_Mohsin.pdf` |

## Professional Summary

Results-driven and adaptable professional with experience in technology, digital systems, and technical operations. Skilled in problem-solving, application development, database management, API integration, and modern digital tools. Quick learner with strong communication, teamwork, and analytical skills. Seeking opportunities in IT, technical support, business operations, and technology-related roles.

## Experience

**Software & Technical Executive**  
**Shahida Obayed Group (SOG)** | March 2025 - Present

- Developed and maintained responsive web applications and internal systems.
- Worked on frontend and backend functionalities for business solutions.
- Managed APIs, databases, and application performance improvements.
- Collaborated with team members using GitHub and Jira.
- Supported technical operations and digital workflow management.
- Assisted in troubleshooting and system maintenance tasks.

## Projects

| Project | Description | Technologies | GitHub |
| --- | --- | --- | --- |
| Freelancers Dashboard | Responsive dashboard application for freelancers to manage projects and workflows efficiently. | Next.js, TypeScript, Tailwind CSS | https://github.com/MohammedMohsin404/Freelancers-Dashboard |
| AI Resume Analyzer | AI-based web application that analyzes resumes and provides smart improvement suggestions. | React.js, TypeScript, Tailwind CSS | https://github.com/MohammedMohsin404/AI-Resume-Analyzer |

## Education

| Degree | Institution | Graduation |
| --- | --- | --- |
| Bachelor of Science in CSE | Northern University Bangladesh | 2025 |
| Diploma in Engineering Computer Technology | Munshiganj Polytechnic Institute | 2021 |

## Certifications & Courses

- Jira Fundamentals - Atlassian
- Complete Web Development Course - Programming Hero
- Graphic Design Course - NYDASA

## Core Skills

**Technical Skills:** JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, Firebase, REST API, Git & GitHub, Responsive Web Design, API Integration, Database Management, SEO Basics, Vercel Deployment.

**Professional Skills:** Problem Solving, Communication Skills, Team Collaboration, Time Management, Research & Analysis, Documentation, Technical Support, Project Coordination, Fast Learning Ability, Professional Work Ethics.

## Data Structure

The portfolio data is centralized in [`data.ts`](./data.ts):

- `personalInfo` stores contact details, CV link, profile links, headline, and summary.
- `resumeData` stores CV experience and education.
- `skillsData` stores technical and professional skills.
- `certificationsData` stores certifications and courses.
- `fallbackSingleWorks` and `fallbackWorksConnection` store CV project data for the Works page.

When Hygraph environment variables are configured, Apollo GraphQL can load CMS content. When they are missing or unavailable, the site falls back to the CV-based data above.

## Getting Started

```bash
git clone https://github.com/MohammedMohsin404/MohammedMohsin404.git
cd MohammedMohsin404
npm install
npm run dev
```

Visit `http://localhost:3000` during development.

## Environment Variables

Copy the sample file and fill only the services you use:

```bash
cp .env.example .env.local
```

Required only for CMS-backed content:

- `NEXT_PUBLIC_HYGRAPH_URL`
- `NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN`
- `NEXT_PUBLIC_SITE_URL`

Optional for Google Analytics Data API routes:

- `NEXT_PUBLIC_GA_PROPERTY_ID`
- `NEXT_PUBLIC_GA_CLIENT_EMAIL`
- `NEXT_PUBLIC_GA_PRIVATE_KEY`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

This project is ready for Vercel deployment. Import `MohammedMohsin404/MohammedMohsin404`, add the environment variables if you want CMS-backed data, and deploy.
