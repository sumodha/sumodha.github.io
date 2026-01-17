
import {getImageURL} from './utils/image-util.tsx' 
import {Icon} from './utils/icon-util.tsx'
import {Skill} from './utils/skill-util.tsx'
import './Card.css'

type SkillsType = {
    languages?: Array<string>,
    frameworks?: Array<string>,
    libraries?: Array<string>,
    developer?: Array<string>
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
    <div className="card">
    <img src={getImageURL(imgSrc)}/>
    <div id = "header">
    <h3>{title}</h3>
    <div id = "links">
    {githubLink?<a href={githubLink}><Icon name="github-card" size="27px" color="black"></Icon></a>:<></>}
    {externalLink?<a href={externalLink}><Icon name="external" size="27px" ></Icon></a>:<></>}
    </div>
    </div>
    <h4>{subtitle}</h4>
    <p>{text}</p>
    
    <div id="card-skills">
    {skills["languages"]?.map((element, idx) => <Skill key={idx} name={element} type="languages"></Skill>)}
    {skills["frameworks"]?.map((element,idx) => <Skill key={idx} name={element} type="frameworks"></Skill>)}
    {skills["libraries"]?.map((element,idx) => <Skill key={idx} name={element} type="libraries"></Skill>)}
    {skills["developer"]?.map((element,idx) => <Skill key={idx} name={element} type="developer"></Skill>)}
    </div>
    
    </div>
    );
}

export default Card;