import NavBar from '../features/navbar/NavBar.tsx';
import HomeSection from '../features/home-section/HomeSection.tsx';
import SkillsSection from '../features/skills-section/SkillsSection.tsx';
import {useRef} from 'react';
import './HomePage.css'
import Footer from '../features/footer/Footer.tsx';
import WorkSection from '../features/work-section/WorkSection.tsx';
import LeadershipSection from '../features/leadership-section/LeadershipSection.tsx';
import ProjectsSection from '../features/projects-section/ProjectsSection.tsx';

function HomePage () {
    const skillsRef = useRef<HTMLHeadingElement | null>(null);
    const workRef = useRef<HTMLHeadingElement | null>(null);
    const leadershipRef = useRef<HTMLHeadingElement | null>(null);
    const projectsRef = useRef<HTMLHeadingElement | null>(null);

    const refs = {
        skills: skillsRef,
        work: workRef,
        leadership: leadershipRef,
        projects: projectsRef
    }

    return (
        <>
        <div className='homepage'>
     
        <NavBar refs={refs}></NavBar>
        <HomeSection></HomeSection>
        <WorkSection workRef={workRef}></WorkSection>
        <ProjectsSection projectsRef={projectsRef}></ProjectsSection>
        <SkillsSection skillsRef={skillsRef}></SkillsSection>
        <LeadershipSection leadershipRef={leadershipRef}></LeadershipSection>
        </div>
        <Footer refs={refs}></Footer>
        </>
    )
}
export default HomePage; 