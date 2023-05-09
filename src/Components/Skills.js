import { useContext } from "react";
import { CharacterContext } from "../App";
import { attributeModifierPoints } from "../Util/HelperMethods";

//part of req5,req8
const Skills = ({ attributes, skills, skillOptions, index }) => {
  //For each attribute get the corresponding modifier points
  const correspondingModifierPoints = Object.entries(attributes).reduce(
    (dict, [attribute, points]) => {
      dict[attribute] = attributeModifierPoints(points);
      return dict;
    },
    {}
  );
  //use the context action for app state
  const skillDispatch = useContext(CharacterContext);
  //Total skill points
  const skillPointsTotal = Math.max(10 + 4 * correspondingModifierPoints["Intelligence"], 0);
  //The amount of skill points spent
  const skillPointsSpent = Object.values(skills).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return (
    <div style={{border: "solid white", borderRadius: 15, padding: 15,margin: 15}}
    >
      <h2>Skills</h2>
      <h4>
          {`Total skill points available: ${skillPointsTotal-skillPointsSpent}`}
      </h4>
      <h4>
          {`Total skill points spent: ${skillPointsSpent}`}
      </h4>

      {skillOptions.map((SKILL_LIST) => (
        <div key={SKILL_LIST.name}>
          <span>
            {`${SKILL_LIST.name}: ${skills[SKILL_LIST.name]} (Mod:${SKILL_LIST.attributeModifier}: ${correspondingModifierPoints[SKILL_LIST.attributeModifier]})`}

            <span>
              {/*This button will increment the skill points for corresponding skill and modifier points changed accordingly*/}
              {skillPointsSpent < skillPointsTotal && (
                <button
                  style={{ backgroundColor: "green", color: "white" }}
                  onClick={() =>
                    skillDispatch({
                      type: "SKILL_VALUE_INCREMENT",
                      payload: {
                        skill: SKILL_LIST.name,
                        index,
                      },
                    })
                  }
                >
                  +
                </button>
              )}
              {/*This button will decrement the skill points for corresponding skill and modifier points changed accordingly*/}
              {skills[SKILL_LIST.name] > 0 && (
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() =>
                    skillDispatch({
                      type: "SKILL_VALUE_DECREMENT",
                      payload: {
                        skill: SKILL_LIST.name,
                        index,
                      },
                    })
                  }
                >
                  -
                </button>
              )}
            </span>
            {` total: ${skills[SKILL_LIST.name] + correspondingModifierPoints[SKILL_LIST.attributeModifier]}`}
          </span>
        </div>
      ))}
    </div>
  );
};
export default Skills;
