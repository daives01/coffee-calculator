import React from "react";
import Recipe from "../components/Recipe";
import V60 from "../functions/recipes/V60";

const DEFAULTVALUE = 12;
const TITLE = "V60 Instructions";

export default function V60Recipe() {
  return <Recipe defaultValue={DEFAULTVALUE} title={TITLE} recipeFunction={V60} />;
}
