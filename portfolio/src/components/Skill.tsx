import './Skill.css';
import { type IconType } from "react-icons";

type SkillProps = {
    icon: IconType, 
    title: string
}
function Skill ({icon : Icon, title} : SkillProps) {
    return (
        <div className="skill">
        <Icon size={77}></Icon>
        <h3 className="skill-title">{title}</h3>
        </div>
    );
}

export default Skill;