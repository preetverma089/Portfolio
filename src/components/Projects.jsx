import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: "Sales APP",
    description: "Built a scalable sales management mobile app enabling seamless order placement, tracking, and history management for field teams",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Redux", ".NETCore"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sales ON Go",
    description: "Engineered a scalable order management system supporting real-time order creation, status tracking, and seamless updates",
    tech: ["React", "Socket.io", "Express", "MongoDB", "Tailwind CSS", ".NETCore", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  // {
  //   title: "Social Media Dashboard",
  //   description: "An analytics dashboard aggregating data from multiple social media platforms to provide comprehensive insights and customizable reporting widgets.",
  //   tech: ["Next.js", "GraphQL", "Node.js", "Framer Motion", "Chart.js"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.8, delay: index * 0.15 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-tech">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                {/* <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
