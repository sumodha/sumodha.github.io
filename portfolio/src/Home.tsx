
import Card from './Card.tsx'
import {cards} from './utils/cards.tsx'
import NavBar from './NavBar.tsx'
import {skills, Skill} from './utils/skill-util.tsx'
import {useRef} from 'react'
import './Home.css'


function Home() {
    // references to specific sections within homepage
    const skillsRef = useRef<HTMLElement | null>(null);
    const workRef = useRef<HTMLElement | null>(null);
    const leadershipRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);

    const refs = {
        skills: skillsRef,
        work: workRef,
        leadership: leadershipRef,
        projects: projectsRef
    }

    return (
    <>
    <NavBar refs = {refs}></NavBar>
    <div>
    <section id="heading">
    <h1>Sumodha Pokhrel</h1>
    <h2 id="title">Software Developer | CS @ Rice University</h2>
    </section>
    <section id="skills" ref={skillsRef}>
    <h2>skills</h2>
    <h3 id="skills-category-1">languages</h3>
    <div className="skills">
    {Array.from(skills.languages).map((element,idx) => <Skill key={idx} name={element} type="languages"></Skill>)}
    </div>
    <h3 className="skills-category">frameworks</h3>
    <div className="skills">
    {Array.from(skills.frameworks).map((element,idx) => <Skill key={idx} name={element} type="frameworks"></Skill>)}
    </div>
    <h3 className="skills-category">libraries</h3>
    <div className="skills">
    {Array.from(skills.libraries).map((element,idx) => <Skill key={idx} name={element} type="libraries"></Skill>)}
    </div>
    <h3 className="skills-category">developer tools & platforms</h3>
    <div className="skills">
    {Array.from(skills.developer).map((element,idx) => <Skill key={idx} name={element} type="developer"></Skill>)}
    </div>
    </section>
    
    <section id="work" ref={workRef}>
    <h2>work experience</h2>
    <div className="cards">
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
    </div>
    </section>
    <section id="leadership" ref={leadershipRef}>
    <h2>leadership experience</h2>
    <div className="cards">
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
    </div>
    </section>
    <section id="projects" ref={projectsRef}>
    <h2>passion projects</h2>
    <div className="cards">
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
    </div>
    </section>
    </div>
    </>
    );
}
export default Home;