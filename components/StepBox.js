import { Box, Stack } from "@chakra-ui/react";
import React from "react";

export default function StepBox(props) {
  return (
    <Stack>
      <Box>{props.step.title}</Box>
      <Box>{props.step.desc}</Box>
    </Stack>
  );
}
