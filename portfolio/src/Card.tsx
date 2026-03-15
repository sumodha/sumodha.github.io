import './Card.css';
import {FiGithub} from "react-icons/fi"
import { HiOutlineExternalLink } from "react-icons/hi";
import { getImageURL } from './utils/image-utils';

type CardProps = {
    imgSrc: string, 
    title: string,
    role?: string, 
    githubLink?: string, 
    externalLink?: string,
    text: string, 
    date?: string, 
    skills: Array<string>
}

function Card ({imgSrc, title, role, githubLink, externalLink, text, date, skills} : CardProps) {
    return (
        <div className = "card">
            <img className = "card-image" src={getImageURL(imgSrc)}/>
            <div className="card-header">

            <h2 className = "card-title">{title}</h2>
            
            <div className = "card-links">
            {githubLink?<a className="card-link" href={githubLink}><FiGithub color="black" size={43}></FiGithub></a>:<></>}
            {externalLink?<a className="card-link" href={externalLink}><HiOutlineExternalLink color="black" size={49}></HiOutlineExternalLink></a>:<></>}
            </div>
            </div>
            {role? <h3 className="card-role">{role}</h3>: <></>}
            <h4 className="card-text">{text}</h4>
            {date? <h3 className="card-date">{date}</h3>: <></>}
            <ul className="card-skills">
                {skills.map((element, idx) => <li className="card-skill" key={idx}>{element}</li>)}
            </ul>

        </div>

    );
}
export default Card;