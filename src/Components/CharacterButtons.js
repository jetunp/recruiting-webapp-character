import { useContext } from "react";
import { CharacterContext } from "../App";

// Buttons component to handle all the characters and add a new character
const CharacterButtons = () => {
  const buttonDispatch = useContext(CharacterContext);
    return (
      <>
      <button
          onClick={() => buttonDispatch({ type: "CHARACTER_ADDED" })}
          style={{ color: "black", border: "white", borderRadius: 10, padding: 15,
          margin: 15}}
      >
      Add New Character
      </button>
      <button
        onClick={() => buttonDispatch({type: "RESET_ALL_CHARACTERS"})}
        style={{ color: "black", border: "white", borderRadius: 10, padding: 15,
        margin: 15}}
      >
      Reset All Characters
      </button>
      <button
          onClick={() => buttonDispatch({ type: "CHARACTER_ADDED" })}
          style={{ color: "black", border: "white", borderRadius: 10, padding: 15,
          margin: 15}}
      >
      Save All Characters
      </button></>
    )
  }
  
  export default CharacterButtons;