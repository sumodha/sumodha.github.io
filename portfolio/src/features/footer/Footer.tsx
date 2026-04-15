import './Footer.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  function goToSection(id: string) {
    navigate(`/#${id}`);
  }

  return (
    <div className="footer">
      <ul className="footer-links">
        <li className="footer-link"><a onClick={() => goToSection('work')}>WORK</a></li>
        <li className="footer-link"><a onClick={() => goToSection('projects')}>PROJECTS</a></li>
        <li className="footer-link-main">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            SUMODHA
          </Link>
        </li>
        <li className="footer-link"><a onClick={() => goToSection('skills')}>SKILLS</a></li>
        <li className="footer-link"><a onClick={() => goToSection('leadership')}>LEADERSHIP</a></li>
      </ul>
      <p className="footer-text">Made with love. © Sumodha Pokhrel</p>
    </div>
  );
}

export default Footer;