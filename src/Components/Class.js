import { useRef } from "react";
import { meetsMinimumRequirements } from "../Util/HelperMethods";

//This component is for the minimum attributes requirements for the Classes in ClassOptions component.
//part of req2,re3,req8
const Class = ({ classOption, attributes, minimumAttributesRequirements }) => {
  
  //useRef hook used to allow you to persist values between renders
  const dialogBox = useRef(null);
  return (
    <>
    {/* The dialog box provides the information on minimum attributes points requires to use a particular class*/}
      <dialog ref={dialogBox}>
        <h2>{classOption} Minimum Requirements</h2>

        {Object.entries(minimumAttributesRequirements).map(([attribute, value]) => (
          <div key={attribute}>{`${attribute}: ${value}`}</div>
        ))}

        <button onClick={() => dialogBox.current.close()}>Close</button>
      </dialog>

      <div
        onClick={() => dialogBox.current.show()}
        style={{
          cursor: "grab",
          color: meetsMinimumRequirements(attributes, minimumAttributesRequirements)
            ? "green"
            : "red",
        }}
        key={classOption}
      >
        {classOption}
      </div>
    </>
  );
};
export default Class;