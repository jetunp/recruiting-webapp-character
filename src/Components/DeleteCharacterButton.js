//Individual button component to delete a character pertaining to a particular id
const DeleteCharacterButton = ({onDelete}) => {
    return (
      <button
          onClick={onDelete}
          style={{ color: "black", border: "white", borderRadius: 10, padding: 15, margin: 15}}
      >
      Delete Character
      </button>
    )
  }
  
  export default DeleteCharacterButton;