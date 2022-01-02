import { Box, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import React from "react";

export default function CoffeeInput(props) {
  return (
    <Box>
      <NumberInput
        keepWithinRange={false}
        clampValueOnBlur={false}
        max={props.maxAmount ?? 10000}
        defaultValue={props.defaultValue}
        borderRadius="lg"
        color="darkBrown"
        backgroundColor="creme"
        errorBorderColor="danger"
        focusBorderColor="darkBrown"
        inputMode="numeric"
      >
        <NumberInputField onChange={props.handleChange} placeholder="Amount of Coffee" />
      </NumberInput>
    </Box>
  );
}
