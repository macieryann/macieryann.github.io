import './App.css';
import BeachHeader from './components/beach/beachheader';
import Contact from './components/contact';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Resume from './components/resume';
import Socials from './components/socials';

function enableSmoothScrolling() {
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

enableSmoothScrolling();

function App() {
  return (
    <div className="App">
      <BeachHeader />
      <Navbar />
      <section id="intro" href='#about'>
        <Intro />
      </section>
      <section id="resume" href='#resume'>
        <Resume />
      </section>
      <section id="socials" href='#socials'>
        <Socials />
      </section>
      <section id="contact" href="#contact">
        <Contact />
      </section>
      {/*<section id="projects" href='#projects'>
        <Projects />
      </section> */}
      {/* <section id="contact" href='#contactform'>
        <ContactForm />
      </section> */}
    </div>
  );
}

export default App;
