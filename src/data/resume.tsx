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
    "I’m a Computer Science undergrad passionate about Cloud Native technologies, DevOps practices, and modern infrastructure automation. I'm currently exploring Kubernetes, Linux, Python, DevOps tooling, and the CNCF ecosystem while strengthening my problem-solving skills through DSA. I’m curious about how large-scale systems run in production — how they are deployed, automated, monitored, secured, and kept reliable. This curiosity is shaping my path toward roles like DevOps Engineer, SRE, Cloud Engineer, and Platform Engineer. I believe in learning in public, sharing knowledge, and contributing to open communities. My long-term goal is to become a Cloud Native engineer who builds reliable, scalable, and automated systems.",
    avatarUrl: "/abhay.jpeg",
  
  skills: [
    "Linux",
    "Bash/Shell Scripting",
    "Git/Github",
    "Java",
    "Python",
    "DSA",
    "Docker",
    "Kubernetes",
    "YAML",
    "CI/CD",
    "Github Actions",
    "CI tools",
    "Cloud Computing",
    "AWS",
    "GCP",
    "Terraform",
    "Helm",
    "Prometheus",
    "Grafana",
    "Problem Solving",
    "Open Source",
    "OpenAPI",
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "MongoDB",
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
        url: "mailto:abhaysingh19oct@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
{
  company: "Self-Directed",
  href: "https://techwithabhay.vercel.app/",
  badges: [],
  location: "Remote",
  title: "Cloud Native & DevOps Learner",
  logoUrl: "/memoji.jpeg",
  start: "2024",
  end: "Present",
  description: "",
},
{
  company: "Cloud Native Computing Foundation (CNCF)",
  href: "https://www.cncf.io/",
  badges: [],
  location: "Remote",
  title: "Open Source Contributor",
  logoUrl: "/cncf.png", 
  start: "2025",
  end: "Present",
  description: "",
},
{
  company: "Open Source Contributor",
  href: "https://github.com/abhaysgitt/",
  badges: [],
  location: "Remote",
  title: "Cloud Native Open Source Contributor",
  logoUrl: "/github.png", // replace path as needed
  start: "2025",
  end: "Present",
  description:"",
},

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
      title: "Kubernetes Deployment of a Full Application",
      href: "https://techwithabhay.vercel.app/",
      dates: "August 2025",
      active: true,
      description:
        "Containerized a full-stack application with Docker and deployed it on Kubernetes. Implemented Deployments, Services, Ingress, and Horizontal Pod Autoscaling. Managed configuration using ConfigMaps and Secrets.  💡What I learned - Container orchestration, auto-scaling, service networking, production-style K8s workflows.",        
      technologies: [
        "Docker",
        "Kubernetes",
        "YAML",
        "Ingress",
        "HPA",
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
      image: "/docker1.png",
      video: "",
    },
    {
      title: "CI/CD Pipeline with GitHub Actions",
      href: "",
      dates: "September 2025",
      active: true,
      description:
        "Developed a CI/CD pipeline that automatically builds Docker images, runs tests, and deploys updates to a Kubernetes cluster on every commit. Added rollback logic for failed deployments. 💡What I learned - Automation, deployment pipelines, testing workflows, GitOps alignment..",
      technologies: [
        "NGitHub Actions",
        "Docker",
        "Kubernetes",
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
      image: "/docker2.png",
      video: "",
    },
    {
      title: "Terraform Infrastructure on AWS",
      href: "",
      dates: "October 2025",
      active: true,
      description:
        "Deployed Prometheus and Grafana on Kubernetes to collect and visualize application metrics. Built dashboards for CPU, memory usage, response latency, and request throughput. 💡What I learned - IaC principles, AWS networking, modular infrastructure, version-controlled deployments.",
      technologies: [
        "Terraform",
        "AWS",
        "Iac",
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
      image: "/docker3.png",
      video: "",
    },
    {
      title: "Dockerized Microservices Architecture",
      href: "",
      dates: "November 2025",
      active: true,
      description:
        "Converted a multi-service application into containerized services using Docker. Configured Docker Compose for multi-container orchestration, service networking, and persistent storage.💡What I learned - Containerization, microservice patterns, service discovery, environment isolation.",
      technologies: [
        "Docker",
        "Docker Compose",
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
      image: "/docker1.png",
      video: "",
    },
  ],

  opensource: [
    {
  title: "Open Source Contribution — CNCF Ecosystem",
  href: "",
  dates: "January 2025 – Present",
  active: true,
  description:
    "Contributing to the CNCF ecosystem by improving Kubernetes and Prometheus documentation, resolving beginner-friendly issues, refining config examples, and engaging with maintainers on CNCF Slack. Focused on learning open-source workflows, SIG processes, and Cloud Native tooling. What I learned: GitHub collaboration, issue triaging, OSS communication, Kubernetes docs structure, Prometheus configuration, and best practices for community-driven development.",
  technologies: [
    "Git",
    "GitHub",
    "Markdown",
    "Kubernetes",
    "Prometheus",
    "YAML",
    "CNCF",
  ],
  links: [
    {
      type: "Website",
      href: "https://techwithabhay.vercel.app/",
      icon: <Icons.globe className='size-3' />,
    },
    {
      type: "Source",
      href: "https://github.com/abhaysgitt/",
      icon: <Icons.github className='size-3' />,
    },
  ],
  image: "/docker1.png",
  video: "",
},
{
  title: "Kubernetes Documentation Improvements — SIG Docs",
  href: "",
  dates: "February 2025 – Present",
  active: true,
  description:
    "Improving Kubernetes documentation by fixing outdated references, correcting broken links, enhancing YAML examples, and adding clearer explanations for beginners. Participating in SIG Docs discussions to understand contribution standards and review workflows. What I learned: Kubernetes docs structure, versioning rules, technical writing, PR review process, community communication, and contributing effectively to large-scale open-source projects.",
  technologies: [
    "Kubernetes",
    "SIG Docs",
    "Markdown",
    "YAML",
    "Git",
    "GitHub",
    "Open Source",
  ],
  links: [
    {
      type: "Website",
      href: "https://techwithabhay.vercel.app/",
      icon: <Icons.globe className='size-3' />,
    },
    {
      type: "Source",
      href: "https://github.com/abhaysgitt/",
      icon: <Icons.github className='size-3' />,
    },
  ],
  image: "/docker2.png",
  video: "",
},

{
  title: "Prometheus Ecosystem Contributions — Observability",
  href: "",
  dates: "March 2025 – Present",
  active: true,
  description:
    "Contributing to the Prometheus ecosystem by improving configuration examples, clarifying metric scraping documentation, refining alerting rules, and helping with beginner-friendly onboarding issues. Focused on strengthening observability understanding through hands-on engagement with maintainers and community discussions. What I learned: Prometheus metrics model, exporters, alerting logic, OSS review workflow, YAML best practices, and improving developer onboarding through better documentation.",
  technologies: [
    "Prometheus",
    "Grafana",
    "YAML",
    "Observability",
    "Metrics",
    "Git",
    "GitHub",
  ],
  links: [
    {
      type: "Website",
      href: "https://techwithabhay.vercel.app/",
      icon: <Icons.globe className='size-3' />,
    },
    {
      type: "Source",
      href: "https://github.com/abhaysgitt/",
      icon: <Icons.github className='size-3' />,
    },
  ],
  image: "/docker3.png",
  video: "",
},
{
  title: "ArgoCD Documentation & GitOps Workflow Improvements",
  href: "",
  dates: "March 2025 – Present",
  active: true,
  description:
    "Contributing to the ArgoCD project by improving documentation around GitOps workflows, refining application deployment examples, fixing YAML configurations, and enhancing clarity for new users. Participating in discussions to understand declarative delivery, sync policies, and ArgoCD’s architecture. What I learned: GitOps principles, declarative deployments, ArgoCD sync strategies, application management, PR review workflow, and improving documentation for production-grade tooling.",
  technologies: [
    "ArgoCD",
    "GitOps",
    "Kubernetes",
    "YAML",
    "Git",
    "GitHub",
    "CI/CD",
  ],
  links: [
    {
      type: "Website",
      href: "https://techwithabhay.vercel.app/",
      icon: <Icons.globe className='size-3' />,
    },
    {
      type: "Source",
      href: "https://github.com/abhaysgitt/",
      icon: <Icons.github className='size-3' />,
    },
  ],
  image: "/docker1.png",
  video: "",
},
  ],

  freelance: [
    {
  title: "Freelance DevOps & Cloud Automation",
  href: "",
  dates: "2025 – Present",
  active: true,
  description:
    "Helping small teams and indie developers automate deployments, containerize applications, set up CI/CD pipelines, and configure cloud infrastructure. Work includes Dockerizing services, deploying workloads on Kubernetes, and building infrastructure using Terraform. Improving clients' deployment reliability, speed, and developer workflows.",
  technologies: [
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Terraform",
    "AWS",
    "Linux",
    "DevOps",
  ],
  links: [
    {
      type: "Website",
      href: "https://techwithabhay.vercel.app/",
      icon: <Icons.globe className='size-3' />,
    },
    {
      type: "Source",
      href: "https://github.com/abhaysgitt/",
      icon: <Icons.github className='size-3' />,
    },
  ],
  image: "/docker1.png",
  video: "",
},
{
  title: "Freelance CI/CD Pipeline Development",
  href: "",
  dates: "2025 – Present",
  active: true,
  description:
    "Designed and implemented CI/CD pipelines for small teams and startup projects. Automated code testing, Docker image builds, and deployment workflows using GitHub Actions. Integrated Kubernetes deployment pipelines and enabled faster, more reliable release cycles for clients.",
  technologies: [
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux",
    "Git",
    "DevOps",
  ],
  links: [
    {
      type: "Website",
      href: "https://techwithabhay.vercel.app/",
      icon: <Icons.globe className='size-3' />,
    },
    {
      type: "Source",
      href: "https://github.com/abhaysgitt/",
      icon: <Icons.github className='size-3' />,
    },
  ],
  image: "/docker2.png",
  video: "",
},
  ],

  hackathons: [
    {
      title: "What Is Cloud Native? A Beginner-Friendly Explanation",
      dates: "September 2025",
      location: "India",
      description:
        "In this issue, I explain Cloud Native in the simplest way possible. I break down what Cloud Native actually means, its four pillars (containers, Kubernetes, DevOps automation, and observability), and why it matters in modern engineering. I also clarify that Cloud Native is about how you build systems, not where you run them. The edition includes real-world examples from companies like Netflix, Uber, and Spotify, highlights why Cloud Native skills are essential today, and outlines who should learn it. I also share my personal Cloud Native learning roadmap and preview upcoming topics for beginners.",
      image: "octocat.png",
      links: [
        {
          title: "Explore",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/newsletters/7400923199326064640/",
        },
      ],
    },
     {
      title: "🚀 My Cloud Native Journey – Why I Chose DevOps & Kubernetes",
      dates: "Spetember 2026",
      location: "India",
      description:
        "In this issue, I share why I chose the Cloud Native path, what Cloud Native really means, and how Kubernetes transformed modern infrastructure. I explain why DevOps, Cloud Engineering, and SRE roles are future-proof, outline my complete learning roadmap, and describe how the CNCF community helps me grow as an engineer. This edition sets the foundation for my journey into Cloud Native, DevOps, and open-source engineering.",
      image: "sparkhack.png",
      links: [
        {
          title: "Explore",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/newsletters/7400923199326064640/",
        },
      ],
    },

  ],
} as const;
