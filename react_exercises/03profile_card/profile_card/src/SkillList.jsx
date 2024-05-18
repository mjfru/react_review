import Skill from "./Skill"

const skills = [
  {
    skill: "React",
    level: "Advanced",
    color: "blue"
  },
  {
    skill: "HTML/CSS",
    level: "Advanced",
    color: "orangered"
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "yellow"
  },
  {
    skill: "Git/Github",
    level: "Intermediate",
    color: "goldenrod"
  },
  {
    skill: "Python",
    level: "Intermediate",
    color: "green"
  },
  {
    skill: "Java",
    level: "Intermediate",
    color: "tan"
  },
  {
    skill: "TypeScript",
    level: "Beginner",
    color: "skyblue"
  }
]

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skill => (
        <Skill 
          key={skill.skill} 
          skillObj={skill}
        />
      ))}
      {/* <Skill skill='React' emoji='🤩' color='blue'/>
      <Skill skill='HTML/CSS' emoji='💻' color='orangered'/>
      <Skill skill='JavaScript' emoji='😎' color='teal'/>
      <Skill skill='Git/Github' emoji='🚁' color='goldenrod'/>
      <Skill skill='Python' emoji='🐍' color='yellow'/> */}
    </div>
  )
}