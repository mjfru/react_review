export default function Skill({ skillObj }) {
  return (
    <div className="skill" style={{backgroundColor: skillObj.color}}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === 'Advanced' && '💪'}
        {skillObj.level === 'Intermediate' && '😎'}
        {skillObj.level === 'Beginner' && '🤔'}
      </span>
    </div>
  )
}