import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Rooms from './components/Rooms';
import Services from './components/services/Services';
import Pricing from './components/Pricing';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav class="top-app-bar">
          <ul>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="about" className='nav-link'>About</NavLink>
            <NavLink to="/newsletter" className='nav-link'>Newsletter</NavLink>
            <NavLink to="/" className='nav-link'>Hotel<span>Logo</span></NavLink>
            <NavLink to="/rooms" className='nav-link'>Rooms</NavLink>
            <NavLink to="/serveices" className='nav-link'>Services</NavLink>
            <NavLink to="/pricing" className='nav-link'>Pricing</NavLink>
            <div class="hambugger">
              <span></span>
              <span></span>
            </div>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' elementt={<About />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
