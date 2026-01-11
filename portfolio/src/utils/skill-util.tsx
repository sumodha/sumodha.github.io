import {cards} from './cards.tsx'


const skills = {
    languages: new Set<String>(),
    frameworks: new Set<String>(),
    libraries: new Set<String>(),
    "developer tools & platforms": new Set<String>()
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