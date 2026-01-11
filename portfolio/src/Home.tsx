
import Card from './Card.tsx'
import {cards} from './utils/cards.tsx'
import NavBar from './NavBar.tsx'
import {skills, Skill} from './utils/skill-util.tsx'
import {useRef} from 'react'



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
    <h1>Sumodha Pokhrel</h1>
    <h2>Software Developer | CS @ Rice University</h2>
    <section id="skills" ref={skillsRef}>
    <h2>Skills</h2>
    <h3>Languages</h3>
    {Array.from(skills.languages).map((element,idx) => <Skill key={idx} name={element} type="languages"></Skill>)}
    <h3>Frameworks</h3>
    {Array.from(skills.frameworks).map((element,idx) => <Skill key={idx} name={element} type="frameworks"></Skill>)}
    <h3>Libraries</h3>
    {Array.from(skills.libraries).map((element,idx) => <Skill key={idx} name={element} type="libraries"></Skill>)}
    <h3>Developer Tools & Platforms</h3>
    {Array.from(skills['developer tools & platforms']).map((element,idx) => <Skill key={idx} name={element} type="developer tools & platforms"></Skill>)}
    </section>
    <section id="work" ref={workRef}>
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
    </section>
    <section id="leadership" ref={leadershipRef}>
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
    </section>
    <section id="projects" ref={projectsRef}>
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
    </section>
    </>
    );
}
export default Home;