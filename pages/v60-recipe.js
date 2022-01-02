import React from "react";
import Recipe from "../components/Recipe";
import V60Recipe from "../functions/recipes/V60Recipe";

const DEFAULTVALUE = 12;
const TITLE = "V60 Instructions";

export default function V60() {
  return <Recipe maxAmount={700} defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={V60Recipe} />;
}
