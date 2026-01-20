import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/EventTimeline';
import Guidelines from './components/Guidelines';
import Contact from './components/Contact';


function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative  text-white overflow-x-hidden">
      <Navbar />
      <div className="space-y-[3px]">
        <Home />
        <About />
        <Events />
        <Timeline />
        <Guidelines />
        <Contact />
      </div>
    </div>
  );
}

export default App;
