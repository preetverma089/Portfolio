import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { category: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", ".NET Core(Basic)"] },
  { category: "Database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "SQL"] },
  { category: "Tools & DevOps", items: ["Git", "AWS", "CI/CD", "Jest", "Azure", "OOPS"] }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section id="skills" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">Technical Skills</span>
        </h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div key={index} className="skill-card glass" variants={itemVariants}>
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet">▹</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
