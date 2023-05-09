import { useContext } from "react";
import { CharacterContext } from "../App";

//Individual button component to delete a character pertaining to a particular id
const DeleteCharacterButton = ({index}) => {
  const buttonDispatch = useContext(CharacterContext);
    return (
      <button
          onClick={() => buttonDispatch({ type: "CHARACTER_DELETED", payload: index })}
          style={{ color: "black", border: "white", borderRadius: 10, padding: 15, margin: 15}}
      >
      Delete Character
      </button>
    )
  }
  
  export default DeleteCharacterButton;