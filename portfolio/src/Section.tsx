import './Section.css';
import Card from './Card.tsx';
import { type RefObject } from 'react';
import {cards} from './utils/cards.tsx'


type sectionProps = {
    workRef: RefObject<HTMLHeadingElement | null>,
    leadershipRef: RefObject<HTMLHeadingElement | null>,
    projectsRef: RefObject<HTMLHeadingElement | null>
}

function Section ({workRef, leadershipRef, projectsRef} : sectionProps) {
    return (
        <>
            <h1 id = 'work-title' ref={workRef}>WORK EXPERIENCE</h1>
            <div className="section-cards">
                {cards.map((element, idx) => element.type=="work" ? 
                <Card 
                key ={idx}
                imgSrc={element.imgSrc} 
                title={element.title} 
                role = {element.role} 
                githubLink= {element.githubLink}
                externalLink= {element.externalLink} 
                text = {element.text}
                date = {element.date}
                skills = {element.skills}>
                </Card>:<></>)}
            </div>
            
            <h1 id = 'leadership-title' ref={leadershipRef}>LEADERSHIP EXPERIENCE</h1>
            <div className="section-cards">
                {cards.map((element, idx) => element.type=="leadership" ? 
                <Card 
                key ={idx}
                imgSrc={element.imgSrc} 
                title={element.title} 
                role = {element.role} 
                githubLink= {element.githubLink}
                externalLink= {element.externalLink} 
                text = {element.text}
                date = {element.date}
                skills = {element.skills}>
                </Card>:<></>)}
            </div>

            <h1 id = 'projects-title' ref={projectsRef}>PASSION PROJECTS</h1>
            <div className="section-cards">
                {cards.map((element, idx) => element.type=="projects" ? 
                <Card 
                key ={idx}
                imgSrc={element.imgSrc} 
                title={element.title} 
                role = {element.role} 
                githubLink= {element.githubLink}
                externalLink= {element.externalLink} 
                text = {element.text}
                date = {element.date}
                skills = {element.skills}>
                </Card>:<></>)}
            </div>

        </>
    );
}
export default Section;