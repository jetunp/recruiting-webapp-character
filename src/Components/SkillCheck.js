import { SKILL_LIST } from "../Data/consts"
//part of req9, skill check component for each character
const SkillCheck = () => {
  return (
    <div style={{border: "solid white", borderRadius: 15, padding: 15,margin: 15}}>
        <h2>Skill Check</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <label>Skill: </label>
        <select>
          {SKILL_LIST.map((skill) => (
            <option key={skill.name} value={skill.name}>
              {skill.name}
            </option>
          ))}
        </select>

        <label>DC: </label>
        <input
          type="number"
        ></input>
        <button>Roll</button>
      </div>
    </div>
  )
}

export default SkillCheck;