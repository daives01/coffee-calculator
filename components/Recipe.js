import React, { useState, useEffect } from "react";
import { Heading, Box, VStack, Text } from "@chakra-ui/react";
import CoffeeInput from "../components/CoffeeInput";
import Instructions from "./Instructions";

export default function Recipe(props) {
  const [amount, setAmount] = useState(props.defaultValue);
  const [unit, setUnit] = useState();
  const handleChange = (event) => setAmount(event.target.value);

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
      <CoffeeInput defaultValue={props.defaultValue ? props.defaultValue : 12} handleChange={handleChange} maxAmount={props.maxAmount}/>
      <Box>
      </Box>
      <Box>
        <Instructions amount={amount} ext={props.ext} recipeFunction={props.recipeFunction} unit={unit} />
      </Box>
    </VStack>
  );
}
