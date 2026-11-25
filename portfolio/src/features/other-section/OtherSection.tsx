import { useState } from 'react';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import type { MiscellanyFilter } from '../../types/portfolio';
import { miscellany, miscellanyFilters } from '../../utils/cards';
import MiscellanyItem from './MiscellanyItem';
import './OtherSection.css';

export default function OtherSection() {
  const [filter, setFilter] = useState<MiscellanyFilter>('all');
  const items = filter === 'all' ? miscellany : miscellany.filter(item => item.category === filter);
  const controls = (
    <fieldset className="gallery-filters">
      <legend className="sr-only">Filter miscellany</legend>
      {miscellanyFilters.map(category => (
        <button className="filter-button" key={category} type="button" onClick={() => setFilter(category)} aria-pressed={filter === category}>
          {category}
        </button>
      ))}
    </fieldset>
  );

  return (
    <PortfolioSection id="miscellany" title="miscellany" className="miscellany-section" controls={controls}>
      <p className="sr-only" role="status">Showing {items.length} {filter === 'all' ? 'miscellany' : filter} items.</p>
      <ul className="miscellany-grid" role="list">
        {items.map(card => <MiscellanyItem card={card} key={card.slug} />)}
      </ul>
    </PortfolioSection>
  );
}
