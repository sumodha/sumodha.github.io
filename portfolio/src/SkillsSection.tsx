import './SkillsSection.css';
import Skill from './Skill.tsx';
import { type RefObject } from 'react';


type skillsRefProps = {
    skillsRef: RefObject<HTMLHeadingElement | null>
}

function SkillsSection({skillsRef}: skillsRefProps) {
    return (
        <>
        <h1 id = 'skills-title' ref={skillsRef}>SKILLS</h1>
        <h2 className = 'skills-subtitle'>Frameworks</h2>
        <Skill></Skill>
        </>
    );
}
export default SkillsSection;