import { Link } from 'react-router-dom';
import type { MiscellanyCard } from '../../types/portfolio';
import { cardPath } from '../../utils/paths';
import './MiscellanyItem.css';

type MiscellanyItemProps = { card: MiscellanyCard };

export default function MiscellanyItem({ card }: MiscellanyItemProps) {
  const className = `miscellany-item${card.tall ? ' miscellany-item--tall' : ''}`;
  const caption = `${card.title}${card.date ? ` (${card.date})` : ''}${card.role ? ` — ${card.role}` : ''}: ${card.description}`;
  const figure = (
    <figure className={className} tabIndex={card.Content ? undefined : 0} aria-label={card.Content ? undefined : caption}>
      <img src={card.images[0].src} alt={card.images[0].alt} loading="lazy" />
      <figcaption className="miscellany-overlay">
        <span className="miscellany-meta">
          <span className="miscellany-category">{card.category}</span>
          {card.date && <span className="miscellany-date">{card.date}</span>}
        </span>
        <h3>{card.title}</h3>
        {card.role && <p className="miscellany-role">{card.role}</p>}
        <p>{card.description}</p>
        {card.Content && <span className="miscellany-view">explore</span>}
      </figcaption>
    </figure>
  );

  return (
    <li>
      {card.Content ? <Link className="miscellany-link" to={cardPath(card.slug)} aria-label={caption}>{figure}</Link> : figure}
    </li>
  );
}
