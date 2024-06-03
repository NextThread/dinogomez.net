import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { LayoutGridIcon } from "lucide-react";

export const Config = {
  Name: "Anurag Roy",
  Role: "Full Stack Engineer",
  yearStart: 2020,
  openForWork: true,
  Links: [
    {
      Mail: "mailto:anuragroy.dev@gmail.com",
      icon: EnvelopeClosedIcon,
      tt: "Contact Me!",
    },
    {
      Github: "https://github.com/NextThread",
      icon: GitHubLogoIcon,
      tt: "GitHub",
    },
    {
      LinkedIn: "https://www.linkedin.com/in/anurag31oct/",
      icon: LinkedInLogoIcon,
      tt: "LinkedIn",
    },
  ],
  Skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "React",
    "C++",
    "Go",
    "Postman",
    "Docker",
  ],
  Experience: [
    {
      name: "Github",
      role: "Open Source Developer",
      yearX: "2023",
      yearY: "2024",
      setup: "Remote",
      desc: "Spearheaded significant enhancements to open-source repositories including Styleguide (Google), Yoga (Facebook), AWS, Node.js, and Axios, boosting community contributions by 40% and reducing issue resolution time by 25%. Contributions included leading migration on nodejs.org, enhancing merged messages with share-links, integrating code formatting tools with Prettier and Husky, translating content with react-i18n, extending CLI capabilities, and resolving various doubts and issues.",
    },
    {
      name: "Persist Ventures",
      role: "Software Engineer",
      yearX: "2023 ",
      yearY: "2023 ",
      setup: "Remote",
      desc: "Orchestrated a monumental paradigm shift by pioneering the integration of state-of-the-art automation features into Chrome extensions. Leveraging the formidable capabilities of GPT-4, Python3, and JavaScript, engineered a groundbreaking solution that transcended conventional boundaries. This audacious endeavor yielded a staggering 30% reduction in manual workload, heralding a new era of unparalleled efficiency and empowering teams to achieve unprecedented levels of productivity and success.",
    },
    {
      name: "USthaan",
      role: "Software Development Engineer(Backend)",
      yearX: "2022",
      yearY: "2023",
      setup: "Remote",
      desc: "Increased code coverage from 32% to 92% and improved stability by 25% through collaborative code reviews, optimizations, and writing tests with Mocha and Chai. Managed AWS services (EC2, S3, DynamoDB) and developed real-time email notifications using JSON Schemas and Lambda functions. Tracked and resolved issues using JIRA, and optimized 20+ PRs. Created an automation pipeline with Groovy and Jenkins, cutting deployment time by 40% and enabling faster feature delivery with minimal downtime.",
    },

    {
      name: "Blackbird.AI",
      role: "Sofware Engineer Intern",
      yearX: "2021",
      yearY: "2022",
      setup: "Remote",
      desc: "Worked on diverse projects, building and validating code with Harrison.AI, and contributing insights during Sprint retrospectives at Baraja. Leveraged open-source solutions at Morse Micro to optimize product development and innovation. Designed an A/B test framework, crafting proposals, outlining hypotheses, and using data-driven insights to enhance user experiences.",
    },
  ],
  Projects: [
    {
      name: "ShieldAuth",
      user: "NexThread",
      repo: "secureAuth",
      url: "https://github.com/NextThread/secure-auth/tree/main",
      desc: "A robust HTTP server with Go, integrating JWT generation and advanced security measures; prevented unauthorised access and DOS attacks, enhancing user authentication and management efficiency by 30%.",
      tags: ["Go", "Docker", "Postman"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: false,
    },
    {
      name: "OpenImage",
      user: "NextThread",
      repo: "openimage",
      url: "https://www.openimage.vercel/",
      desc: "An open-source web application for bulk image compression. ",
      tags: ["Next.js", "Compression", "Image-Processing", "React"],
      stars: 0,
      dl: "",
      wip: false,
      ppt: false,
      live: true,
    },
    {
      name: "Cognivision",
      user: "NextThread",
      repo: "CDATA-JS-Highlighter",
      url: "https://www.npmjs.com/package/cognivision",
      desc: "An advanced image recognition api for Node.js applications",
      tags: ["Tensorflow", "Node.js", "API"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: false,
      ms: true,
      live: true,
    },
  ],
};

export const Data = {
  Hello: [
    "Hello",
    "Bonjour!",
    "你好",
    "Kamusta",
    "こんにちは",
    "Hola",
    "안녕하세요",
    "Ciao",
    "Li-hó",
    "Ola",
    "नमस्ते",
    "مرحبًا",
    "Вітаю",
    "привет",
    "Γεια σας",
    "Guten Tag",
    "হ্যালো",
    "สวัสดี",
    "¡Hola!",
  ],
  Projects: [
    "Projects",
    "项目",
    "Proyekto",
    "プロジェクト",
    "¡Proyectos!",
    "프로젝트",
    "Progetti",
    "Dolang-proyek",
    "Projetos",
    "परियोजनाएं",
    "مشاريع",
    "Проєкти",
    "проекты",
    "Έργα",
    "Projekte",
    "প্রকল্প",
    "โครงการ",
  ],
};
