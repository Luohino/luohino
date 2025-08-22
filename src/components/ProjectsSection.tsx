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
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobileShowcase = project.id === 2 || project.id === 7 || project.id === 8;
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`${project.featured && !isMobileShowcase ? 'lg:col-span-2' : ''} ${isMobileShowcase ? 'justify-self-center md:justify-self-auto' : ''}`}
    >
      <Card className={`group glass border-border-subtle hover:border-primary/30 overflow-hidden transition-all duration-500 hover-lift ${isMobileShowcase ? 'w-[240px]' : ''}`}>
        <div className="relative overflow-hidden cursor-pointer" onClick={() => setIsHovered((v) => !v)}>
          <div className={`${isMobileShowcase ? 'h-[300px]' : 'aspect-[2/1]'} bg-gradient-subtle relative`}>
            {/* Project Image */}
            {isMobileShowcase ? (
              <img
                src={project.id === 2 ? '/assets/talktwirl.jpg' : project.id === 7 ? '/assets/Tiwrlnotes.jpg' : '/assets/webtalktiwrl.jpg'}
                alt={project.title}
                className="h-full block object-contain mx-auto max-w-[220px]"
                style={{ objectPosition: 'top center' }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {project.id === 1 ? (
                  <img 
                    src="/assets/twirlshop.png" 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                ) : (
                  <div className="text-4xl opacity-20"></div>
                )}
              </div>
            )}
            
            {/* Overlay & Actions */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Action Buttons */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
            >
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={e => e.stopPropagation()}
                >
                  <Button 
                    size="sm"
                    className="btn-premium text-primary-foreground font-medium w-full"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              )}

              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={e => e.stopPropagation()}
                >
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="glass border-primary/30 text-primary hover:bg-primary/10 w-full"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </a>
              )}
              
              <Button 
                size="sm" 
                variant="outline"
                className="glass border-primary/30 text-primary hover:bg-primary/10 w-full"
                onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`); }}
              >
                <Eye className="w-4 h-4 mr-2" />
                Details
              </Button>
            </motion.div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-accent text-accent-foreground font-semibold">
                  Featured
                </Badge>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="glass border-primary/30 text-primary">
                {project.filters?.[0] ?? 'Project'}  
              </Badge>
            </div>
          </div>
        </div>

        <CardContent className="p-3 sm:p-2">
          <div className="space-y-2 sm:space-y-1">
            <div>
              <h3 className="text-base sm:text-sm font-bold text-gradient-primary mb-1 group-hover:text-gradient-hero transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-sm sm:text-xs text-foreground-subtle leading-relaxed line-clamp-2 sm:line-clamp-1">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                <Badge 
                  key={tagIndex} 
                  variant="secondary"
                  className="text-xs px-2 sm:px-1 py-0.5 bg-muted/50 text-foreground-subtle hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center space-x-2 sm:space-x-1 pt-1">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  className="flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              )}
              
              {project.codeUrl && (
                <a 
                  href={project.codeUrl}
                  className="flex items-center text-foreground-subtle hover:text-primary transition-colors font-medium"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Source
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-3 place-items-center md:place-items-stretch">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProjectsSection;