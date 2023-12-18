import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Navbar = () => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <HStack
      d="flex"
      p={2}
      h="10%"
      w="100%"
      bg={bgColor}
      borderRadius="lg"
      justifyContent="center"
    >
      <Text fontSize="3xl" fontFamily={"Satisfy"} color={color}>
        Task Tracker
      </Text>
    </HStack>
  );
};

export default Navbar;
