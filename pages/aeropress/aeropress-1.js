import React from "react";
import Recipe from "../../components/Recipe";
import AeropressRecipe1 from "../../functions/recipes/AeropressRecipe1";

const DEFAULTVALUE = 12;
const TITLE = "Aeropress Instructions";

export default function Aeropress1() {
  return <Recipe defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={AeropressRecipe1} />;
}
