import './SkillsSection.css';
import Skill from './Skill.tsx';
import { type RefObject } from 'react';
import {FaReact} from 'react-icons/fa';
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoFlask } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { DiLinux } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";

















type skillsRefProps = {
    skillsRef: RefObject<HTMLHeadingElement | null>
}

function SkillsSection({skillsRef}: skillsRefProps) {
    return (
        <>
        <h1 className="header" id = 'skills-title' ref={skillsRef}>SKILLS</h1>
        <div className = "skills-section">
        <div className = "skills-column">
        <h2 className = 'skills-subtitle'>Frameworks</h2>
        <div className="skills-frameworks">
            <Skill icon = {FaReact} title = "REACT"></Skill>
            <Skill icon = {FaCss3Alt} title = "CSS"></Skill>
            <Skill icon = {SiExpress} title = "EXPRESSJS"></Skill>
            <Skill icon = {FaNodeJs} title = "NODEJS"></Skill>
            <Skill icon = {TbBrandReactNative} title = "REACT NATIVE"></Skill>
            <Skill icon = {BiLogoMongodb} title = "MONGODB"></Skill>
            <Skill icon = {SiFastapi} title = "FASTAPI"></Skill>
            <Skill icon = {SiDjango} title = "DJANGO"></Skill>
            <Skill icon = {DiPostgresql} title = "POSTGRESQL"></Skill>
            <Skill icon = {BiLogoFlask} title = "FLASK"></Skill>
            
        </div>
        <h2 className = 'skills-subtitle'>Languages</h2>
        <div className='skills-languages'> 
            <Skill icon = {FaPython} title = "PYTHON"></Skill>
            <Skill icon = {BiLogoTypescript} title = "TYPESCRIPT"></Skill>
            <Skill icon = {TbBrandJavascript} title = "JAVASCRIPT"></Skill>
            <Skill icon = {FaJava} title = "JAVA"></Skill>
            
            <Skill icon = {DiPostgresql} title = "POSTGRESQL"></Skill>
        </div>
        </div>
        <div className = "skills-column">
        <h2 className = 'skills-subtitle'>Developer Tools & Platforms</h2>
        <div className="skills-developer"> 
            <Skill icon = {FaFigma} title = "FIGMA"></Skill>
            <Skill icon = {DiLinux} title = "LINUX"></Skill>
            <Skill icon = {FaDocker} title = "DOCKER"></Skill>
            <Skill icon = {FaUnity} title = "UNITY"></Skill>
        </div>
        <h2 className = 'skills-subtitle'>Libraries</h2>
        <div className="skills-libraries">
            <h3 className="skill-title">OPENCV</h3>
            <h3 className="skill-title">MATPLOTLIB</h3>
            <h3 className="skill-title">NUMPY</h3>
            <h3 className="skill-title">OLLAMA</h3>
            <h3 className="skill-title">SCIKIT-LEARN</h3>
            <h3 className="skill-title">TENSORFLOW</h3>
            <h3 className="skill-title">PYTORCH</h3>
            <h3 className="skill-title">SEABORN</h3>
            <h3 className="skill-title">PANDAS</h3>

        </div>
        </div>
        
        </div>
        </>
    );
}
export default SkillsSection;