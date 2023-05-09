import { SKILL_LIST } from "../Data/consts";

// this method displays if minimum attribute points requirement is achieved for each attribute of the character.
export const meetsMinimumRequirements = (attributes, minimumAttributesRequirements) => {
    return Object.keys(attributes).every(
      (attribute) => attributes[attribute] >= minimumAttributesRequirements[attribute]
    );
}

//+1 for each 2 attr points above 10, for any attribute 
//Same, -1 for each 2 attr points below 10.
export const attributeModifierPoints = (attributePoints) => {
    if (attributePoints >= 10) {
        return Math.floor((attributePoints - 10) / 2);
    } else {
        return -1 * Math.ceil((10 - attributePoints) / 2);
    }
}


