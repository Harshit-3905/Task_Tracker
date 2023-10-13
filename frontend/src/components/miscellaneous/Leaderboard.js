import React from "react";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Leaderboard = () => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <Box
      d="flex"
      p={3}
      h="100%"
      bg={bgColor}
      w="100%"
      borderRadius="lg"
      borderWidth="1px"
      textAlign={"center"}
    >
      Leaderboard
    </Box>
  );
};

export default Leaderboard;
