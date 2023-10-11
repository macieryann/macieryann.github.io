import './App.css';
import Header from './layout/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/projects';
import Resume from './components/resume';
import Socials from './components/socials';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-content">
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
