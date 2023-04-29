import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import characterReducer from "./Context/CharacterReducer";
import Character from "./Components/Character";
import CharacterButtons from "./Components/CharacterButtons";
import Header from "./Components/Header";
import { API_URL } from "./Data/consts";

//To manage state
export const CharacterContext = createContext();

function App() {
  //using useReducer we can access context 
  const [characters, appDispatch] = useReducer(characterReducer, []);
  
  //part of req6
  // Fetch the data on characters saved on server on each load
  useEffect(() => {
    const fetchCharacters = async() => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        //if character data available run initialize action
        if (data.body) {
          appDispatch({ type: "LOAD", payload: data.body });
        }
      } catch (error) {
        console.error("Unable to fetch the character data due to following error: ", error);
      }
    }
    fetchCharacters();
  }, []);

  // Store the character data on the server
  useEffect(() => {
      if (characters.length) {
        const saveCharacters = async() => {
        try {
          const res = await fetch(
            API_URL,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(characters)
            }
          );
          const data = await res.json()
          console.log("Character data saved:", data);
        } catch (error) {
          console.error("Failed to save character data:", error);
        }
        
      }
      saveCharacters();
    }
    }, [characters]);
      

  return (
    <CharacterContext.Provider value={appDispatch}>
      <div className="App">
        <Header />
        <section className="App-section">
        <CharacterButtons onClick={() => appDispatch({ type: "CHARACTER_ADDED" })} onReset= {() => appDispatch({type: "RESET_ALL_CHARACTERS"})} />
        {/* Loop through the characters array and render the character component for each to get attributes, classes and skills info*/}
          {characters.map((character, index) => (
            <Character key={index} index={index} character={character} skills={character.skills} attributes={character.attributes}/>
          ))}
        </section>
      </div>
    </CharacterContext.Provider>
  );
}

export default App;
