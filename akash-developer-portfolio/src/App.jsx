import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return <><Navbar /><main id="main-content" tabIndex={-1}><Hero /><About /><Skills /><Projects /><Education /><Achievements /><Certifications /><Contact /></main><Footer /></>;
}
