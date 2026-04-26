import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="spotlight top-left"></div>
      <div className="spotlight bottom-right"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
        <p>© {new Date().getFullYear()} Preet Verma. Built with React & Framer Motion.</p>
      </footer>
    </>
  );
}

export default App;
