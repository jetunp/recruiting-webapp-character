import { SKILL_LIST } from "../Data/consts"
import {useState} from "react"
import { attributeModifierPoints } from "../Util/HelperMethods";
//part of req9, skill check component for each character
const SkillCheck = ({character}) => {
  const [selectedSkill, setSelectedSkill] = useState(SKILL_LIST[0].name);
  const [DC, setDC] = useState(0);
  const [skillCheckResults, setSkillCheckResults] = useState({});

  function performSkillCheck() {
    const skillPoints = character.skills[selectedSkill];
    const attributeModifier = SKILL_LIST.filter(
      (skill) => skill.name === selectedSkill
    )[0].attributeModifier;
    const modifierPoints = attributeModifierPoints(
      character.attributes[attributeModifier]
    );
    const roll = Math.floor(Math.random() * 20) + 1;
    const totalPoints = skillPoints + modifierPoints;
    const passed = totalPoints + roll >= DC;

    setSkillCheckResults({
      skill: selectedSkill,
      totalPoints,
      dc: DC,
      roll,
      passed,
    });
  }

  return (
    <div style={{border: "solid white", borderRadius: 15, padding: 15,margin: 15}}>
        <h2>Skill Check</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <label>Skill: </label>
        <select
          value={selectedSkill}
          onChange={(event) => setSelectedSkill(event.target.value)}
        >
          {SKILL_LIST.map((skill) => (
            <option key={skill.name} value={skill.name}>
              {skill.name}
            </option>
          ))}
        </select>

        <label>DC: </label>
        <input
          type="number"
          value={DC}
          onChange={(e) => setDC(e.target.value)}
        ></input>

        <button onClick={() => performSkillCheck()}>Roll</button>
      </div>

      {Object.keys(skillCheckResults).length !== 0 && (
        <div>
          <h4>Results</h4>

          <div>{`Skill: ${skillCheckResults.skill}: ${skillCheckResults.totalPoints}`}</div>
          <div>{`Roll: ${skillCheckResults.roll}`}</div>
          <div>{`DC: ${skillCheckResults.dc}`}</div>
          <div>{`Result: ${
            skillCheckResults.passed ? "Passed" : "Failed"
          }`}</div>
        </div>
      )}
    </div>
  );
  
}

export default SkillCheck;