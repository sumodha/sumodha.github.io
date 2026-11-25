import SiteLayout from '../../layouts/SiteLayout';
import HomeSection from '../../features/home-section/HomeSection';
import WorkSection from '../../features/work-section/WorkSection';
import ProjectsSection from '../../features/projects-section/ProjectsSection';
import OtherSection from '../../features/other-section/OtherSection';
import { site } from '../../data/site';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle(site.pageTitle);

  return (
    <SiteLayout className="homepage">
      <HomeSection />
      <WorkSection />
      <ProjectsSection />
      <OtherSection />
    </SiteLayout>
  );
}
