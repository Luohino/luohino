
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Github, ArrowLeft, Eye } from 'lucide-react';
import projects from '../data/projects';

const ProjectDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  // Scroll to top when project changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, hsl(0 0% 0%) 0%, hsl(0 0% 2%) 100%)'}}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Project Not Found</h2>
          <Button onClick={() => navigate(-1)} className="glass border-primary/30 text-primary hover:bg-primary/10"><ArrowLeft className="mr-2" />Go Back</Button>
        </div>
      </div>
    );
  }

  // Twirlshop custom gallery and details
  if (project.id === 1) {
    const screenshots = [
      'https://i.postimg.cc/mr54cXdX/Screenshot-2025-08-21-230215.png',
      'https://i.postimg.cc/cJHZLyct/Screenshot-2025-08-21-230222.png',
      'https://i.postimg.cc/Dyr7CcZ0/Screenshot-2025-08-21-230235.png',
      'https://i.postimg.cc/52pbJN8M/Screenshot-2025-08-21-230300.png',
      'https://i.postimg.cc/cCYdGRBD/Screenshot-2025-08-21-230323.png',
      'https://i.postimg.cc/66GWZKxd/Screenshot-2025-08-21-230345.png',
      'https://i.postimg.cc/kg7qLt6c/Screenshot-2025-08-21-230356.png',
    ];
    const demoUrl = "https://luohino.github.io/Twirlshop/";
    const codeUrl = "https://github.com/Luohino/Twirlshop/tree/main";
    return (
      <div className="dark-page flex flex-col px-2 py-8">
        {/* Back Button */}
        <div className="max-w-6xl w-full mx-auto mb-4">
          <Button variant="ghost" className="flex items-center gap-2 text-lg" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>
        </div>
        {/* Unified Card Layout */}
        <div className="max-w-6xl w-full mx-auto bg-gradient-to-br from-[#23263a] to-[#181c2b] rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up p-0 md:p-8 flex flex-col">
          {/* Screenshot Carousel */}
          <div className="w-full py-6 px-2 md:px-6 bg-[#23263a] border-b border-primary/10">
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent pb-2">
              {screenshots.map((src, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-primary/20 bg-[#181c2b] shadow-lg min-w-[260px] max-w-[340px] flex-shrink-0">
                  <img src={src} alt={`Twirlshop Screenshot ${idx+1}`} className="w-full object-cover" style={{maxHeight: 200}} />
                </div>
              ))}
            </div>
          </div>
          {/* Details Section */}
          <div className="flex-1 flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-8">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5 bg-muted/50 text-foreground-subtle">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2 leading-tight">
                Twirlshop - A Futuristic E-commerce Platform
              </h1>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Overview</h2>
              <p className="mb-4 text-base text-foreground-subtle">Twirlshop represents a next-generation e-commerce platform designed to revolutionize the online shopping experience through cutting-edge technology and innovative design. This comprehensive web application showcases a futuristic aesthetic while maintaining user-friendly functionality, positioning itself as "the future of online shopping."</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Vision & Concept</h2>
              <p className="mb-4 text-base text-foreground-subtle">The core vision behind Twirlshop was to create an e-commerce platform that breaks away from traditional shopping interfaces and embraces a futuristic, technology-forward approach. The platform is designed around the concept of providing customers with "tomorrow's technology today," emphasizing innovation, security, and user experience.</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Key Branding Elements</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Brand Name:</b> Twirlshop - suggesting dynamic movement and innovation</li>
                <li><b>Tagline:</b> "Experience the future of online shopping"</li>
                <li><b>Visual Identity:</b> Dark, modern interface with vibrant blue accent colors</li>
                <li><b>Target Audience:</b> Tech-savvy consumers looking for cutting-edge products and shopping experiences</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Technical Architecture & Development</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Frontend:</b> HTML5, CSS3, JavaScript, Responsive Design, Modern UI/UX</li>
                <li><b>Design System:</b> Consistent dark theme, blue accents, modern typography, responsive cards, icon navigation, smooth transitions</li>
                <li><b>Layout:</b> Header nav, hero sections, feature showcases, authentication forms, footer</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Key Features & Functionality</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Lightning Fast Performance: Quantum-speed delivery, optimized loading, PWA capabilities</li>
                <li>Advanced Security: Military-grade encryption, secure payments, privacy protection, 2FA</li>
                <li>Innovative Delivery: Drone network, real-time tracking, sustainable logistics</li>
                <li>Product Discovery: Advanced search, trending/new arrivals, category management</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">User Experience & Flow</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Homepage: Hero, feature showcase, trending products, testimonials</li>
                <li>Authentication: Email/social login, registration, password recovery</li>
                <li>Shopping: Product browsing, search, details, cart, checkout</li>
                <li>Account: Order history, wishlist, loyalty programs</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Business Logic & Management</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Personalization, loyalty, social integration, customer support</li>
                <li>Inventory, category, stock, pricing, order management</li>
                <li>Payment integration, shipping calculator, order tracking</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Performance, Security & SEO</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Image optimization, CDN, caching, minification</li>
                <li>Semantic HTML, meta tags, schema, sitemap</li>
                <li>HTTPS, PCI/GDPR compliance, secure sessions</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Challenges & Solutions</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Futuristic design with usability: Balanced modern/familiar patterns</li>
                <li>Consistent branding: Comprehensive design system</li>
                <li>Responsive design: Mobile-first, flexible layouts</li>
                <li>Performance: Image/code optimization, caching</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-10">Technical Architecture: End-to-End</h2>
              <p className="mb-4 text-base text-foreground-subtle">Twirlshop is architected as a scalable, modular, and maintainable e-commerce platform. The frontend is built with a component-driven approach, leveraging React and TypeScript for type safety and maintainability. State management is handled using a combination of React Context and Redux Toolkit for global state, with React Query for data fetching and caching. The backend (future roadmap) is designed for microservices, with Node.js/Express, MongoDB for product/user data, and Redis for caching. The platform is containerized using Docker, with CI/CD pipelines for automated testing and deployment via GitHub Actions and cloud hosting (Vercel/AWS).</p>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Frontend Engineering & UI/UX</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Atomic design system: All UI is built from atomic, molecular, and organism components, ensuring reusability and consistency.</li>
                <li>Advanced CSS: Uses TailwindCSS for utility-first styling, with custom themes, dark mode, and responsive breakpoints.</li>
                <li>Accessibility: All interactive elements are keyboard navigable, with ARIA labels, color contrast checks, and screen reader support.</li>
                <li>Animations: Framer Motion powers smooth transitions, page animations, and micro-interactions for a delightful user experience.</li>
                <li>Performance: Code splitting, lazy loading, and image optimization (WebP, responsive images) ensure fast load times.</li>
                <li>Testing: Unit and integration tests are written with Jest and React Testing Library, with E2E tests planned using Cypress.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Backend, API & DevOps (Planned)</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>RESTful API: Modular endpoints for products, users, orders, and payments, with JWT-based authentication and RBAC.</li>
                <li>Database: MongoDB for flexible, scalable data storage; Mongoose for schema validation; Redis for session and cache.</li>
                <li>Security: Helmet, rate limiting, input validation, and secure password hashing (bcrypt/argon2).</li>
                <li>DevOps: Dockerized services, GitHub Actions for CI/CD, automated tests, and blue/green deployments.</li>
                <li>Monitoring: Integration with Sentry, Datadog, and custom logging for error and performance monitoring.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Design Decisions & Branding</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Branding: The Twirlshop brand is built around movement, innovation, and trust. The logo, color palette, and typography are chosen for a futuristic yet approachable feel.</li>
                <li>Visual Language: Consistent use of blue accents, gradients, and glassmorphism effects create a high-tech, premium look.</li>
                <li>Imagery: Product and UI screenshots are carefully curated and optimized for clarity and impact.</li>
                <li>Content: All copy is written to be clear, concise, and persuasive, with a focus on user benefits and value.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Business Strategy & Growth</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Market Research: Competitive analysis of top e-commerce platforms (Amazon, Shopify, etc.) to identify gaps and opportunities.</li>
                <li>Target Audience: Tech-savvy, design-conscious consumers seeking a next-gen shopping experience.</li>
                <li>Growth Plan: SEO optimization, content marketing, social media campaigns, and influencer partnerships.</li>
                <li>Analytics: Google Analytics, custom event tracking, and A/B testing for continuous improvement.</li>
                <li>Monetization: Multiple revenue streams including product sales, affiliate marketing, and premium features.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Security, Compliance & Privacy</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Compliance: GDPR, CCPA, and PCI-DSS compliance for user data and payment processing.</li>
                <li>Privacy: Transparent privacy policy, cookie consent, and user data anonymization.</li>
                <li>Security Audits: Regular penetration testing, vulnerability scanning, and code reviews.</li>
                <li>Incident Response: Automated alerts, rollback procedures, and disaster recovery plans.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Testing, QA & CI/CD</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Automated Testing: Unit, integration, and E2E tests for all critical flows.</li>
                <li>Manual QA: Cross-browser and device testing, accessibility audits, and user testing sessions.</li>
                <li>CI/CD: Automated build, test, and deploy pipelines with rollback on failure.</li>
                <li>Monitoring: Real-time error and performance tracking with actionable alerts.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Future Vision & Innovation</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>AI/ML: Personalized recommendations, dynamic pricing, and fraud detection.</li>
                <li>AR/VR: Virtual try-on, 3D product previews, and immersive shopping experiences.</li>
                <li>Blockchain: Loyalty programs, crypto payments, and transparent supply chain.</li>
                <li>IoT: Smart home integration for automated reordering and delivery tracking.</li>
                <li>Voice & Chat: Natural language search, voice checkout, and AI-powered support.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Personal Reflections & Lessons Learned</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Technical Growth: Mastery of modern frontend frameworks, state management, and performance optimization.</li>
                <li>Design Maturity: Deepened understanding of UI/UX, accessibility, and branding.</li>
                <li>Project Management: Improved planning, documentation, and agile workflows.</li>
                <li>Collaboration: Experience working with designers, testers, and stakeholders.</li>
                <li>Problem Solving: Creative solutions to technical and design challenges.</li>
                <li>Portfolio Impact: Twirlshop stands as a flagship project, demonstrating full-stack capability, design sensibility, and business acumen.</li>
              </ul>
              <h2 className="text-xl font-bold text-gradient-primary mb-2 mt-8">Appendix: Technology Stack & Tools</h2>
              <ul className="mb-8 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Frontend: React, TypeScript, TailwindCSS, Framer Motion, Redux Toolkit, React Query</li>
                <li>Backend (planned): Node.js, Express, MongoDB, Redis, JWT, Docker</li>
                <li>DevOps: GitHub Actions, Vercel/AWS, Docker Compose</li>
                <li>Testing: Jest, React Testing Library, Cypress</li>
                <li>Design: Figma, Adobe XD, Illustrator</li>
                <li>Analytics: Google Analytics, custom event tracking</li>
                <li>Monitoring: Sentry, Datadog</li>
              </ul>
              <div className="flex gap-4 flex-wrap mt-10 mb-4 px-4 md:px-8 justify-start">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium text-primary-foreground font-medium px-6 py-3 text-base">
                    <Play className="w-5 h-5 mr-2" /> Live Demo
                  </Button>
                </a>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="glass border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 text-base">
                    <Github className="w-5 h-5 mr-2" /> Code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TalkTwirl custom gallery and details
  if (project.id === 2 || project.id === 8) {
    // Use the same images for both TalkTwirl and TalkTwirl Web
    const talktwirlImages = [
      'https://i.postimg.cc/zvMH0FX0/Whats-App-Image-2025-08-21-at-23-13-21-7425e168.jpg',
      'https://i.postimg.cc/T1hWV4GK/Whats-App-Image-2025-08-21-at-23-13-23-626e5090.jpg',
      'https://i.postimg.cc/05HSkPdD/Whats-App-Image-2025-08-21-at-23-13-26-9d2124e3.jpg',
      'https://i.postimg.cc/Qx9TVw0P/Whats-App-Image-2025-08-21-at-23-13-27-157dcd83.jpg',
      'https://i.postimg.cc/DzFJjZnk/Whats-App-Image-2025-08-21-at-23-13-28-a9ba2fc0.jpg',
      'https://i.postimg.cc/fTG0dCPb/Whats-App-Image-2025-08-21-at-23-13-28-c4154081.jpg',
      'https://i.postimg.cc/dVGZjdMj/Whats-App-Image-2025-08-21-at-23-13-28-d043f1bd.jpg',
      'https://i.postimg.cc/Bb8XLPcD/Whats-App-Image-2025-08-21-at-23-13-29-427f6451.jpg',
      'https://i.postimg.cc/TP9yZ63y/Whats-App-Image-2025-08-21-at-23-13-29-d68bc36d.jpg',
      'https://i.postimg.cc/9MQ42nDL/Whats-App-Image-2025-08-21-at-23-13-30-b3c07d76.jpg',
      'https://i.postimg.cc/0jLrp5c4/Whats-App-Image-2025-08-21-at-23-13-30-c8ea0257.jpg',
      'https://i.postimg.cc/zDMLmp8k/Whats-App-Image-2025-08-21-at-23-13-31-1f0acf33.jpg',
      'https://i.postimg.cc/wTm19JBY/Whats-App-Image-2025-08-21-at-23-20-07-25484983.jpg',
    ];
    return (
      <div className="dark-page flex flex-col px-2 py-8">
        {/* Back Button */}
        <div className="max-w-6xl w-full mx-auto mb-4">
          <Button variant="ghost" className="flex items-center gap-2 text-lg" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>
        </div>
        {/* Unified Card Layout */}
        <div className="max-w-6xl w-full mx-auto bg-gradient-to-br from-[#23263a] to-[#181c2b] rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up p-0 md:p-8 flex flex-col">
          {/* Screenshot Carousel */}
          <div className="w-full py-6 px-2 md:px-6 bg-[#23263a] border-b border-primary/10">
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent pb-2">
              {talktwirlImages.map((src, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-primary/20 bg-[#181c2b] shadow-lg min-w-[260px] max-w-[340px] flex-shrink-0">
                  <img src={src} alt={`TalkTwirl Screenshot ${idx+1}`} className="w-full object-cover" style={{maxHeight: 600}} />
                </div>
              ))}
            </div>
          </div>
          {/* Details Section */}
          <div className="flex-1 flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-8">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5 bg-muted/50 text-foreground-subtle">{tag}</Badge>
                ))}
              </div>
              {/* Removed redundant project.title heading for TalkTwirl - Social Media App */}
              {project.id === 2 || project.id === 8 ? (
                <div className="max-w-none text-foreground-subtle">
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2 leading-tight">{project.id === 2 ? 'Talktwirl – Next-Generation Social Communication Platform' : 'Talktwirl Web – Advanced Social Communication for the Modern Web'}</h2>
                  <h3 className="text-lg font-semibold text-primary mb-2">Project Overview</h3>
                  <p className="mb-4 text-base">{project.id === 2
                    ? 'Talktwirl is a modern social media and messaging platform designed for seamless, secure, and engaging communication. Built with a strong focus on both usability and trust, Talktwirl enables users to connect, share media, and engage in conversations within a visually distinctive dark-themed environment. The application demonstrates advanced UX thinking, rigorous security practices, and contemporary branding resulting in a polished product for today’s digital landscape.'
                    : 'Talktwirl Web elevates the Talktwirl experience to the browser, offering seamless, secure, and engaging communication for users on any device. With a focus on web-first performance, accessibility, and progressive enhancement, Talktwirl Web delivers all the power of the original app—now optimized for desktop and mobile browsers with advanced PWA features and a refined, responsive interface.'}
                  </p>
                  <h3 className="text-lg font-semibold text-primary mb-2">Branding & Visual Identity</h3>
                  <ul className="mb-4 text-base list-disc list-inside space-y-1">
                    <li><b>Logo & Splash Screen:</b> The app features a high-impact, abstract swirl logo set on a minimalist black background, delivering immediate visual recognition and a futuristic vibe upon launch. <br/> <b>Powered by Luohino</b> appears on the splash screen, signifying industry-grade backend infrastructure or technology partner, and strengthening credibility.</li>
                    <li><b>Visual Design:</b> Utilizes a dark mode UI throughout, aligning with current user preferences and enhancing visual comfort. Typography is bold and modern, ensuring high readability. Accent colors (particularly blue for actionable links) provide a crisp, interactive feel and guide the user's attention.</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-primary mb-2">User Authentication & Security</h3>
                  <ul className="mb-4 text-base list-disc list-inside space-y-1">
                    <li>The platform features a robust login system supporting both username/email and password, with mandatory Terms & Conditions and Community Guidelines consent to foster a safe digital environment.</li>
                    <li>Password entry is masked, with an option to toggle visibility for user convenience.</li>
                    <li>Includes clear pathways for password recovery and account registration, reducing access friction and user drop-off.</li>
                    <li>Privacy and security are embedded through explicit legal agreements visible before authentication, with compliance for minimum age and responsible platform use.</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-primary mb-2">Onboarding & UX Flow</h3>
                  <ol className="mb-4 text-base list-decimal list-inside space-y-1">
                    <li><b>Splash Screen:</b> Greets users with the brand’s signature swirl logo and a “Powered by Luohino” tag, setting the tone for a high-tech experience.</li>
                    <li><b>Login Screen:</b> Minimalist input fields for username/email and password. Checkbox for mandatory acceptance of terms and guidelines. Prominently displayed call-to-action for logging in, with fallback links for password reset and sign-up navigation. Accessibility is enhanced by clear text hierarchy and actionable elements.</li>
                    <li><b>Registration Flow:</b> Simple interface prompting email input as the first step, ensuring clarity and focus for user onboarding. Smooth transitions between registration and login for seamless UX.</li>
                    <li><b>Terms & Conditions:</b> Detailed, versioned Terms & Conditions page, with a clear effective date and explicit notice for user consent. Introduces Talktwirl as both a public and private communication platform, emphasizing transparency in policies and ensuring users understand their rights and obligations from the outset. User must be at least 13 years old, ensuring platform compliance with COPPA and similar regulatory requirements.</li>
                  </ol>
                  <h3 className="text-lg font-semibold text-primary mb-2">Key Features</h3>
                  <ul className="mb-4 text-base list-disc list-inside space-y-1">
                    <li><b>Modern Authentication:</b> Secure login and account recovery, including strong password practices and legal compliance.</li>
                    <li><b>Community Safety:</b> Mandatory agreement to legal and community policies up front.</li>
                    <li><b>Brand Cohesion:</b> Consistent dark mode with branded color scheme and typographic standards.</li>
                    <li><b>Accessible Design:</b> All text is readable at various screen sizes, navigation is intuitive, and action items are clearly labeled.</li>
                    {project.id === 2 ? (
                      <li><b>Mobile-First:</b> UI is optimized for mobile layouts, ensuring perfect usability on modern smartphones.</li>
                    ) : (
                      <>
                        <li><b>Mobile-First & Web-Optimized:</b> UI is optimized for both mobile and desktop layouts, ensuring perfect usability on all devices. Enhanced accessibility features and keyboard navigation for web users.</li>
                        <li><b>Progressive Web App (PWA):</b> Installable on desktop and mobile, with offline support and push notifications for real-time engagement.</li>
                      </>
                    )}
                  </ul>
                  <h3 className="text-lg font-semibold text-primary mb-2">Technology & Implementation</h3>
                  <ul className="mb-4 text-base list-disc list-inside space-y-1">
                    {project.id === 2 ? (
                      <>
                        <li>Designed for scalable deployment and robust security on mobile platforms, potentially leveraging cross-platform technologies (Flutter, React Native, native Android/iOS).</li>
                        <li>Backend presumably integrates with Luohino, suggesting cloud-based or enterprise infrastructure.</li>
                        <li>Implements modular UI components, facilitating maintenance, scalability, and rapid future enhancements.</li>
                      </>
                    ) : (
                      <>
                        <li>Built with modern web technologies (React, TypeScript, TailwindCSS) for a fast, responsive, and maintainable codebase.</li>
                        <li>Leverages cloud-based backend (Luohino) for scalable, secure data storage and real-time communication.</li>
                        <li>Implements modular UI components, facilitating maintenance, scalability, and rapid future enhancements.</li>
                        <li>Optimized for SEO and web performance, including lazy loading, code splitting, and image optimization.</li>
                      </>
                    )}
                  </ul>
                  <h3 className="text-lg font-semibold text-primary mb-2">Challenges & Solutions</h3>
                  <ul className="mb-4 text-base list-disc list-inside space-y-1">
                    {project.id === 2 ? (
                      <>
                        <li><b>Legal & Compliance:</b> Crafting clear terms and mandatory agreement flow to proactively address privacy and user safety.</li>
                        <li><b>Streamlined Onboarding:</b> Maintained a balance between strong security requirements and user-friendly, minimal-touch flows, reducing signup and login friction without compromising compliance.</li>
                        <li><b>Brand Differentiation:</b> Developed a custom icon and consistent visual language to elevate brand perception and differentiate from generic social platforms.</li>
                      </>
                    ) : (
                      <>
                        <li><b>Web Accessibility:</b> Ensured full keyboard navigation, ARIA labeling, and color contrast for all users.</li>
                        <li><b>Performance:</b> Utilized advanced caching, CDN delivery, and code optimization for instant load times.</li>
                        <li><b>Legal & Compliance:</b> Crafted clear terms and mandatory agreement flow to proactively address privacy and user safety.</li>
                        <li><b>Brand Differentiation:</b> Developed a custom icon and consistent visual language to elevate brand perception and differentiate from generic social platforms.</li>
                      </>
                    )}
                  </ul>
                  <h3 className="text-lg font-semibold text-primary mb-2">Future Enhancements</h3>
                  <ul className="mb-4 text-base list-disc list-inside space-y-1">
                    <li>Expand to multi-factor authentication for increased account security.</li>
                    <li>Introduce social sign-on options (e.g., Google, Facebook, Apple).</li>
                    <li>Develop advanced content moderation and reporting features to support healthy community growth.</li>
                    <li>Personalization via onboarding questions or interests.</li>
                    {project.id === 8 && <li>Deeper integration with browser APIs for richer PWA experience (e.g., file uploads, notifications).</li>}
                  </ul>
                  <h3 className="text-lg font-semibold text-primary mb-2">Project Impact</h3>
                  <p className="mb-4 text-base">{project.id === 2
                    ? 'The Talktwirl platform demonstrates best practices in secure onboarding, legal compliance, dark UI design, and mobile-first usability. It serves as proof of expertise in end-to-end app development, product design, and user experience optimization—making it an outstanding showcase for modern digital product development.'
                    : 'Talktwirl Web sets a new standard for browser-based social platforms, combining the power of modern web technologies with a seamless, secure, and visually stunning user experience. It demonstrates expertise in web app development, accessibility, and product design—making it a flagship showcase for next-generation digital communication on the web.'}
                  </p>
                </div>
              ) : null}
              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap mt-10 mb-4 px-4 md:px-8 justify-start">
                {project.id === 2 && (
                  <a href="https://github.com/Luohino/Talktwirl/releases/tag/v2" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="btn-premium text-primary-foreground font-medium px-6 py-3 text-base">
                      <Play className="w-5 h-5 mr-2" /> Live Demo
                    </Button>
                  </a>
                )}
                {project.id === 8 && (
                  <>
                    <a href="https://luohino.github.io/Talktwirl/" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="btn-premium text-primary-foreground font-medium px-6 py-3 text-base">
                        <Play className="w-5 h-5 mr-2" /> Live Demo
                      </Button>
                    </a>
                    <a href="https://github.com/Luohino/Talktwirl" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="glass border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 text-base">
                        <Github className="w-5 h-5 mr-2" /> Code
                      </Button>
                    </a>
                  </>
                )}
                {/* For other projects, fallback to default demoUrl/codeUrl logic if needed */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Twirl Notes custom gallery and details
  if (project.id === 7) {
    const twirlNotesImages = [
      'https://i.postimg.cc/1RH8XPGJ/Whats-App-Image-2025-08-21-at-23-16-21-a7d4a844.jpg',
      'https://i.postimg.cc/NjyFdHWz/Whats-App-Image-2025-08-21-at-23-16-29-f9225e97.jpg',
      'https://i.postimg.cc/pLgT4dvX/Whats-App-Image-2025-08-21-at-23-16-35-17bc0b98.jpg',
      'https://i.postimg.cc/0NDQsq5G/Whats-App-Image-2025-08-21-at-23-16-37-dbdbe62b.jpg',
      'https://i.postimg.cc/pTvdV1yw/Whats-App-Image-2025-08-21-at-23-16-40-1fe6fdb5.jpg',
      'https://i.postimg.cc/j5hSDQ7L/Whats-App-Image-2025-08-21-at-23-16-41-18a27957.jpg',
      'https://i.postimg.cc/RhVVK67G/Whats-App-Image-2025-08-21-at-23-16-42-c324b763.jpg',
      'https://i.postimg.cc/vHZc6jXM/Whats-App-Image-2025-08-21-at-23-16-43-de95db72.jpg',
      'https://i.postimg.cc/fTqk7Kgd/Whats-App-Image-2025-08-21-at-23-16-44-cee79b02.jpg',
    ];
    return (
      <div className="dark-page flex flex-col px-2 py-8">
        {/* Back Button */}
        <div className="max-w-6xl w-full mx-auto mb-4">
          <Button variant="ghost" className="flex items-center gap-2 text-lg" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>
        </div>
        {/* Unified Card Layout */}
        <div className="max-w-6xl w-full mx-auto bg-gradient-to-br from-[#23263a] to-[#181c2b] rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up p-0 md:p-8 flex flex-col">
          {/* Screenshot Carousel */}
          <div className="w-full py-6 px-2 md:px-6 bg-[#23263a] border-b border-primary/10">
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent pb-2">
              {twirlNotesImages.map((src, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-primary/20 bg-[#181c2b] shadow-lg min-w-[260px] max-w-[340px] flex-shrink-0">
                  <img src={src} alt={`Twirl Notes Screenshot ${idx+1}`} className="w-full object-cover" style={{maxHeight: 600}} />
                </div>
              ))}
            </div>
          </div>
          {/* Details Section */}
          <div className="flex-1 flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-8">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5 bg-muted/50 text-foreground-subtle">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2 leading-tight">
                Twirl-Notes – Intelligent Note-Taking & Productivity Platform
              </h1>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Overview</h2>
              <p className="mb-4 text-base text-foreground-subtle">Twirl-Notes is an innovative mobile note-taking and productivity app engineered for the next generation of digital thinkers, creators, and professionals. With a sleek, dark-themed interface and AI-powered features, Twirl-Notes is designed to streamline idea capture, enhance creative workflows, and help users stay organized, whether at work, school, or home.</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Core Concept & Vision</h2>
              <p className="mb-4 text-base text-foreground-subtle">The core vision of Twirl-Notes is to transcend basic note-taking by integrating smart utilities like AI-powered suggestions, seamless Google login, and productivity-enhancing tools—all while maintaining an intuitive, clutter-free user experience. The app is aimed at users who value efficiency, creativity, and intelligent organization in their everyday digital lives.</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Key Features</h2>
              <ol className="mb-4 text-base text-foreground-subtle list-decimal list-inside space-y-1">
                <li><b>Seamless, Modern Onboarding</b><br/>
                  <b>Welcome Screen:</b> Minimalist design with an appealing notepad icon and inviting welcome text.<br/>
                  <b>Google Auth Integration:</b> One-tap login with Google ensures a frictionless and secure user entry, while the option to “Skip” offers flexibility for privacy-focused users.
                </li>
                <li><b>Organized Note Management</b><br/>
                  <b>Pinned Notes:</b> Highlights and prioritizes critical ideas at the top for easy access.<br/>
                  <b>Categories:</b> Segregation between “Pinned” and “Others” keeps everything organized for faster retrieval.<br/>
                  <b>Notes & To-dos Integration:</b> Bifurcated navigation bar (Notes and To-dos) at the bottom empowers users to manage thoughts and actionable tasks simultaneously.
                </li>
                <li><b>Dynamic To-do Functionality</b><br/>
                  <b>Task Creation:</b> Users can rapidly add, view, complete, or delete to-do items in a streamlined, distraction-free environment.<br/>
                  <b>Context Switching:</b> Fast toggling between notes and tasks enhances workflow continuity.
                </li>
                <li><b>AI-Powered Note Enhancement</b><br/>
                  Inside each note, advanced smart actions are surfaced, including:
                  <ul className="list-disc list-inside ml-6">
                    <li>Summarize Note: Quickly condenses lengthy notes to bite-sized summaries.</li>
                    <li>Rewrite Note: Generates alternative wordings for clarity or creativity.</li>
                    <li>Convert to Tasks: Automatically breaks notes into actionable items.</li>
                    <li>Enhance with Emojis: Adds expressive icons to increase engagement or context.</li>
                    <li>Translate: Instantly renders note content in multiple languages.</li>
                    <li>Detect Mood: AI analyzes note sentiment to offer mood insights.</li>
                    <li>Brainstorm Ideas: Suggests related or expanded ideas to spark creativity.</li>
                    <li>Auto Categorize: Classifies notes for smarter organization.</li>
                  </ul>
                </li>
              </ol>
              <h2 className="text-lg font-semibold text-primary mb-2">User Journey & Design Principles</h2>
              <h3 className="text-base font-semibold text-primary mb-1">Navigation & Layout</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Hamburger Menu & Search:</b> Intuitive access to additional settings and fast search.</li>
                <li><b>Grid/List Toggle:</b> Customizable note viewing options for user preference.</li>
                <li><b>Floating Action Button (+):</b> Encourages quick note or to-do creation from any screen.</li>
                <li><b>Consistent Dark Mode:</b> Maximizes comfort and battery efficiency, especially on AMOLED displays.</li>
              </ul>
              <h3 className="text-base font-semibold text-primary mb-1">Usability & Accessibility</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Large, Readable Fonts:</b> Emphasize clarity and ease of use, particularly in low-light conditions.</li>
                <li><b>Accessible Layout:</b> Key functions are reachable within a thumb’s span for single-handed operation.</li>
                <li><b>Minimal Distractions:</b> UI elements are purposefully minimal to focus the user’s attention on content creation and management.</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Technical Implementation</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Mobile-First & Cross-Platform:</b> Built to scale efficiently on both Android and iOS ecosystems, leveraging modern frameworks for performance and reliability.</li>
                <li><b>Authentication & Security:</b> Utilizes OAuth for Google sign-in; provides optional guest mode (“Skip”) for privacy.</li>
                <li><b>AI Integrations:</b> Deploys cloud-based or on-device AI APIs for note summarization, translation, and other smart features.</li>
                <li><b>Modular Architecture:</b> Codebase structured for maintainability, allowing rapid addition of new features.</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Challenges & Solutions</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Balancing Simplicity with Power:</b> Delivered robust AI-driven tools beneath an elegantly minimal UI, ensuring neither overwhelms the user.</li>
                <li><b>Real-Time Updates:</b> Used efficient state management techniques for instant updates across notes and tasks.</li>
                <li><b>Intelligent Categorization:</b> Developed algorithms to auto-organize notes, reducing user friction and boosting productivity.</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Future Enhancements</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li>Cross-device sync for seamless access from any device.</li>
                <li>Voice and handwriting input support for multimodal note capture.</li>
                <li>Collaborative notes and shared workspaces for teams.</li>
                <li>Deeper AI personalization (adaptive reminders, contextual prioritization).</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Impact</h2>
              <p className="mb-4 text-base text-foreground-subtle">Twirl-Notes demonstrates expertise in mobile UI/UX design, modern authentication, productivity tool development, and practical AI application. It stands out as both a user-friendly app and a technically sophisticated solution—an excellent addition to any professional product or engineering portfolio.</p>
              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap mt-10 mb-4 px-4 md:px-8 justify-start">
                {/* Live Demo button uses the specified release link for Twirl Notes */}
                <a href="https://github.com/Luohino/Twirl-Notes/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium text-primary-foreground font-medium px-6 py-3 text-base">
                    <Play className="w-5 h-5 mr-2" /> Live Demo
                  </Button>
                </a>
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="glass border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 text-base">
                      <Github className="w-5 h-5 mr-2" /> Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pinsry custom gallery and details
  if (project.id === 9) {
    const pinsryImages = [
      'https://i.postimg.cc/x8NKMm4d/Screenshot-2025-09-27-19-42-57-41-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/RqrwR0kF/Screenshot-2025-09-27-19-43-04-18-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/BtW2gvr1/Screenshot-2025-09-27-19-43-05-46-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/7P5cmQFc/Screenshot-2025-09-27-19-43-07-34-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/HWrKBhGm/Screenshot-2025-09-27-19-43-09-27-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/gc175Hdn/Screenshot-2025-09-27-19-43-12-23-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/XNtPhk3d/Screenshot-2025-09-27-19-43-14-25-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/CM92tsYv/Screenshot-2025-09-27-19-43-16-96-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/CM92tsYQ/Screenshot-2025-09-27-19-43-23-27-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/gkR7PLks/Screenshot-2025-09-27-19-43-31-78-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/hPxYqQPp/Screenshot-2025-09-27-19-43-37-48-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/7ZkWPP50/Screenshot-2025-09-27-19-43-42-41-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/28vtfL8t/Screenshot-2025-09-27-19-43-45-63-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/28vtfL8P/Screenshot-2025-09-27-19-43-50-16-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/T36422KY/Screenshot-2025-09-27-19-43-52-71-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/DwPYSVGd/Screenshot-2025-09-27-19-43-54-04-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/52SkXczn/Screenshot-2025-09-27-19-43-56-00-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/8CkXWydy/Screenshot-2025-09-27-19-43-59-57-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/R0CpfP1D/Screenshot-2025-09-27-19-44-01-83-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/sXXPfqPp/Screenshot-2025-09-27-19-44-08-71-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/mDD3ZJ3b/Screenshot-2025-09-27-19-44-19-08-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/Pxxbf9bT/Screenshot-2025-09-27-19-44-20-51-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/QttgNwgj/Screenshot-2025-09-27-19-44-21-61-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/W33mpCmp/Screenshot-2025-09-27-19-44-22-68-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/XJJKNmKC/Screenshot-2025-09-27-19-44-23-82-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/QttgNwg7/Screenshot-2025-09-27-19-44-25-30-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/d1x2h6nG/Screenshot-2025-09-27-19-44-28-17-bb2b602500b4b39732013a74616b7e4c.jpg',
      'https://i.postimg.cc/rmmGy3GN/Screenshot-2025-09-27-19-44-30-22-bb2b602500b4b39732013a74616b7e4c.jpg',
    ];
    return (
      <div className="dark-page flex flex-col px-2 py-8">
        {/* Back Button */}
        <div className="max-w-6xl w-full mx-auto mb-4">
          <Button variant="ghost" className="flex items-center gap-2 text-lg" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>
        </div>
        {/* Unified Card Layout */}
        <div className="max-w-6xl w-full mx-auto bg-gradient-to-br from-[#23263a] to-[#181c2b] rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up p-0 md:p-8 flex flex-col">
          {/* Screenshot Carousel */}
          <div className="w-full py-6 px-2 md:px-6 bg-[#23263a] border-b border-primary/10">
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent pb-2">
              {pinsryImages.map((src, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-primary/20 bg-[#181c2b] shadow-lg min-w-[260px] max-w-[340px] flex-shrink-0">
                  <img src={src} alt={`Pinsry Screenshot ${idx+1}`} className="w-full object-cover" style={{maxHeight: 600}} />
                </div>
              ))}
            </div>
          </div>
          {/* Details Section */}
          <div className="flex-1 flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-8">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5 bg-muted/50 text-foreground-subtle">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2 leading-tight">
                Pinsry - A Comprehensive Bedtime Stories Platform
              </h1>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Overview</h2>
              <p className="mb-4 text-base text-foreground-subtle">Pinsry represents a sophisticated, Wattpad-inspired mobile application built with Flutter and Supabase, specifically designed to revolutionize the bedtime story experience. This comprehensive platform combines the social aspects of story sharing with the intimate nature of bedtime storytelling, creating a unique community where writers and readers connect through engaging narratives designed to inspire dreams and peaceful sleep.</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Vision & Concept</h2>
              <p className="mb-4 text-base text-foreground-subtle">The core vision behind Pinsry is to transform traditional bedtime storytelling into a modern, community-driven digital experience. The platform bridges the gap between classic bedtime stories and contemporary social reading platforms, emphasizing relaxation, imagination, and quality content specifically curated for evening reading sessions. Pinsry positions itself as "Where bedtime stories come to life ✨," focusing on creating a peaceful, engaging environment for both storytellers and story enthusiasts.</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Key Branding Elements</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Brand Name:</b> Pinsry - suggesting pinned stories and dreamy narratives</li>
                <li><b>Tagline:</b> "Where bedtime stories come to life ✨"</li>
                <li><b>Visual Identity:</b> Purple-themed interface (#8B5CF6) with light, dreamy backgrounds (#F8F9FF)</li>
                <li><b>Typography:</b> Quicksand for clean readability, Pacifico for brand identity, Comfortaa for accent text</li>
                <li><b>Target Audience:</b> Families, bedtime story enthusiasts, creative writers, and anyone seeking peaceful evening content</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Technical Architecture & Development</h2>
              <h3 className="text-base font-semibold text-primary mb-1">Frontend (Flutter)</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Framework:</b> Flutter SDK with Dart 3.8.1+</li>
                <li><b>State Management:</b> Provider pattern for app-wide state management</li>
                <li><b>Navigation:</b> Custom bottom navigation with IndexedStack for state preservation</li>
                <li><b>UI/UX:</b> Material Design with custom theming, Google Fonts integration</li>
                <li><b>Responsive Design:</b> Adaptive layouts for various screen sizes and orientations</li>
                <li><b>Performance:</b> Lazy loading, image caching, and optimized animations</li>
              </ul>
              <h3 className="text-base font-semibold text-primary mb-1">Backend (Supabase)</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Database:</b> PostgreSQL with Row Level Security (RLS) policies</li>
                <li><b>Authentication:</b> Supabase Auth with email/password, OTP verification, and Google Sign-In</li>
                <li><b>Storage:</b> Secure file uploads for profile images, story covers, and audio files</li>
                <li><b>Real-time Features:</b> Live updates for comments, likes, and social interactions</li>
                <li><b>Edge Functions:</b> Serverless backend logic for complex operations</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Key Features & Functionality</h2>
              <h3 className="text-base font-semibold text-primary mb-1">Core Story Features</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Story Creation:</b> Rich text editor with formatting options, cover image upload</li>
                <li><b>Reading Experience:</b> Immersive reading interface with reading time estimates</li>
                <li><b>Offline Reading:</b> Download stories for offline access with SQLite local storage</li>
                <li><b>Audio Integration:</b> Text-to-speech capabilities and audio story support</li>
                <li><b>Story Discovery:</b> Advanced search, filtering by categories, trending algorithms</li>
              </ul>
              <h3 className="text-base font-semibold text-primary mb-1">Social & Community Features</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>User Profiles:</b> Customizable profiles with bio, photo, and follower system</li>
                <li><b>Comments System:</b> Threaded comments with voting and moderation</li>
                <li><b>Bookmarks & Reading Lists:</b> Personal collections and favorite story management</li>
                <li><b>Likes & Voting:</b> Story appreciation with sophisticated voting system</li>
                <li><b>Follow System:</b> Author following with activity feeds and notifications</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Future Enhancements</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>AI Story Generation:</b> Machine learning-powered story suggestions and completion</li>
                <li><b>Voice Narration:</b> Professional voice actor recordings for premium stories</li>
                <li><b>Collaborative Writing:</b> Multi-author story creation and editing</li>
                <li><b>Reading Challenges:</b> Community events and reading milestone achievements</li>
                <li><b>Premium Subscriptions:</b> Enhanced features for dedicated users</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Impact</h2>
              <p className="mb-4 text-base text-foreground-subtle">Pinsry demonstrates expertise in Flutter development, backend integration with Supabase, social platform architecture, and user-centered design for creative communities. It showcases the ability to build sophisticated mobile applications with real-time features, offline capabilities, and engaging user experiences.</p>
              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap mt-10 mb-4 px-4 md:px-8 justify-start">
                <a href="https://github.com/Luohino/Pinsry/releases/tag/v2" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium text-primary-foreground font-medium px-6 py-3 text-base">
                    <Play className="w-5 h-5 mr-2" /> Live Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // MegaChat custom gallery and details
  if (project.id === 10) {
    const megachatImages = [
      'https://i.postimg.cc/kXpgLZGw/Screenshot-2025-09-27-20-03-05-90-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/6qSxbkch/Screenshot-2025-09-27-20-00-39-69-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/RZt4yZjh/Screenshot-2025-09-27-20-03-08-40-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/fRdDpR6R/Screenshot-2025-09-27-20-03-11-48-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/mg7WV6Hh/Screenshot-2025-09-27-20-03-13-97-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/wjDYFbmM/Screenshot-2025-09-27-20-03-17-33-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/Xv3SPcfw/Screenshot-2025-09-27-20-03-20-89-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/xdYDZyvL/Screenshot-2025-09-27-20-03-25-86-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/ZqctzBHD/Screenshot-2025-09-27-20-03-29-21-548ba7fa16f53ae863800a8b3860f296.jpg',
      'https://i.postimg.cc/tg5QGZkL/Screenshot-2025-09-27-20-03-31-88-548ba7fa16f53ae863800a8b3860f296.jpg',
    ];
    return (
      <div className="dark-page flex flex-col px-2 py-8">
        {/* Back Button */}
        <div className="max-w-6xl w-full mx-auto mb-4">
          <Button variant="ghost" className="flex items-center gap-2 text-lg" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>
        </div>
        {/* Unified Card Layout */}
        <div className="max-w-6xl w-full mx-auto bg-gradient-to-br from-[#23263a] to-[#181c2b] rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up p-0 md:p-8 flex flex-col">
          {/* Screenshot Carousel */}
          <div className="w-full py-6 px-2 md:px-6 bg-[#23263a] border-b border-primary/10">
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent pb-2">
              {megachatImages.map((src, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-primary/20 bg-[#181c2b] shadow-lg min-w-[260px] max-w-[340px] flex-shrink-0">
                  <img src={src} alt={`MegaChat Screenshot ${idx+1}`} className="w-full object-cover" style={{maxHeight: 600}} />
                </div>
              ))}
            </div>
          </div>
          {/* Details Section */}
          <div className="flex-1 flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-8">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5 bg-muted/50 text-foreground-subtle">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2 leading-tight">
                MegaChat - A Modern Real-Time Messaging Platform
              </h1>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Overview</h2>
              <p className="mb-4 text-base text-foreground-subtle">MegaChat represents a contemporary mobile messaging application built with Flutter and Supabase, designed to deliver seamless real-time communication experiences. This comprehensive mobile application combines modern UI design with robust backend functionality, positioning itself as a feature-rich chat platform with enterprise-grade security and user experience.</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Vision & Concept</h2>
              <p className="mb-4 text-base text-foreground-subtle">The core vision behind MegaChat was to create a messaging platform that embraces modern mobile design principles while providing reliable, real-time communication capabilities. The platform is designed around the concept of delivering "seamless 3D communication like never before," emphasizing connectivity, instant messaging, and secure user interactions through an intuitive mobile interface.</p>
              <h2 className="text-lg font-semibold text-primary mb-2">Key Branding Elements</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Brand Name:</b> MegaChat - suggesting powerful, expansive communication capabilities</li>
                <li><b>Tagline:</b> "Connect • Chat • Share" and "Experience seamless 3D communication like never before"</li>
                <li><b>Visual Identity:</b> Dark gradient theme with vibrant cyan accent colors (#00D4FF, #3A47D5)</li>
                <li><b>Target Audience:</b> Mobile users seeking modern, secure, and feature-rich messaging experiences</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Technical Architecture & Development</h2>
              <h3 className="text-base font-semibold text-primary mb-1">Frontend Framework</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Platform:</b> Flutter (Dart) with Material Design 3</li>
                <li><b>State Management:</b> Provider pattern for reactive state management</li>
                <li><b>Navigation:</b> Go Router for declarative routing and navigation</li>
                <li><b>UI Components:</b> Custom widgets with flutter_animate for smooth animations</li>
                <li><b>Design System:</b> Consistent dark theme with gradient overlays, rounded corners, and glassmorphism effects</li>
              </ul>
              <h3 className="text-base font-semibold text-primary mb-1">Backend & Database</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Backend as a Service:</b> Supabase for authentication, database, and real-time subscriptions</li>
                <li><b>Database:</b> PostgreSQL via Supabase with Row Level Security (RLS)</li>
                <li><b>Authentication:</b> Supabase Auth with email/password and social login capabilities</li>
                <li><b>Real-time:</b> Supabase Realtime for live message updates and presence features</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Key Features & Functionality</h2>
              <h3 className="text-base font-semibold text-primary mb-1">Core Messaging Features</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Real-time Messaging:</b> Instant message delivery with live updates using Supabase Realtime</li>
                <li><b>Message Types:</b> Support for text, image, and file attachments</li>
                <li><b>Read Receipts:</b> Message read status tracking and visual indicators</li>
                <li><b>Conversation Management:</b> Threaded conversations with last message previews</li>
                <li><b>Message History:</b> Paginated message loading with efficient data fetching</li>
              </ul>
              <h3 className="text-base font-semibold text-primary mb-1">User Authentication & Profiles</h3>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Secure Authentication:</b> Email/password signup and signin with Supabase Auth</li>
                <li><b>User Profiles:</b> Comprehensive profile management with avatars, bios, and display names</li>
                <li><b>Password Recovery:</b> Email-based password reset functionality</li>
                <li><b>Session Management:</b> Automatic session handling and authentication state persistence</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Future Roadmap & Enhancements</h2>
              <ul className="mb-4 text-base text-foreground-subtle list-disc list-inside space-y-1">
                <li><b>Group Messaging:</b> Multi-user group chat functionality</li>
                <li><b>Voice Messages:</b> Audio message recording and playback</li>
                <li><b>Video Calling:</b> Real-time video communication integration</li>
                <li><b>Media Gallery:</b> Shared media organization and browsing</li>
                <li><b>End-to-End Encryption:</b> Advanced message encryption for privacy</li>
              </ul>
              <h2 className="text-lg font-semibold text-primary mb-2">Project Impact</h2>
              <p className="mb-4 text-base text-foreground-subtle">MegaChat demonstrates comprehensive mobile application development expertise, showcasing Flutter framework proficiency, real-time application architecture with Supabase integration, modern mobile UI/UX design with animations, push notification system implementation, and full-stack mobile development with backend service integration. This project represents a mature, production-ready mobile messaging application that demonstrates understanding of modern mobile development practices and real-time communication systems.</p>
              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap mt-10 mb-4 px-4 md:px-8 justify-start">
                <a href="https://github.com/Luohino/Megachat/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-premium text-primary-foreground font-medium px-6 py-3 text-base">
                    <Play className="w-5 h-5 mr-2" /> Live Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ...handle other projects if needed...
  return null;
};

export default ProjectDetails;

