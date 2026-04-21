import './Skill.css';
import { type IconType } from "react-icons";

type SkillProps = {
    icon: IconType | React.FC<React.SVGProps<SVGSVGElement>>;
    title: string
}
function Skill ({icon : Icon, title} : SkillProps) {
    return (
        <div className="skill">
        <Icon size={77} color='black'></Icon>
        <h3 className="skill-title">{title}</h3>
        </div>
    );
}

export default Skill;