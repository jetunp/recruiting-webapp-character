import { useContext } from "react";
import { CharacterContext } from "../App";
import { attributeModifierPoints } from "../Util/HelperMethods";

// Part of Req1,req4,req8 This component provides info on the attribute actions available and ability
// to increment and decrement attribute points bases on modifiers.
const Attributes = ({ attributes, index }) => {

  const attrDispatch = useContext(CharacterContext);

  return (
    <div
      style={{border: "solid white", borderRadius: 15, padding: 15,margin: 15}}
    >
      <h2>Attributes</h2>
      {/* for each entry in attributes list get the attribute and its corresponding value*/}
      {Object.entries(attributes).map(([attribute, value]) => (
        <div key={attribute}>
          <span>
            {`${attribute}: ${value} (Modifier: ${attributeModifierPoints(value)})`}
            {/* This check is required to check that the sum of all attribute values should always be below 70 , part of req7*/}
            {Object.values(attributes).reduce((accumulator, currentValue) => accumulator + currentValue) <
              70 && (
              <button
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() =>
                  attrDispatch({
                    type: "ATTRIBUTE_VALUE_INCREMENT",
                    payload: {
                      attribute,
                      index,
                    },
                  })
                }
              >
                +
              </button>
            )}

            {value > 0 && (
              <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() =>
                  attrDispatch({
                    type: "ATTRIBUTE_VALUE_DECREMENT",
                    payload: {
                      attribute,
                      index,
                    },
                  })
                }
              >
                -
              </button>
            )}

          </span>
        </div>
      ))}
    </div>
  );
};
export default Attributes;
