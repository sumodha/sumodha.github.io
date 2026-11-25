import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import CardLinks from '../../components/CardLinks/CardLinks';
import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import SkillList from '../../components/SkillList/SkillList';
import type { WorkCard } from '../../types/portfolio';
import { formatDateRange } from '../../utils/format-date';
import { cardPath } from '../../utils/paths';
import './ExperienceItem.css';

type ExperienceItemProps = { work: WorkCard };

export default function ExperienceItem({ work }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `experience-${work.slug}-details`;
  const headingId = `experience-${work.slug}-title`;
  const photos = work.images.slice(1);

  return (
    <li className={`experience-row${expanded ? ' experience-row--expanded' : ''}`}>
      <span
        className={`company-logo company-logo--${work.slug}`}
        role="img"
        aria-label={`${work.title} logo`}
        style={{ backgroundImage: `url(${work.images[0].src})` }}
      />
      <article className="experience-info" aria-labelledby={headingId}>
        <header className="experience-topline">
          <h3 id={headingId}>
            {work.role} @{' '}
            <a className="experience-company" href={work.companyLink} target="_blank" rel="noreferrer">{work.title}</a>
          </h3>
          <p className="experience-meta">
            <span className="experience-date">{formatDateRange(work.date)}</span>
            <button
              type="button"
              className="experience-toggle"
              aria-expanded={expanded}
              aria-controls={detailsId}
              aria-label={`${expanded ? 'Collapse' : 'Expand'} ${work.title} experience`}
              onClick={() => setExpanded(open => !open)}
            >
              <FiChevronDown aria-hidden="true" />
            </button>
          </p>
        </header>
        <p className="experience-description">{work.description}</p>
        <SkillList skills={work.skills} label={`${work.title} skills`} className="experience-skills" />
        <section className="experience-disclosure" id={detailsId} aria-labelledby={headingId} aria-hidden={!expanded} inert={!expanded}>
          <section className={`experience-expanded${photos.length ? '' : ' experience-expanded--text-only'}`}>
            {photos.length > 0 && (
              <section className="experience-gallery" aria-label={`${work.title} photos`}>
                <ImageCarousel images={photos} width={320} height={250} label={`${work.title} experience photos`} navigation="progress" />
              </section>
            )}
            <section className="experience-detail-copy">
              <p className="experience-detail-text">{work.details}</p>
              <CardLinks links={work.links} storyPath={work.Content ? cardPath(work.slug) : undefined} label={`${work.title} resources`} variant="compact" />
            </section>
          </section>
        </section>
      </article>
    </li>
  );
}
