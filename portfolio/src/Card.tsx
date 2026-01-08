
import {getImageURL} from './utils/image-util.tsx' 
import {Icon} from './utils/icon-util.tsx'
import "./Card.css"

type Tag = {
    name: string,
    type: string
}

type CardProps = {
     imgSrc: string, 
     title:string, 
     subtitle: string, 
     githubLink: string | undefined, 
     externalLink: string | undefined, 
     text: string, 
     tags: Array<Tag>
}

function Card({imgSrc, title, subtitle, githubLink, externalLink, text, tags} : CardProps ) {
    
    return (
    <>
    <img src={getImageURL(imgSrc)}/>
    <div id = "header">
    <h1>{title}</h1>
    <div id = "links">
    {githubLink?<a href={githubLink}><Icon name="github" size={100}  color="red"></Icon></a>:<Icon name="github" size={100}  color="gray"></Icon>}
    {externalLink?<a href={externalLink}><Icon name="external" size={100} color="blue"></Icon></a>:<Icon name="external" size={100} color="gray"></Icon>}
    </div>
    </div>
    <h2>{subtitle}</h2>
    <p>{text}</p>
    {tags.map((element, idx) => <div key={idx} className={element.type}>{element.name}</div>)}
    </>
    );
}

export default Card;