import React from 'react';
import {
  Link,
  Routes,
  // Router,
  BrowserRouter,
  // NavLink,
  Route
} from 'react-router-dom';

// Styles
import './App.css';
import './Home/Home.css';
import './Contact/Contact.css';
import './Privacy/Privacy.css';
import './About/About.css';

// components
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Privacy from './Privacy/Privacy';
import About from './About/About';

function App() {
  return (

    <BrowserRouter>
      <nav className='nav'>
        <a href="./Home"><h1>AlAqili</h1></a>
        <ul>
          <li><Link to='./Home'>Home</Link></li>
          <li><Link to='./Contact'>Contact</Link></li>
          <li><Link to='./Privacy'>Privacy</Link></li>
          <li><Link to='./About'>About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
