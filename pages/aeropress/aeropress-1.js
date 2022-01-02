import React from "react";
import Recipe from "../../components/Recipe";
import AeropressRecipe1 from "../../functions/recipes/AeropressRecipe1";

const DEFAULTVALUE = 12;
const TITLE = "Aeropress 2m30s";

export default function Aeropress1() {
  return <Recipe maxAmount={350} defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={AeropressRecipe1} />;
}
