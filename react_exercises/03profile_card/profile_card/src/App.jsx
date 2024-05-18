import Avatar from "./Avatar"
import Intro from "./Intro"
import SkillList from "./SkillList"

function App() {
  return (
    <div className="card">
      <Avatar img='/profile.jpg'/>
      <div className="data">
        <Intro />
        <SkillList skills=""/>
      </div>
    </div>
  )
}

export default App
