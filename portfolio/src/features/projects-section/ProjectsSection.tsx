import { useRef, useState } from 'react';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import { projects } from '../../utils/cards';
import { projectCardOrder } from '../../utils/project-layout';
import { animateProjectChange } from '../../utils/project-motion';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

const INITIAL_PROJECT_COUNT = 6;

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECT_COUNT);
  const expandedIndex = visibleProjects.findIndex(project => project.slug === expandedSlug);

  function toggleProject(slug: string) {
    animateProjectChange(() => {
      setExpandedSlug(current => current === slug ? null : slug);
    });
  }

  function toggleProjectList() {
    animateProjectChange(() => {
      setShowAll(!showAll);
      const expandedWillBeHidden = showAll && !projects
        .slice(0, INITIAL_PROJECT_COUNT)
        .some(project => project.slug === expandedSlug);
      if (expandedWillBeHidden) setExpandedSlug(null);
    }, { anchor: showAll ? moreButtonRef.current : null });
  }

  return (
    <PortfolioSection id="projects" title="projects">
      <ul className="project-grid" id="project-grid" role="list">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            expanded={expandedSlug === project.slug}
            displayOrder={projectCardOrder(index, expandedIndex, 3)}
            tabletOrder={projectCardOrder(index, expandedIndex, 2)}
            onToggle={() => toggleProject(project.slug)}
          />
        ))}
      </ul>
      <footer className="projects-footer">
        <button className="filter-button filter-button--outlined" ref={moreButtonRef} type="button" aria-expanded={showAll} aria-controls="project-grid" onClick={toggleProjectList}>
          {showAll ? 'see less projects' : 'see more projects'}
        </button>
      </footer>
    </PortfolioSection>
  );
}
