// This file exports the same projects array as in ProjectsSection.tsx for reuse in ProjectDetails
const projects = [
  {
    id: 1,
    title: "Twirlshop – Futuristic E‑Commerce Landing",
    description: "A sleek storefront hero for a next‑generation shopping experience with polished UI, animated CTAs, and category navigation.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TailwindCSS", "Framer Motion", "UI/UX"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
    filters: ["Web"],
    hasImage: true
  },
  {
    id: 2,
    title: "TalkTwirl - Social Media App",
    description: "A modern social media platform with dark theme, featuring user posts, interactions, and mobile-first design.",
    image: "/api/placeholder/600/400",
    tags: ["Flutter", "Mobile App", "Social Media", "UI/UX"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
    filters: ["Flutter", "App"],
    hasImage: true
  },
  
  {
    id: 7,
    title: "Twirl Notes - Mobile App",
    description: "Notes and to-dos app with a clean dark UI and tabs.",
    image: "/api/placeholder/600/400",
    tags: ["Flutter", "Mobile App"],
    demoUrl: "#",
    featured: false,
    filters: ["Flutter", "App"],
    hasImage: true
  },
  {
    id: 8,
    title: "TalkTwirl Web - Social App",
    description: "Web version of TalkTwirl with mobile-style layout.",
    image: "/api/placeholder/600/400",
    tags: ["Web", "UI/UX"],
    demoUrl: "#",
    featured: false,
    filters: ["Web"],
    hasImage: true
  },
  {
    id: 9,
    title: "Pinsry – Bedtime Stories Community Platform",
    description: "A Flutter-powered story-sharing ecosystem with AI assistance, offline reading, and social engagement features designed for the modern storyteller.",
    image: "/api/placeholder/600/400",
    tags: ["Flutter", "Mobile App", "Social Media", "AI"],
    demoUrl: "https://github.com/Luohino/Pinsry/releases/tag/v2",
    featured: true,
    filters: ["Flutter", "App"],
    hasImage: true
  },
  {
    id: 10,
    title: "MegaChat – Modern Real-Time Communication Platform",
    description: "A comprehensive mobile messaging application built with Flutter and Supabase, designed to deliver seamless real-time communication experiences.",
    image: "/api/placeholder/600/400",
    tags: ["Flutter", "Mobile App", "Real-time", "Chat"],
    demoUrl: "https://github.com/Luohino/Megachat/releases/tag/v1.0.0",
    featured: true,
    filters: ["Flutter", "App"],
    hasImage: true
  }
];

export default projects;
