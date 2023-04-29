// Buttons component to handle all the characters and add a new character
const CharacterButtons = ({onClick, onReset}) => {
    return (
      <>
      <button
          onClick={onClick}
          style={{ color: "black", border: "white", borderRadius: 10, padding: 15,
          margin: 15}}
      >
      Add New Character
      </button>
      <button
        onClick={onReset}
        style={{ color: "black", border: "white", borderRadius: 10, padding: 15,
        margin: 15}}
      >
      Reset All Characters
      </button>
      <button
          onClick={onClick}
          style={{ color: "black", border: "white", borderRadius: 10, padding: 15,
          margin: 15}}
      >
      Save All Characters
      </button></>
    )
  }
  
  export default CharacterButtons;