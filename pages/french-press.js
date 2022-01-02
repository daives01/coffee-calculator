import React from "react";
import Recipe from "../components/Recipe";
import FrenchPress from "../functions/recipes/FrenchPress.js";

const DEFAULTVALUE = 12;
const TITLE = "French Press Instructions";

export default function FrenchPressRecipe() {
  return <Recipe maxAmount={700} defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={FrenchPress} />;
}
