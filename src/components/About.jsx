import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              Hello! My name is John and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              With <strong>4.6 years of professional experience</strong> in the software industry, I specialize in the MERN stack (MongoDB, Express, React, Node.js). I thrive on building scalable backends and pixel-perfect frontends.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          >
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop" 
                alt="Profile Placeholder" 
                className="about-image"
              />
              <div className="about-image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
