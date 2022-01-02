import React from "react";
import Recipe from "../../components/Recipe";
import AeropressRecipe3 from "../../functions/recipes/AeropressRecipe3";

const DEFAULTVALUE = 12;
const TITLE = "Aeropress Inverted Method";

export default function Aeropress2() {
  return <Recipe maxAmount={600} defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={AeropressRecipe3} />;
}
