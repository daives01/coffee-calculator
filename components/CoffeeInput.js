import { Box, Editable, EditableInput, EditablePreview, HStack, Text} from "@chakra-ui/react";
import React from "react";

export default function CoffeeInput(props) {

  return (
    <HStack>
      <Box>
        <Text>Recipe for</Text>
      </Box>
      <Editable
        minW="10px"
        maxW="55px"
        defaultValue={props.defaultValue}
        value={props.amount ? props.amount : null}
        placeholder={"amount"}
        borderRadius="lg"
        color="darkBrown"
        backgroundColor="creme"
        px="3px"

      >
        <EditablePreview />
        <EditableInput onChange={props.handleChange}/>
      </Editable>
        <Box>
        <OzAndGrams unit={props.unit} amount={props.amount} />
      </Box>
    </HStack>
  );
}

function OzAndGrams(props) {
  if (!props.amount) {
    return <></>;
  } else if (props.unit == "oz") {
    return <Text>oz of Brewed Coffee ({(props.amount * 28.35).toFixed(1)} g)</Text>;
  } else {
    return <Text>g of Brewed Coffee ({(props.amount / 28.35).toFixed(1)} oz)</Text>;
  }
}
