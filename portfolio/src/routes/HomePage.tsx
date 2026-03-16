import NavBar from '../features/navbar/NavBar.tsx';
import HomeSection from '../features/home-section/HomeSection.tsx';
import SkillsSection from '../features/skills-section/SkillsSection.tsx';
import Section from '../features/sections/Section.tsx';
import {useRef} from 'react';
import './HomePage.css'
import Footer from '../features/footer/Footer.tsx';

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
        <SkillsSection skillsRef={skillsRef}></SkillsSection>
        <Section workRef={workRef} projectsRef={projectsRef} leadershipRef={leadershipRef}></Section>
        </div>
        <Footer refs={refs}></Footer>
        </>
    )
}
export default HomePage; 