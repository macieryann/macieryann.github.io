import './App.css';
import BeachHeader from './components/beach/beachheader';
import Contact from './components/contact';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Resume from './components/resume';
import Socials from './components/socials';
import Projects from './components/projects';

function enableSmoothScrolling() {
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        console.log('Smooth scroll to ${targetId}');
      } else {
        console.log('Target ${targetId} not found');
      }
    });
  });
}

function App() {
  console.log('App component mounted');
  enableSmoothScrolling();
  return (
    <div className="App">
      <BeachHeader />
      <Navbar />
      <section id="intro">
        <Intro />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="socials">
        <Socials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;