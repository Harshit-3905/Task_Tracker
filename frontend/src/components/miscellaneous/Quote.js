import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Quote = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    let q;
    axios
      .get("https://api.quotable.io/random?maxLength=50")
      .then((response) => {
        q = response.data.content;
        setQuote(q);
      });
  }, []);
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <Box
      d="flex"
      h="10%"
      bg={bgColor}
      w="100%"
      borderRadius="lg"
      textAlign={"center"}
      fontSize="18px"
    >
      <Text pt={2} color={color} fontFamily={"Satisfy"}>
        {quote}
      </Text>
    </Box>
  );
};

export default Quote;
