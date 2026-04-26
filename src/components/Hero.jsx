import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const name = "Preet Verma.";

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero-greeting">Hi, my name is</span>
          <h1 className="hero-name">
            <motion.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
            >
              {name.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block' }}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
            <br />
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ display: 'inline-block' }}
            >
              I build things for the web.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a Software Engineer with over <span className="highlight">4.6 years</span> of experience
          specializing in the MERN stack. I build exceptional and accessible digital experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#projects" className="btn btn-primary">
            Check out my work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://www.linkedin.com/in/preet-verma/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:2000vermapreet@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
