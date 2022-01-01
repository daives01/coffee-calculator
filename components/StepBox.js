import { Box, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";

export default function StepBox(props) {
  return (
    <Stack spacing={4} opacity={1} boxShadow="Outline" mb="10px">
      <Box
        width="50vh"
        maxHeight="30vh"
        backgroundColor="cyan.500"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        p="15px"
        borderRadius='lg'
        bgGradient="linear(to right, cyan.500,whiteAlpha.500)"
      >
        <Tag
          colorScheme="gray"
          backgroundColor="cyan.500"
          bgGradient="linear(to right, cyan.200,green.200)"
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
