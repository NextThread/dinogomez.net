import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { LayoutGridIcon } from "lucide-react";

export const Config = {
  Name: "Paul Gomez",
  Role: "Full Stack Engineer",
  yearStart: 2021,
  openForWork: false,
  Links: [
    {
      Mail: "mailto:dinogomez.dev@gmail.com",
      icon: EnvelopeClosedIcon,
      tt: "Contact Me!",
    },
    {
      Github: "https://github.com/dinogomez",
      icon: GitHubLogoIcon,
      tt: "GitHub",
    },
    {
      LinkedIn: "https://www.linkedin.com/in/paulgomez-dev/",
      icon: LinkedInLogoIcon,
      tt: "LinkedIn",
    },
    {
      Microsoft: "https://marketplace.visualstudio.com/publishers/PaulGomez",
      icon: LayoutGridIcon,
      tt: "Visual Studio Marketplace",
    },
  ],
  Skills: [
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React",
    "Python",
    "C#",
    "Tailwind",
    "Shadcn",
    "Drizzle",
    "Postgres",
    "MySql",
    "Docker",
  ],
  Experience: [
    {
      name: "Infor",
      role: "Software Engineer",
      yearX: "2022",
      yearY: "Now",
      setup: "Remote",
      desc: "Developed tools for codebase translation analysis, web-worker automation and a vscode integrated custom syntax highlighter for xml cdata tags available on <a className='underline' href='https://marketplace.visualstudio.com/publishers/PaulGomez' target='_blank' rel='noopener noreferrer'>Visual Studio Marketplace</a>.",
    },
    {
      name: "Noovid",
      role: "Next Developer",
      yearX: "2024",
      yearY: "2024",
      setup: "Remote",
      desc: "Developed and implemented new features using Next.js, conducted QA testing, and resolved tickets priot to product launch.",
    },

    {
      name: "Exist Software Labs",
      role: "Sofware Engineer Intern",
      yearX: "2021",
      yearY: "2022",
      setup: "",
      desc: "Managed Java/Spring Boot codebases for existing applications, with a focus on mobile banking and fintech projects.",
    },
  ],
  Projects: [
    {
      name: "dinogomez.net",
      user: "dinogomez",
      repo: "dinogomez.net",
      url: "/",
      desc: "My personal website built with NextJS, Tailwind, Shadcn and Framer Motion",
      tags: ["Next.js", "Framer Motion", "Tailwind", "Shadcn"],
      stars: 0,
      dl: "",
      wip: false,
      ppt: false,
      live: true,
    },
    {
      name: "Hyre",
      user: "dinogomez",
      repo: "Hyre",
      url: "https://github.com/dinogomez/hyre",
      desc: "A simple, fast, and elegant job board and recruiting platform.",
      tags: ["Next.js", "Supabase", "Shadcn", "Tailwind", "drizzle"],
      stars: 0,
      dl: "",
      wip: true,
      ppt: false,
    },
    {
      name: "OpenImage",
      user: "dinogomez",
      repo: "openimage",
      url: "https://www.openimage.dev/",
      desc: "An open-source web application for bulk image compression. ",
      tags: ["Next.js", "Compression", "Image-Processing", "React"],
      stars: 0,
      dl: "",
      wip: false,
      ppt: false,
      live: true,
    },
    {
      name: "Noovid",
      user: "dinogomez",
      repo: "SpaceCamp",
      url: "https://github.com/dinogomez/noovid",
      desc: "A delivery tracking system built with NextJS 14, with on demand updates using revalidate, shadcn/ui , supabase and iron-sesion for auth",
      tags: ["Next.js", "iron-session", "supabase"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: false,
    },
    {
      name: "CDATA-SH",
      user: "dinogomez",
      repo: "CDATA-JS-Highlighter",
      url: "https://marketplace.visualstudio.com/items?itemName=PaulGomez.cdata-js-highlighter",
      desc: "A light syntax highlighting extension for embedded JavaScript code within XML CDATA tags.",
      tags: ["CDATA", "XML", "vscode", "Syntax Highlighting"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: false,
      ms: true,
      live: true,
    },

    {
      name: "SpaceCamp",
      user: "dinogomez",
      repo: "SpaceCamp",
      url: "https://marketplace.visualstudio.com/items?itemName=PaulGomez.spacecamp",
      desc: "A dark theme for VSCODE, inspired and ported from the original SpaceCamp for Vim.",
      tags: ["theme", "vim", "vscode"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: false,
      ms: true,
      live: true,
    },

    {
      name: "AutoSFA",
      user: "dinogomez",
      repo: "SpaceCamp",
      url: "",
      desc: "A python automation tool built with Playwright that monitors web workers. Built at Infor",
      tags: ["Python", "Playwright", "Smtp"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: true,
      live: true,
    },
    {
      name: "Scholar",
      user: "dinogomez",
      repo: "SpaceCamp",
      url: "https://marketplace.visualstudio.com/items?itemName=PaulGomez.spacecamp",
      desc: "A python automation tool built for complex codebase translation analysis. Built at Infor",
      tags: ["python", "numpy", "xml", "algo"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: true,
    },
    {
      name: "Porter",
      user: "dinogomez",
      repo: "SpaceCamp",
      url: "https://marketplace.visualstudio.com/items?itemName=PaulGomez.spacecamp",
      desc: "A c# automation application that automatically maps and imports data. Built at Infor",
      tags: ["c#", "ssis", "sql", "algo"],
      stars: 0,
      dl: "230+",
      wip: false,
      ppt: true,
      live: false,
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
