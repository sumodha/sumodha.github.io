import {cards} from './cards.tsx'
import './Skill.css'


const skills = {
    languages: new Set<string>(),
    frameworks: new Set<string>(),
    libraries: new Set<string>(),
    developer: new Set<string>()
}

type SkillType = keyof typeof skills;

for (const card of cards){
    const card_skills = card.skills
    for (const [category, values] of Object.entries(card_skills)) {
        if (category in skills) {
            for (const value of values) {
                skills[category as SkillType].add(value)
            }
            
        }
    }
}


type SkillProps = {
    name: string, 
    type: SkillType
}

function Skill({name, type}: SkillProps) {
    return (
        <div className = {type}>{name}</div>
    );
}

export {skills, Skill}