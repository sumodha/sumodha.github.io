import './SkillList.css';

type SkillListProps = {
  skills: readonly string[];
  className?: string;
  label?: string;
};

export default function SkillList({ skills, className, label = 'Technologies' }: SkillListProps) {
  if (!skills.length) return null;

  return (
    <ul className={className ? `skill-list ${className}` : 'skill-list'} role="list" aria-label={label}>
      {skills.map(skill => <li className="skill-label" key={skill}>{skill}</li>)}
    </ul>
  );
}
