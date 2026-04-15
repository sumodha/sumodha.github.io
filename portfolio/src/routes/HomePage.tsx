import NavBar from '../features/navbar/NavBar.tsx';
import HomeSection from '../features/home-section/HomeSection.tsx';
import SkillsSection from '../features/skills-section/SkillsSection.tsx';
import './HomePage.css'
import Footer from '../features/footer/Footer.tsx';
import WorkSection from '../features/work-section/WorkSection.tsx';
import LeadershipSection from '../features/leadership-section/LeadershipSection.tsx';
import ProjectsSection from '../features/projects-section/ProjectsSection.tsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function HomePage () {


    const location = useLocation();

    useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // small delay so sections are mounted
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [location]);

    return (
        <>
        <div className='homepage'>
     
        <NavBar></NavBar>
        <HomeSection></HomeSection>
        <WorkSection  ></WorkSection>
        <ProjectsSection ></ProjectsSection>
        <SkillsSection ></SkillsSection>
        <LeadershipSection ></LeadershipSection>
        </div>
        <Footer ></Footer>
        </>
    )
}
export default HomePage; 