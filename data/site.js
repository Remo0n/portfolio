export const site = {
  name: "Remon Botros",
  role: "Senior Frontend Engineer",
  location: "Alexandria, Egypt",
  workMode: "Remote",
  email: "remoon.peter@gmail.com",
  phone: "+20 150 007 2999",
  resumePath: "/cv-remon-botros.pdf",
  summary:
    "Senior Frontend Engineer with 5+ years building scalable, high-performance web applications for European and international companies. Specialises in React and Next.js, with a track record of modernising legacy systems, improving application performance, and contributing to frontend architecture decisions. Comfortable working cross-functionally in remote, distributed teams.",
  shortSummary:
    "I build scalable React and Next.js applications for European and international teams — modernising legacy systems, improving performance, and shaping frontend architecture.",
  social: {
    linkedin: "https://www.linkedin.com/in/remoonpeter",
    github: "https://github.com/Remo0n",
    twitter: "https://twitter.com/peter_remoon",
  },
  competencies: [
    "React.js & Next.js",
    "TypeScript & JavaScript",
    "Frontend architecture",
    "Accessible responsive UI",
    "State management (Redux / React Query)",
    "Jest & Cypress testing",
    "Legacy system modernisation",
    "Remote EU collaboration",
  ],
  experience: [
    {
      company: "GureTruck",
      extra: "Spain",
      title: "Senior Frontend Developer",
      period: "2023 — Present",
      location: "Remote",
      compact: false,
      bullets: [
        "Led the full refactoring of a legacy logistics platform into a modern, scalable React application, resulting in measurable improvements to load performance and a significantly faster onboarding experience for new developers.",
        "Contributed to frontend architecture decisions including component patterns, folder structure, and state management strategy, helping establish clean and maintainable conventions across the codebase.",
        "Designed and implemented responsive, accessible UI for complex transport and logistics workflows, ensuring a consistent experience across devices.",
        "Participated in code reviews and provided informal technical guidance to other frontend contributors, helping raise overall code quality.",
        "Wrote unit and end-to-end tests using Jest and Cypress to improve reliability of critical user journeys.",
      ],
    },
    {
      company: "Conversation 24",
      extra: "Netherlands",
      title: "Frontend Developer",
      period: "2022 — 2023",
      location: "Remote",
      compact: false,
      bullets: [
        "Maintained and stabilised existing frontend codebases, reducing bug frequency and improving overall reliability of the chat interface.",
        "Built and enhanced UI components using React, HTML5, and CSS3, with a focus on cross-browser compatibility and accessibility.",
        "Collaborated closely with the backend team to integrate real-time features, ensuring seamless and responsive user interactions.",
      ],
    },
    {
      company: "Military Service",
      extra: "Egypt",
      title: "National Service",
      period: "2021 — 2022",
      location: "Egypt",
      compact: true,
      bullets: ["Fulfilled mandatory national military service duty."],
    },
    {
      company: "Bravo (Wasla)",
      extra: "Egypt",
      title: "Frontend Developer",
      period: "2019 — 2021",
      location: "Egypt",
      compact: false,
      bullets: [
        "Developed the client-side of Wasla's web applications using ReactJS, HTML5, and CSS3, ensuring responsive and user-friendly interfaces.",
        "Translated product requirements and design specifications into functional, interactive web features, collaborating directly with the product and design teams.",
      ],
    },
  ],
  education: [
    {
      title: "Frontend Development Diploma",
      org: "ITI Intensive Code Camp",
      period: "Jun — Nov 2023",
    },
    {
      title: "Frontend Development Diploma",
      org: "Route",
      period: "2018 — 2019",
    },
    {
      title: "Bachelor of Science",
      org: "Alexandria University",
      period: "2015 — 2020",
    },
  ],
  skills: [
    {
      group: "Core",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SASS",
      ],
    },
    {
      group: "State & Data",
      items: ["Redux", "Redux Toolkit", "React Query", "Context API"],
    },
    {
      group: "Testing",
      items: ["Jest", "Cypress (unit + end-to-end)"],
    },
    {
      group: "Tooling",
      items: ["Git", "Docker", "AWS", "Webpack", "Vite"],
    },
    {
      group: "Other",
      items: ["WordPress", "SQL", "Kibana", "OOP", "RESTful APIs"],
    },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional" },
  ],
  featuredProjects: [
    {
      name: "Airbnb Clone",
      kind: "Full-stack",
      description:
        "Full-stack property rental platform with social login, property listing with image upload, and advanced search and filtering.",
      stack: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "NextAuth"],
      github: "https://github.com/Remo0n/airbnb-clone",
      live: "https://remon-airbnb-clone.vercel.app/",
    },
  ],
};

export const seo = {
  title: `${site.name} — ${site.role}`,
  description: site.summary,
  url: "https://remon-portoflio.web.app",
};
