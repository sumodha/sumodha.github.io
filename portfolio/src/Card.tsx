
import {getImageURL} from './utils/image-util.tsx' 
import {Icon} from './utils/icon-util.tsx'
import "./Card.css"
import {Skill} from './utils/skill-util.tsx'

type SkillsType = {
    languages?: Array<string>,
    frameworks?: Array<string>,
    libraries?: Array<string>,
    "developer tools & platforms"?: Array<string>
}

type CardProps = {
     imgSrc: string, 
     title:string, 
     subtitle: string, 
     githubLink: string | undefined, 
     externalLink: string | undefined, 
     text: string, 
     skills: SkillsType
}

function Card({imgSrc, title, subtitle, githubLink, externalLink, text, skills} : CardProps ) {
    
    return (
    <>
    <img width={200} height={200} src={getImageURL(imgSrc)}/>
    <div id = "header">
    <h3>{title}</h3>
    <div id = "links">
    {githubLink?<a href={githubLink}><Icon name="github-card" ></Icon></a>:<Icon name="github"  color="gray"></Icon>}
    {externalLink?<a href={externalLink}><Icon name="external"  ></Icon></a>:<Icon name="external"  color="gray"></Icon>}
    </div>
    </div>
    <h4>{subtitle}</h4>
    <p>{text}</p>
    {skills["languages"]?.map((element, idx) => <Skill key={idx} name={element} type="languages"></Skill>)}
    {skills["frameworks"]?.map((element,idx) => <Skill key={idx} name={element} type="frameworks"></Skill>)}
    {skills["libraries"]?.map((element,idx) => <Skill key={idx} name={element} type="libraries"></Skill>)}
    {skills["developer tools & platforms"]?.map((element,idx) => <Skill key={idx} name={element} type="developer tools & platforms"></Skill>)}
    </>
    );
}

export default Card;