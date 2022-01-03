import { Box, Tag, Text } from "@chakra-ui/react";
import React from "react";

export default function Warning(props) {
  return (
    <Box align="center">
      <Tag color="offWhite" mb="10px" p="6px" backgroundColor="warning" fontWeight="900">
        Careful! The amount you entered may be higher than the capacity.
      </Tag>
    </Box>
  );
}
