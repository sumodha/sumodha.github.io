import Card from '../../components/Card.tsx';
import { type RefObject } from 'react';
import {cards} from '../../utils/cards.tsx'


type workSectionProps = {
    workRef: RefObject<HTMLHeadingElement | null>
}

function WorkSection ({workRef} : workSectionProps) {
    return (
        <>
            <h1 className="header"id = 'work-title' ref={workRef}>WORK EXPERIENCE</h1>
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

        </>
    );
}
export default WorkSection;