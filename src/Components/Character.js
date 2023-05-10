import Attributes from "./Attributes";
import ClassOptions from "./ClassOptions";
import { CLASS_LIST, SKILL_LIST } from "../Data/consts";
import Skills from "./Skills";
import DeleteCharacterButton from "./DeleteCharacterButton";
import SkillCheck from "./SkillCheck";

//This component is bringing all lower level components like attributes, classes, and skills altogether.
//Each character will render this character sheet component to display data.
const Character = ({ character, skills, index }) => {
  return (
    <div style={{border: "solid white", borderRadius: 15, padding: 15,margin: 15}}>
      <h1 style={{ marginTop: 40 }}>Character #{index+1}</h1>
      <SkillCheck character={character}/>
      {/* This button will let us delete an individual character*/}
      <DeleteCharacterButton index={index}/>
      <div style={{ display: "flex", justifyContent: "space-evenly"}}>
        <Attributes attributes={character.attributes} index={index} />
        <ClassOptions classOptions={CLASS_LIST} attributes={character.attributes} />
        <Skills skillOptions={SKILL_LIST} skills={skills} attributes={character.attributes} index={index} />
      </div>
    </div>
  );
};
export default Character;
