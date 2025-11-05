import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Abhay kumar",
  webname: "techwithabhay",
  initials: "AK",
  url: "https://github.com/abhaysgitt",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Open Source | Problem Solving ",
  summary:
    "I’m a passionate Computer Science undergrad Focused on building scalable [AI-driven web apps](#projects) & Deeply passionate about learning new technologies and continually enhancing my skills. looking for opportunities to collaborate with other professionals and organizations that share my vision and nurture my passion for programming and values of creating impactful and user-centric products.",
    avatarUrl: "/abhay.jpeg",
  
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "java",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Linux",
    "GitHub Actions",
    "Prisma",
    "Drizzle",
    "MonoRepo",
    "WebSocket",
    "WebRTC",
    "Kafka",
    "Redis",
    "GraphQL",
    "Nginx",
    "AWS",
    "CI/CD",
    "Grafana",
    "Prometheus",
    "OpenAPI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://abhaysblogg.blogspot.com/",
      icon: NotebookIcon,
      label: "Blog",
    },
    {
  href: "https://drive.google.com/file/d/1l3lQSh8OQ5dX_7730BGr0FNpevnBLcCO/view?usp=drive_link",
  icon: FileTextIcon, // better suited for Resume
  label: "Resume",
},

  ],
  contact: {
    email: "abhaysingh19oct@gmail.com",
    tel: "+91 7835998969",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhaysgitt",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abhayslinkk",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abhaystwitt",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:abhaysingh19oct@gmail.com@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance Web Developer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "2025",
      end: "Present",
      description:
        "",
    },
    {
      company: "Open Source",
      badges: [],
      href: "https://github.com/abhaysgitt",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/github-mark.png",
      start: "2025",
      end: "Present",
      description:
        "",
    }
  ],
  education: [
    {
      school: "Techno Main - Salt Lake , Kolkata India ",
      href: "https://www.ticollege.ac.in/",
      degree: "Bachelor of Technology - Computer Science",
      logoUrl: "/tmsl.png",
      start: "2024",
      end: "2028",
    },
  ],

  projects: [
    {
      title: "Upcomming",
      href: "https://techwithabhay.vercel.app/",
      dates: "September 2026",
      active: true,
      description:
        "upcomming | upcomming | upcomming",        
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://techwithabhay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhaysgitt/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AI_Landing-Page.png",
      video: "",
    },
    {
      title: "techwithabhay",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "Developed an amazing Portfolio to showase my work to potentiol recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://techwithabhay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Portfolio.png",
      video: "",
    },
  ],

  opensource: [
    {
      title: "Upcomming",
      href: "https://techwithabhay.vercel.app/",
      dates: "January 2025",
      active: true,
      description:
        "upcomming | upcomming | upcomming",
      technologies: [
        "ReactJS",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://techwithabhay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/diligence-landing.png",
      video: "",
    },
    {
      title: "Upcomming",
      href: "https://techwithabhay.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "upcomming | upcomming | upcomming",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://techwithabhay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nftech-landing.png",
      video: "",
    },
  ],

  freelance: [
    {
      title: "Upcomming",
      href: "https://techwithabhay.vercel.app/",
      dates: "January 2025",
      active: true,
      description:
        "upcomming | upcomming | upcomming",
      technologies: [
        "ReactJS",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://techwithabhay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/diligence-landing.png",
      video: "",
    },
    {
      title: "Upcomming",
      href: "https://techwithabhay.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "upcomming | upcomming | upcomming",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://techwithabhay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nftech-landing.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "SIH Hackathon",
      dates: "September 2025",
      location: "Kolkata, India",
      description:
        "Developed a web application.",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhaysgitt",
        },
      ],
    },
     {
      title: "UPCOMMINNG",
      dates: "Spetember 2026",
      location: "India",
      description:
        "upcomming | upcomming | upcomming",
      image: "sparkhack.png",
      links: [],
    },

  ],
} as const;
