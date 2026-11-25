import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import { experience } from '../../utils/cards';
import ExperienceItem from './ExperienceItem';
import './WorkSection.css';

export default function WorkSection() {
  return (
    <PortfolioSection id="work" title="experience">
      <ul className="experience-list" role="list">
        {experience.map(work => <ExperienceItem work={work} key={work.slug} />)}
      </ul>
    </PortfolioSection>
  );
}
