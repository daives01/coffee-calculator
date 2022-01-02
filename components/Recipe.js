import React, { useState, useEffect } from "react";
import { Heading, Box, VStack } from "@chakra-ui/react";
import CoffeeInput from "../components/CoffeeInput";
import Instructions from "./Instructions";

export default function Recipe(props) {
  const [amount, setAmount] = useState(props.defaultValue);
  const [unit, setUnit] = useState();
  const handleChange = (event) => {
    if (isValidInput(event.target.value)) {
      setAmount(event.target.value);
    }
  }

  useEffect(() => {
    if (amount) {
      setUnit(amount > 64 ? "g" : "oz");
    } else {
      setUnit();
    }
  }, [amount]);
  return (
    <VStack>
      <Box>
        <Heading color="darkBrown">{props.title}</Heading>
      </Box>
      <CoffeeInput
        defaultValue={props.defaultValue ? props.defaultValue : 12}
        handleChange={handleChange}
        maxAmount={props.maxAmount}
        amount={amount}
        unit={unit}
      />
      <Box>
        <Instructions amount={amount} ext={props.ext} recipeFunction={props.recipeFunction} unit={unit} />
      </Box>
    </VStack>
  );
}

function isValidInput(value) {
  return !isNaN(value) && value.toString().length < 7;
}
