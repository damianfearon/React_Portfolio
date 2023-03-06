import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
import Header from './Components/Header';

function App() {

  const personalDetails = {
    name: "Damian Fearon",
    location: "London, UK",
    tagline: "I'm a Developer",
    email: "DAMIANFEARON@HOTMAIL.COM",
    availability: "Open for work",
    brand:
      "With a combination of technical proficiency, creative ingenuity, and a background in psychology, I possess the ability to tackle each project with a comprehensive grasp of the end user's viewpoint. As a result, the digital products I create are highly effective and centered around the user's needs.",
  };
  
    return (
        <Router>
            <Header />
            <div>
                {/* Wrap Route elements in a Routes component */}
                <Routes>
                    {/* Define routes using the Route component to render different page components at different paths */}
                    {/* Define a default route that will render the Home component */}
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
        
    );
}

export default App;