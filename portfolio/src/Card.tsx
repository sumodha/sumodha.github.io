import './Card.css';
import {FiGithub} from "react-icons/fi"
import { TbExternalLink } from 'react-icons/tb';
import { getImageURL } from './utils/image-utils';

type CardProps = {
    imgSrc: string, 
    title: string,
    role: string, 
    githubLink?: string, 
    externalLink?: string,
    text: string, 
    date: string, 
    skills: Array<string>
}

function Card ({imgSrc, title, role, githubLink, externalLink, text, date, skills} : CardProps) {
    return (
        <div className = "card">
            <img src={getImageURL(imgSrc)}/>
            <div className="card-header">

            <h1 className = "card-title">{title}</h1>
            
            <div className = "card-links">
            {githubLink?<a href={githubLink}><FiGithub color="black" size={43}></FiGithub></a>:<></>}
            {externalLink?<a href={externalLink}><TbExternalLink color="black" size={52}></TbExternalLink></a>:<></>}
            </div>
            </div>
            <h2 className="card-role">{role}</h2>
            <h3 className="card-text">{text}</h3>
            <h2 className="card-date">{date}</h2>
            <ul className="card-skills">
                {skills.map((element, idx) => <li className="card-skill" key={idx}>{element}</li>)}
            </ul>

        </div>

    );
}
export default Card;