import Class from "./Class";

//This component is the Classes column with 3 Class Options: Barbarian, Wizard, Bard
//part of req2
const ClassOptions = ({ classOptions, attributes }) => {
  return (
    <div style={{border: "solid white", borderRadius: 15, padding: 15,margin: 15}}
    >
    <h2>Classes</h2>
    {/* For each entry of class optios we render class component passing props and a unique key for the list*/}
    {Object.entries(classOptions).map(([classOption, minimumAttributesRequirements]) => (
      <Class key={classOption} classOption={classOption} attributes={attributes} minimumAttributesRequirements={minimumAttributesRequirements} />
      ))
    }
    </div>
  );
};
export default ClassOptions;
