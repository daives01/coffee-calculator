import React from "react";
import Recipe from "../components/Recipe";
import FrenchPress from "../functions/recipes/FrenchPress.js";

const DEFAULTVALUE = 12;
const TITLE = "French Press";

export default function FrenchPressRecipe() {
  return <Recipe maxAmount={1000} defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={FrenchPress} />;
}
