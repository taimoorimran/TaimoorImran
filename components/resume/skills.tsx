import { Progress } from "@/components/ui/progress";

interface SkillItemProps {
  name: string;
  score: number;
}

const SkillItem = ({ name, score }: SkillItemProps) => {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5">{name}</h5>
        <data value={score}>{score}%</data>
      </div>
      <div className="skill-progress-bg">
        <Progress value={score} />
      </div>
    </li>
  );
};
const Skills = () => {
  const skillItems: SkillItemProps[] = [
    {
      name: "React",
      score: 84,
    },
    {
      name: "TypeScript",
      score: 70,
    },
  ];
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {skillItems.map(({ name, score }: SkillItemProps, key) => {
          return (
            <SkillItem key={`item_${name}_${key}`} name={name} score={score} />
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
