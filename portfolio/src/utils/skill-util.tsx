const skills = {
    langauges: new Set<String>(),
    frameworks: new Set<String>(),
    libraries: new Set<String>(),
    "developer tools & platforms": new Set<String>()
}

type SkillType = keyof typeof skills;

type SkillProps = {
    name: string, 
    type: SkillType 
}
function Skill({name, type}: SkillProps) {
    skills[type].add(name)
    return (
        <div className = {type}>{name}</div>
    );
}

export {Skill}