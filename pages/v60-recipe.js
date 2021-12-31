import React, { useState, useEffect } from "react";
import V60Instructions from "../components/v60Instructions";
import { Heading, Box, VStack, Text} from "@chakra-ui/react";
import CoffeeInput from "../components/CoffeeInput";

export default function V60Recipe() {
  const [amount, setAmount] = useState(12);
  const [unit, setUnit] = useState();
  const handleChange = (event) => setAmount(event.target.value);

  useEffect(() => {
    if (amount) {
      setUnit(amount > 64 ? 'g' : 'oz');
    }
    else {
      setUnit();
    }
  }, [amount])
  return (
      <VStack>
        <Box>
          <Heading>v60 Recipe</Heading>
        </Box>
          <CoffeeInput defaultValue={12} handleChange={handleChange}/>
        <Box>
          <Text>
            Recipe to make {amount} {unit} coffee
          </Text>
        </Box>
          <V60Instructions amount={amount} unit={unit} />
      </VStack>
  );
}
