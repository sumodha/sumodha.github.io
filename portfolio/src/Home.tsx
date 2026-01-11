
import Card from './Card.tsx'
import {cards} from './utils/cards.tsx'
import NavBar from './NavBar.tsx'
import {skills} from './utils/skill-util.tsx'


function Home() {
    return (
    <>
    <NavBar></NavBar>
    <h1>Sumodha Pokhrel</h1>
    <h2>Software Developer | CS @ Rice University</h2>
    <h2>Skills</h2>
    <h2>Work Experience</h2>
    {cards.map((element, idx) => element.type=="work" ? 
    <Card 
    key ={idx}
    imgSrc={element.imgSrc} 
    title={element.title} 
    subtitle = {element.subtitle} 
    githubLink= {element.githubLink}
    externalLink= {element.externalLink} 
    text = {element.text}
    skills = {element.skills}>
    </Card>:<></>)}
    <h2>Leadership Experience</h2>
    {cards.map((element, idx) => element.type=="leadership" ? 
    <Card 
    key ={idx}
    imgSrc={element.imgSrc} 
    title={element.title} 
    subtitle = {element.subtitle} 
    githubLink= {element.githubLink}
    externalLink= {element.externalLink} 
    text = {element.text}
    skills = {element.skills}>
    </Card>:<></>)}
    <h2>Passion Projects</h2>
    {cards.map((element, idx) => element.type=="projects" ? 
    <Card 
    key ={idx}
    imgSrc={element.imgSrc} 
    title={element.title} 
    subtitle = {element.subtitle} 
    githubLink= {element.githubLink}
    externalLink= {element.externalLink} 
    text = {element.text}
    skills = {element.skills}>
    </Card>:<></>)}
    {console.log(skills)}
    </>
    );
}
export default Home;