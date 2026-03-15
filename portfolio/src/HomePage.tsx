import NavBar from './NavBar.tsx';
import HomeSection from './HomeSection.tsx';
import SkillsSection from './SkillsSection.tsx';
import Section from './Section.tsx';
import {useRef} from 'react';
import './HomePage.css'
import Footer from './Footer.tsx';

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