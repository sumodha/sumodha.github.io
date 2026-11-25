import ContactLinks from '../../components/ContactLinks/ContactLinks';
import { site } from '../../data/site';
import { scrollToPageTop } from '../../utils/motion';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer site-shell">
      <section className="footer-top" aria-label="Get in touch">
        <p><a className="footer-contact" href={site.contacts.email}>let’s talk!</a></p>
        <ContactLinks variant="text" />
      </section>
      <p className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.signature}</span>
        <span>made with care & curiosity.</span>
        <a href="#top" onClick={event => {
          event.preventDefault();
          scrollToPageTop();
        }}>back to top</a>
      </p>
    </footer>
  );
}
