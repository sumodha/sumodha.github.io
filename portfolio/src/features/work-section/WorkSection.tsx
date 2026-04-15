import Card from '../../components/Card.tsx';
import {cards} from '../../utils/cards.tsx'



function WorkSection () {
    return (
        <>
            <h1 className="header" id = 'work'>WORK EXPERIENCE</h1>
            <div className="section-cards">
                {cards.map((element, idx) => element.type=="work" ? 
                <Card 
                key ={idx}
                imgSrc={element.imgSrc} 
                slug = {element.slug}
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