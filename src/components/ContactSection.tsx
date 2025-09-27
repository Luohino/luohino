import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar,
  MessageSquare,
  Instagram,
  Github
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

// Contact info array
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aniketsingh821305@gmail.com",
    href: "mailto:aniketsingh821305@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+919117901046",
    href: "tel:+919117901046",
    color: "secondary"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
    color: "accent"
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Open for new projects",
    href: "#",
    color: "primary"
  }
];

// Custom X (Twitter) icon (2023 rebrand)
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.5 3h3.5l-7.5 9.5L21 21h-3.5l-5-6.5L7 21H3.5l7.5-9.5L3 3h3.5l5 6.5L17.5 3z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/luohinoo/?igsh=MXV6cHJ3eDR0c2k5MQ%3D%3D#", label: "Instagram", color: "primary" },
  { icon: Github, href: "https://github.com/Luohino", label: "GitHub", color: "secondary" },
  { icon: XIcon, href: "https://x.com/luohino", label: "X", color: "accent" },
  { icon: null, href: "https://leetcode.com/luohino", label: "LeetCode", color: "primary", isLeetCode: true }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSentPopup, setShowSentPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // EmailJS credentials (not used in this sample, just keeping as reference)
  // const EMAILJS_SERVICE_ID = 'service_swm98pb';
  // const EMAILJS_TEMPLATE_ID = 'template_v1mj4n4';
  // const EMAILJS_USER_ID = 'MGUFtn_6srblaCgRc';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create FormData object to send via fetch
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.name}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      
      const response = await fetch('https://formsubmit.co/aniketsingh821305@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        setShowSentPopup(true);
        setTimeout(() => {
          setShowSentPopup(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            budget: ''
          });
          setIsSubmitting(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Sent popup */}
      {showSentPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-gradient-to-br from-primary to-secondary text-white px-8 py-5 sm:px-10 sm:py-6 rounded-2xl shadow-2xl text-xl sm:text-2xl font-bold animate-fade-in">
            Sent!
          </div>
        </div>
      )}

      {/* Gradient background elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50 pointer-events-none" />
      <div className="absolute top-20 left-10 sm:left-20 w-56 sm:w-96 h-56 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full liquid-glass-3d mb-4 sm:mb-6"
          >
            <span className="text-primary font-medium">Let's Connect</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Ready to{' '}
            <span className="text-gradient-primary">Collaborate?</span>
          </h2>

          <p className="text-base sm:text-xl text-foreground-subtle max-w-2xl sm:max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        {/* Main grid: 1 col on mobile, 2 col on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="glass border-border-subtle hover:border-primary/30 transition-all duration-500 w-full">
              <CardContent className="p-3 sm:p-5 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary/20 mr-3 sm:mr-4">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gradient-primary">
                      Send a Message
                    </h3>
                    <p className="text-foreground-subtle text-sm sm:text-base">
                      Fill out the form below and I'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
                <form 
                  className="space-y-4 sm:space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Responsive form grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        className={`glass focus:border-primary/50 bg-background/50 ${
                          errors.name ? 'border-red-500' : 'border-border-subtle'
                        }`}
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className={`glass focus:border-primary/50 bg-background/50 ${
                          errors.email ? 'border-red-500' : 'border-border-subtle'
                        }`}
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Input
                      name="subject"
                      placeholder="What's this about?"
                      className="glass border-border-subtle focus:border-primary/50 bg-background/50"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Budget (Optional)</label>
                    <select
                      name="budget"
                      className="w-full px-3 py-2 glass border border-border-subtle focus:border-primary/50 bg-background/50 rounded-lg text-foreground"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$50 - $100</option>
                      <option value="10k-25k">$100 - $250</option>
                      <option value="25k-50k">$250 - $500</option>
                      <option value="50k+">$500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, goals, and timeline..."
                      rows={6}
                      className={`glass focus:border-primary/50 bg-background/50 resize-none ${
                        errors.message ? 'border-red-500' : 'border-border-subtle'
                      }`}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full btn-premium text-primary-foreground font-semibold text-base sm:text-lg py-3 sm:py-4 hover-lift"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Information */}
            <Card className="glass border-border-subtle w-full">
              <CardContent className="p-3 sm:p-5 md:p-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gradient-primary mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <a
                          href={info.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                        >
                          <div className={`p-2 sm:p-3 rounded-lg bg-${info.color}/10 border border-${info.color}/20 group-hover:shadow-glow transition-all duration-300`}>
                            <Icon className={`w-5 h-5 text-${info.color}`} />
                          </div>
                          <div>
                            <div className="font-medium text-foreground text-sm sm:text-base">
                              {info.label}
                            </div>
                            <div className="text-foreground-subtle group-hover:text-primary transition-colors text-xs sm:text-base">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass border-border-subtle w-full">
              <CardContent className="p-3 sm:p-5 md:p-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gradient-primary mb-4 sm:mb-6">
                  Follow Me
                </h3>
                {/* Social grid: 2 columns on all screens, can switch to 1 on mobile if needed */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => {
                    if (social.isLeetCode) {
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener"
                          title="LeetCode"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center justify-center space-x-2 p-3 sm:p-4 rounded-lg bg-${social.color}/10 border border-${social.color}/20 hover:shadow-glow transition-all duration-300 group`}
                        >
                          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" alt="LeetCode" className="w-5 h-5 object-contain" style={{ filter: 'invert(70%) sepia(6%) saturate(0%) hue-rotate(180deg) brightness(90%) contrast(90%)' }} />
                          <span className={`font-medium text-primary text-sm sm:text-base`}>
                            {social.label}
                          </span>
                        </motion.a>
                      );
                    } else {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center justify-center space-x-2 p-3 sm:p-4 rounded-lg bg-${social.color}/10 border border-${social.color}/20 hover:shadow-glow transition-all duration-300 group`}
                        >
                          <Icon className={`w-5 h-5 text-${social.color} group-hover:scale-110 transition-transform`} />
                          <span className={`font-medium text-${social.color} text-sm sm:text-base`}>
                            {social.label}
                          </span>
                        </motion.a>
                      );
                    }
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Badge className="bg-accent text-accent-foreground font-semibold text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 shadow-glow">
                 Usually responds within 24 hours
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
