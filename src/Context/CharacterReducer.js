import { ATTRIBUTE_LIST, SKILL_LIST } from "../Data/consts";

//This will specify app state changes in response to these below listed actions to the character context.
//Part of Req1
export default function characterReducer(state, action) {
  switch (action.type) {
    

    case "ATTRIBUTE_VALUE_INCREMENT":
      return state.map((character, index) =>
        index === action.payload.index
          ? {
              ...character,
              attributes: {
                ...character.attributes,
                [action.payload.attribute]:
                  character.attributes[action.payload.attribute] + 1,
              },
            }
          : character
      );

    case "ATTRIBUTE_VALUE_DECREMENT":
      return state.map((character, index) => 
        index === action.payload.index ? {
              ...character,
              attributes: {
                ...character.attributes,
                [action.payload.attribute]:
                  character.attributes[action.payload.attribute] - 1,
              },
            }
          : character
      );

    case "SKILL_VALUE_INCREMENT":
      return state.map((character, idx) =>
        idx === action.payload.index ? {
              ...character,
              skills: {
                ...character.skills,
                [action.payload.skill]:
                  character.skills[action.payload.skill] + 1,
              },
            }
          : character
      );

    case "SKILL_VALUE_DECREMENT":
      return state.map((character, index) =>
        index === action.payload.index
          ? {
              ...character,
              skills: {
                ...character.skills,
                [action.payload.skill]:
                  character.skills[action.payload.skill] - 1,
              },
            }
          : character
      );
    
    case "CHARACTER_ADDED":
        return [
          ...state,
          {
            attributes: ATTRIBUTE_LIST.reduce(
              (dictionary, attribute) => ({ ...dictionary, [attribute]: 10 }),
              {}
            ),
            skills: SKILL_LIST.reduce((dictionary, skill) => {
              dictionary[skill.name] = 0;
              return dictionary;
            }, {}),
          },
        ];
    
    case "CHARACTER_DELETED":
        return state.filter((_, index) => index !== action.payload);

    case "RESET_ALL_CHARACTERS":
        return state=[]

    case "LOAD":
        return action.payload;

    default:
        return state;
  }
}
