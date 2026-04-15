import Card from '../../components/Card.tsx';
import {cards} from '../../utils/cards.tsx'



function ProjectsSection () {
    return (
        <>
           
            <h1  className="header" id = 'projects' >PASSION PROJECTS</h1>
            <div className="section-cards">
                {cards.map((element, idx) => element.type=="projects" ? 
                <Card 
                key ={idx}
                slug = {element.slug}
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
export default ProjectsSection;