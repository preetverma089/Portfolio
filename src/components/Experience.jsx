import { motion } from 'framer-motion';
import { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Product Engineer",
    company: "Innoage Technologies",
    date: "October 2024 - Present",
    description: [
      "Architected scalable E-commerce and POM systems handling 5K+ orders/month with microservices architecture, improved system performance by 30\%"
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Brainium Information Technologies",
    date: "Mar 2023 - September 2024",
    description: [
      "Delivered high-performance web applications using MERN and MEAN stacks, incorporating server-side rendering (SSR) in React to enhance SEO, optimize load times, and improved overall user experience"
    ]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Cues SimplifyIT",
    date: "November 2021 - March 2023",
    description: [
      "Maintained and enhanced full-stack applications using Angular, React, Node.js, Express, and MongoDB.",
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">Where I've Worked</span>
        </h2>

        <div className="experience-container glass">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
            <div
              className="tab-indicator"
              style={{ transform: `translateY(${activeTab * 54}px)` }}
            />
          </div>

          <div className="experience-content">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 20, filter: 'blur(5px)' },
                visible: {
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)',
                  transition: { type: "spring", bounce: 0.2, duration: 0.8, staggerChildren: 0.1 }
                }
              }}
            >
              <h3 className="role-title">
                {experiences[activeTab].role} <span className="company-name">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="role-date">{experiences[activeTab].date}</p>

              <ul className="role-description">
                {experiences[activeTab].description.map((desc, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.3 } }
                    }}
                  >
                    <span className="list-bullet">▹</span>
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
