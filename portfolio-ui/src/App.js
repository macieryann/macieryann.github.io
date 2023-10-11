import './App.css';
import BeachHeader from './components/beach/beachheader';
import Contact from './components/contact';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';
import Socials from './components/socials';

function App() {
  return (
    <div className="App">
      <BeachHeader />
      <Navbar />
      <Intro />
      <section id="Resume">
        <Resume />
      </section>
      {/* <section id="Socials">
        <Socials />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
