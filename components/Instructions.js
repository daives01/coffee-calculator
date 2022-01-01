import React, { useState, useEffect } from "react";
import StepBox from "./StepBox";

export default function Instructions(props) {
  const [recipe, updateRecipe] = useState([]);
  useEffect(() => {
    if (props.amount) {
      updateRecipe(props.recipeFunction(props.unit == 'oz' ? props.amount * 28.35 : props.amount));
    } else {
      updateRecipe([])
    }
  }, [props]);
  return (
    <>
      {recipe.map((step, index) => (
        <StepBox key={index} step={step}/>
      ))}
    </>
  );
}
