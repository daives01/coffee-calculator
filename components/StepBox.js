import { Box, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";

export default function StepBox(props) {
  return (
    <Stack spacing={4} opacity={1} boxShadow="Outline" mb="10px">
      <Box
        width="50vh"
        maxHeight="30vh"
        backgroundColor="creme"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        p="15px"
        borderRadius='lg'
      >
        <Tag
         color="creme"
          backgroundColor="darkBrown"
        >
          {props.step.title}
        </Tag>
        <Text>
          {props.step.desc}
        </Text>
      </Box>
    </Stack>
  );
}
