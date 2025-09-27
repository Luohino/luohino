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
            className="inline-flex items-center px-4 py-2 rounded-full liquid-glass-3d mb-6"
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

            {/* Skills - Tech-inspired Sliding Cards */}
            <div>
              <h4 className="section-header">What I Do</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      className="skill-card flex items-center space-x-3 cursor-pointer"
                    >
                      <Icon className="w-5 h-5 text-white relative z-10" />
                      <span className="text-sm font-medium text-white relative z-10">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Interests - Floating Organic Badges */}
            <div>
              <h4 className="section-header">What I Love</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.15, type: "spring", bounce: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, rotate: -2, scale: 1.05 }}
                      className="interest-badge flex items-center cursor-pointer"
                    >
                      <Icon className="interest-icon w-4 h-4 mr-2 text-white" />
                      <span className="text-sm font-medium text-white">{interest.name}</span>
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
            {/* Stats Grid - Single Row with Size Variations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                // Size variations: small, big, big, small
                const isCenter = index === 1 || index === 2;
                const cardClass = isCenter ? 'liquid-glass-mobile-card' : 'liquid-glass-mobile-card-small';
                const iconSize = isCenter ? 'w-12 h-12' : 'w-10 h-10';
                const iconClass = isCenter ? 'w-6 h-6' : 'w-5 h-5';
                const textSize = isCenter ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl';
                const labelSize = isCenter ? 'text-sm lg:text-base' : 'text-xs lg:text-sm';
                
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: isCenter ? 1.0 : 0.9 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: isCenter ? 1.05 : 0.95, y: -8 }}
                    className={`text-center ${cardClass} relative overflow-hidden transform-gpu`}
                  >
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      <div className={`inline-flex items-center justify-center ${iconSize} rounded-full bg-primary/10 border border-primary/20 mb-3 lg:mb-4`}>
                        <Icon className={`${iconClass} text-primary`} />
                      </div>
                      <div className={`${textSize} font-bold text-gradient-primary mb-1 lg:mb-2 leading-tight`}>
                        {stat.value}
                      </div>
                      <div className={`text-foreground-subtle font-medium ${labelSize} text-center leading-tight`}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Philosophy Card - Beautiful Creative Design */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="philosophy-card"
            >
              <h4 className="philosophy-title text-xl text-white">
                My Philosophy
              </h4>
              <div className="philosophy-content">
                <span className="philosophy-highlight">Code with purpose</span>, design with heart, and{' '}
                <span className="philosophy-highlight">build for impact</span>. Every line of code should tell a story and every interface should create an experience that users{' '}
                <span className="philosophy-highlight">love</span>.
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Journey Timeline - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-gradient-primary mb-16">
            My Journey
          </h3>
          
          <div className="timeline-container">
            {/* Enhanced Timeline Line */}
            <div className="timeline-line" />
            
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
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                viewport={{ once: true }}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                {/* Enhanced Timeline Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="timeline-card"
                >
                  <div className="timeline-date">
                    {milestone.year}
                  </div>
                  <h4 className="timeline-title">
                    {milestone.title}
                  </h4>
                  <p className="timeline-description">
                    {milestone.description}
                  </p>
                </motion.div>
                
                {/* Enhanced Timeline Dot */}
                <motion.div 
                  className="timeline-dot"
                  whileHover={{ scale: 1.3 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.0 + index * 0.2,
                    type: "spring",
                    bounce: 0.6
                  }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
