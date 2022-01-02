import { Box, NumberInput, NumberInputField } from "@chakra-ui/react";
import React from "react";

export default function CoffeeInput(props) {
  return (
    <Box>
      <NumberInput
        max={props.maxAmount ?? 10000}
        focusBorderColor="darkBrown"
        defaultValue={props.defaultValue}
        color="darkBrown"
        backgroundColor="creme"
        borderRadius="lg"
      >
        <NumberInputField onChange={props.handleChange} placeholder="Amount of Coffee" />
      </NumberInput>
    </Box>
  );
}
