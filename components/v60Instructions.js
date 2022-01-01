import React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

export default function v60Instructions(props) {
  let adjustedAmount = props.amount;
  if (props.unit == "oz") {
    adjustedAmount = props.amount * 28.35;
  }
  const amtOfCoffee = adjustedAmount / 18;
  return (
    <div>
      <UnorderedList>
        <ListItem>After pre-wetting the filter with hot water, fill the v60 with {amtOfCoffee.toFixed(1)} grams of medium ground coffee.</ListItem>
        <ListItem>
          <b>0:00 - 0:45</b>- Bloom the coffee using at most {(amtOfCoffee * 2).toFixed(1)} grams of water
        </ListItem>
        <ListItem>
          <b>0:45 - 1:15</b>- Evenly pour {(adjustedAmount * 0.6).toFixed(1)} grams of water in 30 seconds,
        </ListItem>
        <ListItem>
          <b>1:15 - 1:45</b>- Evenly pour {(adjustedAmount * 0.4).toFixed(1)} grams of water in the next 30 seconds, once counterclockwise{" "}
        </ListItem>
        <ListItem>- using a spoon, stir once clockwise,</ListItem>
        <ListItem>- once the v60 has drained slightly gently swirl the water</ListItem>
      </UnorderedList>
    </div>
  );
}
