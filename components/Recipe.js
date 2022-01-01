import React, { useState, useEffect } from "react";
import V60Instructions from "../components/v60Instructions";
import { Heading, Box, VStack, Text } from "@chakra-ui/react";
import CoffeeInput from "../components/CoffeeInput";
import Instructions from "./Instructions";

export default function Recipe(props) {
  const [amount, setAmount] = useState(12);
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
        <Heading>{props.title}</Heading>
      </Box>
      <CoffeeInput defaultValue={props.defaultValue ? props.defaultValue : 12} handleChange={handleChange} />
      <Box>
        <Text>
          Recipe to make {amount} {unit} coffee
        </Text>
      </Box>
      <Box>
        <Instructions amount={amount} ext={props.ext} recipeFunction={props.recipeFunction} unit={unit} />
      </Box>
    </VStack>
  );
}
