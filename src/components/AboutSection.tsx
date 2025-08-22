import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Shield, 
  Zap, 
  Heart, 
  Coffee,
  Target,
  Users,
  Award,
  Clock
} from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: "Full Stack Development", icon: Code, color: "primary" },
    { name: "Flutter & Mobile Apps", icon: Smartphone, color: "secondary" },
    { name: "Cybersecurity", icon: Shield, color: "accent" },
    { name: "UI/UX Design", icon: Zap, color: "primary" }
  ];

  const interests = [
    { name: "Coding", icon: Heart, color: "primary" },
    { name: "Coffee", icon: Coffee, color: "secondary" },
    { name: "Problem Solving", icon: Target, color: "accent" },
    { name: "Collaboration", icon: Users, color: "primary" }
  ];

  const stats = [
    { label: "Age", value: "15", icon: Award },
    { label: "Experience", value: "6+ Months", icon: Clock },
    { label: "Projects", value: "5+", icon: Code },
    { label: "Happy Clients", value: "5+", icon: Users }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

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
            <span className="text-primary font-medium">About Me</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The{' '}
            <span className="text-gradient-primary">Story</span>
            <br />
            Behind the Code
          </h2>
          
          <p className="text-xl text-foreground-subtle max-w-3xl mx-auto">
            A passionate 15-year-old developer who believes in creating meaningful digital experiences 
            that make a difference in people's lives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Who I Am
              </h3>
              <p className="text-lg text-foreground-subtle leading-relaxed mb-6">
                Hey there! I'm Luohino (or Aniket if you prefer), a 15-year-old developer from Bihar, India. 
                I'm not just a coder - I'm a digital creator, problem solver, and tech enthusiast who loves 
                turning ideas into reality through code.
              </p>
              <p className="text-lg text-foreground-subtle leading-relaxed">
                When I'm not crafting beautiful user interfaces or debugging complex algorithms, 
                you'll find me exploring the latest in cybersecurity, experimenting with new technologies, 
                or collaborating with fellow developers on exciting projects.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">What I Do</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border-subtle hover:border-primary/30 transition-all duration-300"
                    >
                      <Icon className={`w-5 h-5 text-${skill.color}`} />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">What I Love</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge className={`bg-${interest.color}/10 text-${interest.color} border-${interest.color}/20 hover:bg-${interest.color}/20 transition-all duration-300`}>
                        <Icon className="w-4 h-4 mr-2" />
                        {interest.name}
                      </Badge>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 rounded-2xl glass border border-border-subtle hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gradient-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-foreground-subtle font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass border border-primary/20 bg-gradient-primary/5"
            >
              <h4 className="text-xl font-bold text-gradient-primary mb-4">
                My Philosophy
              </h4>
              <p className="text-foreground-subtle leading-relaxed">
                Code with purpose, design with heart, and build for impact. 
                Every line of code should tell a story and every interface should 
                create an experience that users love.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gradient-primary mb-12">
            My Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary/20 rounded-full" />
            
            <div className="space-y-12">
              {[
                {
                  year: "2025/03/17",
                  title: "Started Coding",
                  description: "Began my journey into the world of programming with Python and web development."
                },
                {
                  year: "2025/03/18",
                  title: "Full Stack Projects",
                  description: "Created full-stack applications and explored cybersecurity concepts."
                },
                {
                  year: "2025/06/01",
                  title: "Flutter & Mobile Dev",
                  description: "Dived into mobile app development with Flutter and started building cross-platform apps."
                },
                {
                  year: "2025/08/31",
                  title: "Portfolio & Growth",
                  description: "Building my portfolio and continuing to learn new technologies and frameworks."
                }
              ].map((milestone, index) => (
                                 <motion.div
                   key={milestone.year}
                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                   viewport={{ once: true }}
                   className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                 >
                   <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                     <Card className="glass border-border-subtle hover:border-primary/30 transition-all duration-500">
                       <CardContent className="p-4 md:p-6">
                         <div className="text-xl md:text-2xl font-bold text-gradient-primary mb-2">
                           {milestone.year}
                         </div>
                         <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">
                           {milestone.title}
                         </h4>
                         <p className="text-sm md:text-base text-foreground-subtle">
                           {milestone.description}
                         </p>
                       </CardContent>
                     </Card>
                   </div>
                   
                                       {/* Timeline Dot */}
                    <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow" />
                   
                   <div className="w-full md:w-1/2" />
                 </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
