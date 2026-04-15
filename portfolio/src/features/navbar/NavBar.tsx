import './NavBar.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function goToSection(id: string) {
    setMenuOpen(false);
    
      navigate(`/#${id}`);
    
  }

  return (
    <div className="navbar">
      <h2 className="navbar-name">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          SUMODHA POKHREL
        </Link>
      </h2>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li className="navbar-link"><a onClick={() => goToSection('work')}>WORK</a></li>
        <li className="navbar-link"><a onClick={() => goToSection('projects')}>PROJECTS</a></li>
        <li className="navbar-link"><a onClick={() => goToSection('skills')}>SKILLS</a></li>
        <li className="navbar-link"><a onClick={() => goToSection('leadership')}>LEADERSHIP</a></li>
      </ul>
    </div>
  );
}

export default NavBar;