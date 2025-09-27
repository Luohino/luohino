// External image URLs for projects
const projectImages: Record<string, string> = {
  'Twirlshop – Futuristic E‑Commerce Landing': 'https://i.postimg.cc/K8txHD84/twirlshop.png', // Note: EN DASH (U+2013) and non-breaking hyphen (U+2011) in original title
  'TalkTwirl - Social Media App': 'https://i.postimg.cc/FsMhpBm2/talktwirl.jpg',
  'Twirl Notes - Mobile App': 'https://i.postimg.cc/YqGp1Hc6/Tiwrlnotes.jpg',
  'TalkTwirl Web - Social App': 'https://i.postimg.cc/FsMhpBm2/talktwirl.jpg',
  'Pinsry – Bedtime Stories Community Platform': 'https://i.postimg.cc/Px2621yK/IMG-20250921-001428.png',
  'MegaChat – Modern Real-Time Communication Platform': 'https://i.postimg.cc/kXpgLZGw/Screenshot-2025-09-27-20-03-05-90-548ba7fa16f53ae863800a8b3860f296.jpg',
};
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play, Eye } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
  // categories used for top-level filtering chips
  filters: string[];
  hasImage?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Twirlshop – Futuristic E‑Commerce Landing",
    description: "A sleek storefront hero for a next‑generation shopping experience with polished UI, animated CTAs, and category navigation.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TailwindCSS", "Framer Motion", "UI/UX"],
    demoUrl: "https://luohino.github.io/Twirlshop/",
    codeUrl: "https://github.com/Luohino/Twirlshop/tree/main",
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
    demoUrl: "https://github.com/Luohino/Talktwirl/releases/tag/v2",
   
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
    demoUrl: "https://github.com/Luohino/Twirl-Notes/releases/tag/v1.0.0",
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
    demoUrl: "https://luohino.github.io/Talktwirl/",
     codeUrl: "https://github.com/Luohino/Talktwirl",
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isMobileShowcase = project.id === 2 || project.id === 7 || project.id === 8 || project.id === 9 || project.id === 10;
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className={`project-card project-card-horizontal ${
        isMobileShowcase ? 'project-card-mobile' : ''
      }`}>
        {/* Project Image */}
        <div className="project-card-image">
          {project.hasImage && (
            <img
              src={projectImages[project.title] || project.image}
              alt={project.title}
            />
          )}
        </div>

        {/* Project Content */}
        <div className="project-card-content">
          {/* Header */}
          <div className="project-card-header">
            <h3 className="project-card-title">
              {project.title}
            </h3>
            <p className="project-card-description">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="project-card-tags">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span key={tagIndex} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="project-card-actions">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
              >
                <Play className="w-4 h-4" />
                Live Demo
              </a>
            )}

            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-outline"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            )}
            
            <button 
              className="project-btn project-btn-outline"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <Eye className="w-4 h-4" />
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Web', 'App', 'Flutter'];
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = (
    filter === 'All' ? projects : projects.filter(project => project.filters?.includes(filter))
  ).filter(project => project.hasImage);

  // Modal close handler
  const closeModal = () => setModalProject(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full liquid-glass-3d mb-6"
          >
            <span className="text-primary font-medium">My portfolio </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured{' '}
            <span className="text-gradient-primary">Projects</span>
          </h2>
          
          <p className="text-xl text-foreground-subtle max-w-3xl mx-auto">
         Take a look at what I’ve been building and learning-coding projects, web apps, and experiments in tech.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={
                filter === category
                  ? "btn-premium text-primary-foreground font-medium"
                  : "glass border-border-subtle hover:border-primary/30 hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-col items-start space-y-8 w-full">
          {filteredProjects.map((project, index) => {
            const isMobileShowcase = project.id === 2 || project.id === 7 || project.id === 8 || project.id === 9 || project.id === 10;
            return (
              <div 
                key={project.id}
                className="w-full max-w-5xl"
              >
                <ProjectCard 
                  project={project} 
                  index={index}
                />
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default ProjectsSection;