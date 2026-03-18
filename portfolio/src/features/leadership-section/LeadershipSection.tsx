import Card from '../../components/Card.tsx';
import { type RefObject } from 'react';
import {cards} from '../../utils/cards.tsx'


type leadershipSectionProps = {
    leadershipRef: RefObject<HTMLHeadingElement | null>,
}

function LeadershipSection ({leadershipRef} : leadershipSectionProps) {
    return (
        <>

            
            <h1 className="header" id = 'leadership-title' ref={leadershipRef}>LEADERSHIP EXPERIENCE</h1>
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


        </>
    );
}
export default LeadershipSection;