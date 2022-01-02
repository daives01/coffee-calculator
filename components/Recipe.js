import React, { useState, useEffect } from "react";
import { Heading, Box, VStack } from "@chakra-ui/react";
import CoffeeInput from "../components/CoffeeInput";
import Instructions from "./Instructions";
import Warning from "./Warning";

export default function Recipe(props) {
  const [amount, setAmount] = useState(props.defaultValue);
  const [unit, setUnit] = useState();
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    if (isValidInput(event.target.value)) {
      setAmount(event.target.value);
      setUnit(amount > 64 ? "g" : "oz");
    }
  };

  useEffect(() => {
    if (amount) {
      setUnit(amount > 64 ? "g" : "oz");
      setIsValid(amount < props.maxAmount)
    } else {
      setUnit();
    }
  }, [amount]);
  return (
    <VStack>
      <Box>
        <Heading size="md" maxW="95vw" color="darkBrown">
          {props.title}
        </Heading>
      </Box>
      <CoffeeInput
        defaultValue={props.defaultValue ? props.defaultValue : 12}
        handleChange={handleChange}
        amount={amount}
        unit={unit}
      />
      <Box>
        <Warning isValid={isValid} />
        <Instructions amount={amount} ext={props.ext} recipeFunction={props.recipeFunction} unit={unit} />
      </Box>
    </VStack>
  );
}

function isValidInput(value) {
  return !isNaN(value) && value.toString().length < 7;
}
