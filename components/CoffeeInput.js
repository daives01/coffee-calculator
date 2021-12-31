import { Box, NumberInput, NumberInputField } from "@chakra-ui/react";
import React from "react";

export default function CoffeeInput(props) {
  return (
    <Box>
      <NumberInput defaultValue={props.defaultValue}>
        <NumberInputField onChange={props.handleChange} placeholder="Amount of Coffee" />
      </NumberInput>
    </Box>
  );
}
