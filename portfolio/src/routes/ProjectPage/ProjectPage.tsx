import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { getCardBySlug } from '../../utils/cards';
import { site } from '../../data/site';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import SkillList from '../../components/SkillList/SkillList';
import CardLinks from '../../components/CardLinks/CardLinks';
import { mdxComponents } from '../../components/mdxComponents/mdxComponents';
import SiteLayout from '../../layouts/SiteLayout';
import NotFound from '../NotFound/NotFound';
import './ProjectPage.css';
import 'katex/dist/katex.min.css';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getCardBySlug(slug) : undefined;

  useDocumentTitle(project?.Content ? `${project.title} — ${site.signature}` : undefined);

  if (!project || !project.Content) return <NotFound />;

  const { title, role, description, skills = [], date, images, links, Content } = project;

  return (
    <SiteLayout className="projectpage">
      <article className="project" aria-labelledby="project-title">
        <img className="project-image" src={images[0].src} alt={title} />
        <h1 className="project-title" id="project-title">{title}</h1>
        {role && <p className="project-role">{role}</p>}
        <p className="project-text">{description}</p>
        <SkillList skills={skills} className="project-skills" />
        {date && <p className="project-date">{date}</p>}
        <CardLinks links={links} label={`${title} resources`} className="project-links" variant="compact" />
        <hr className="divider" />
        <section className="project-content" aria-label="Full story">
          <MDXProvider components={mdxComponents}>
            <Content />
          </MDXProvider>
        </section>
      </article>
    </SiteLayout>
  );
}
