import { useRef } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import CardLinks from '../../components/CardLinks/CardLinks';
import PhotoStack from '../../components/PhotoStack/PhotoStack';
import SkillList from '../../components/SkillList/SkillList';
import type { ProjectCard as ProjectCardData } from '../../types/portfolio';
import type { VariableStyle } from '../../types/styles';
import { formatDateRange } from '../../utils/format-date';
import { cardPath } from '../../utils/paths';
import './ProjectCard.css';

type ProjectCardProps = {
  project: ProjectCardData;
  expanded: boolean;
  displayOrder: number;
  tabletOrder: number;
  onToggle: () => void;
};

export default function ProjectCard({ project, expanded, displayOrder, tabletOrder, onToggle }: ProjectCardProps) {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { title, images, slug, date, skills, description, details, role } = project;
  const detailsId = `project-details-${slug}`;
  const titleId = `project-title-${slug}`;
  const toggleLabel = `${expanded ? 'Collapse' : 'Expand'} ${title}${date ? `, ${date}` : ''}`;
  const style: VariableStyle = {
    '--project-order': displayOrder,
    '--project-order-tablet': tabletOrder,
    viewTransitionName: `project-${slug}`,
  };

  function toggleAndFocus() {
    onToggle();
    toggleRef.current?.focus({ preventScroll: true });
  }

  function expand() {
    if (!expanded) toggleAndFocus();
  }

  function handleCardClick(event: MouseEvent<HTMLLIElement>) {
    if (event.defaultPrevented) return;
    if (event.target instanceof Element && event.target.closest('a, button')) return;
    if (window.getSelection()?.toString().trim()) return;
    toggleAndFocus();
  }

  function handleCardKeyDown(event: KeyboardEvent<HTMLLIElement>) {
    if (event.key === 'Escape' && expanded) toggleAndFocus();
  }

  return (
    <li
      className={`project-card${expanded ? ' project-card--expanded' : ''}`}
      style={style}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {expanded ? (
        <PhotoStack images={images} label={title} />
      ) : (
        <button className="project-image-trigger" type="button" onClick={expand} aria-expanded={false} aria-controls={detailsId} aria-label={toggleLabel}>
          <span className="project-card-image">
            <img src={images[0].src} alt={title} loading="lazy" />
          </span>
        </button>
      )}
      <article className="project-card-info" aria-labelledby={titleId}>
        <header className="project-card-heading">
          <h3 id={titleId}>{title}</h3>
          <button className="project-toggle" type="button" ref={toggleRef} onClick={onToggle} aria-expanded={expanded} aria-controls={detailsId} aria-label={toggleLabel}>
            <span aria-hidden="true">{expanded ? '−' : '+'}</span>
          </button>
        </header>
        <p className="project-description">{description}</p>
        <section className="project-details" id={detailsId} hidden={!expanded} aria-labelledby={titleId}>
          {expanded && <>
            {role && <p className="project-role-label">{role}</p>}
            <p className="project-detail-text">{details}</p>
          </>}
        </section>
        <footer className="project-skills-row">
          <SkillList skills={expanded ? skills : skills.slice(0, 3)} className="project-tags" />
          {date && <span className="project-skills-date">{formatDateRange(date)}</span>}
        </footer>
        <CardLinks links={project.links} storyPath={expanded && project.Content ? cardPath(slug) : undefined} label={`${title} resources`} variant="compact" />
      </article>
    </li>
  );
}
