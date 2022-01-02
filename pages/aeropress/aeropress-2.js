import React from "react";
import Recipe from "../../components/Recipe";
import AeropressRecipe2 from "../../functions/recipes/AeropressRecipe2";

const DEFAULTVALUE = 12;
const TITLE = "Aeropress Concentrate Instructions";

export default function Aeropress2() {
  return <Recipe maxAmount={600} defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={AeropressRecipe2} />;
}
