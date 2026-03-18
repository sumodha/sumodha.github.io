import './NavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type refsProps = {
    skills: React.RefObject<HTMLElement | null>,
    work: React.RefObject<HTMLElement | null>,
    leadership: React.RefObject<HTMLElement | null>,
    projects: React.RefObject<HTMLElement | null>
}

function NavBar({ refs }: { refs: refsProps }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function scrollTo(ref: keyof refsProps) {
        refs[ref].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false); // close menu after navigating
    }

    return (
        <div className="navbar">
            <h2 className='navbar-name'>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    SUMODHA POKHREL
                </Link>
            </h2>

            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle navigation"
            >
                <span />
                <span />
                <span />
            </button>

            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li className="navbar-link"><Link to="/" onClick={() => scrollTo('work')}>WORK</Link></li>
                <li className="navbar-link"><Link to="/" onClick={() => scrollTo('projects')}>PROJECTS</Link></li>
                <li className="navbar-link"><Link to="/" onClick={() => scrollTo('leadership')}>LEADERSHIP</Link></li>
                <li className="navbar-link"><Link to="/" onClick={() => scrollTo('skills')}>SKILLS</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;