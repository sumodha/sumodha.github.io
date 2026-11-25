import ContactLinks from '../../components/ContactLinks/ContactLinks';
import './HomeSection.css';

export default function HomeSection() {
  return (
    <section className="home" id="about" aria-labelledby="intro-title">
      <header className="home-copy">
        <h1 id="intro-title">hi, i’m sumodha!</h1>
        <p className="home-intro">i’m an undergraduate at rice university studying computer science with a minor in data science. everything i do is guided by my passion to learn — and to never stop learning!</p>
        <ContactLinks />
      </header>
      <img className="home-cover" src="/cover-image/cover.jpg" alt="Sumodha Pokhrel outdoors among green foliage" width="2752" height="3670" fetchPriority="high" />
    </section>
  );
}
