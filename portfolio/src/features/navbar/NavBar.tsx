import { Link, useLocation } from 'react-router-dom';
import { navigation, site } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToPageTop } from '../../utils/motion';
import './NavBar.css';

export default function NavBar() {
  const { pathname } = useLocation();
  const active = useActiveSection(pathname === '/');

  return (
    <header className="navbar site-shell">
      <Link className="navbar-name" to="/" onClick={scrollToPageTop}>{site.name}</Link>
      <nav aria-label="Main navigation">
        <ul className="navbar-links">
          {navigation.map(section => (
            <li key={section.id}>
              <Link to={`/#${section.id}`} aria-current={active === section.id ? 'location' : undefined}>
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
