import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Palette, 
  Code, 
  Layers, 
  Zap, 
  Monitor, 
  Smartphone,
  Globe,
  Lightbulb,
  Target,
  Award
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'design' | 'development' | 'tools';
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Full‑Stack Development",
    icon: Code,
    description: "End‑to‑end web engineering across client and server",
    color: "primary",
    skills: [
      { name: "React / Next.js", level: 93, category: "development" },
      { name: "TypeScript", level: 90, category: "development" },
      { name: "Node.js / Express", level: 86, category: "development" },
      { name: "REST & GraphQL", level: 84, category: "development" },
      { name: "PostgreSQL / MongoDB", level: 82, category: "development" }
    ]
  },
  {
    title: "App Development (Flutter)",
    icon: Smartphone,
    description: "Beautiful cross‑platform apps with smooth animations",
    color: "secondary",
    skills: [
      { name: "Flutter / Dart", level: 92, category: "development" },
      { name: "State Mgmt (Bloc / Riverpod)", level: 88, category: "development" },
      { name: "Firebase / Supabase", level: 86, category: "development" },
      { name: "Native Integrations", level: 80, category: "development" },
      { name: "CI/CD & Play Store", level: 78, category: "development" }
    ]
  },
  {
    title: "Vibe Coding & UI Craft",
    icon: Zap,
    description: "Design‑driven coding: motion, polish, and delightful UX",
    color: "accent",
    skills: [
      { name: "Tailwind CSS", level: 95, category: "development" },
      { name: "Framer Motion / Animations", level: 90, category: "development" },
      { name: "Accessibility (a11y)", level: 85, category: "tools" },
      { name: "Design Systems", level: 88, category: "design" },
      { name: "Performance Tuning", level: 84, category: "development" }
    ]
  }
];

// Icon-only stack for a clean, real look (names as title tooltips)
const techStackIcons = [
  { label: 'React', icon: '⚛️' },
  { label: 'Next.js', icon: '⬛' },
  { label: 'TypeScript', icon: '🟦' },
  { label: 'Tailwind CSS', icon: '🌊' },
  { label: 'Node.js', icon: '🟢' },
  { label: 'Express', icon: '🚏' },
  { label: 'PostgreSQL', icon: '🐘' },
  { label: 'MongoDB', icon: '🍃' },
  { label: 'GraphQL', icon: '🔺' },
  { label: 'Flutter', icon: '🧩' },
  { label: 'Dart', icon: '🎯' },
  { label: 'Firebase', icon: '🔥' },
  { label: 'Framer Motion', icon: '🎞️' },
  { label: 'Git', icon: '🔧' },
  { label: 'GitHub', icon: '🐙' },
  { label: 'Vercel', icon: '▲' }
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="glass border-border-subtle hover:border-primary/30 transition-all duration-500 hover-lift h-full">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className={`p-3 rounded-xl bg-${category.color}/10 border border-${category.color}/20 mr-4`}>
              <Icon className={`w-6 h-6 text-${category.color}`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gradient-primary group-hover:text-gradient-hero transition-all duration-300">
                {category.title}
              </h3>
              <p className="text-foreground-subtle text-sm">
                {category.description}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">
                    {skill.name}
                  </span>
                  <Badge 
                    variant="outline" 
                    className="glass border-primary/30 text-primary text-xs"
                  >
                    {skill.level}%
                  </Badge>
                </div>
                <div className="relative">
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-muted/30"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: (index * 0.2) + (skillIndex * 0.1) + 0.5 }}
                    viewport={{ once: true }}
                    className={`absolute top-0 left-0 h-2 bg-gradient-${category.color} rounded-full glow-hover`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="glass border-border-subtle hover:border-primary/30 transition-all duration-300 hover-lift text-center">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-gradient-primary">
                {achievement.title}
              </h4>
              <p className="text-foreground-subtle text-sm">
                {achievement.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-secondary/3 rounded-full blur-3xl" />

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
            <span className="text-primary font-medium">Expertise</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Skills &{' '}
            <span className="text-gradient-primary">Technologies</span>
          </h2>
          
          <p className="text-xl text-foreground-subtle max-w-3xl mx-auto">
            A comprehensive toolkit of cutting-edge technologies and creative skills, 
            honed through years of professional experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index}
            />
          ))}
        </div>

        {/* Compact Tech Stack Icons (looping marquee) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Card className="glass border-border-subtle">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gradient-primary">Tools I Love</h3>
                <span className="text-foreground-subtle text-sm">Focused, modern, production‑ready</span>
              </div>
              <div className="overflow-hidden relative">
                <div className="flex gap-4 animate-marquee will-change-transform">
                  {[...techStackIcons, ...techStackIcons].map((tool, idx) => (
                    <div
                      key={`${tool.label}-${idx}`}
                      title={tool.label}
                      className="h-10 w-10 shrink-0 rounded-full bg-muted/40 border border-border-subtle flex items-center justify-center text-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <span aria-hidden>{tool.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;