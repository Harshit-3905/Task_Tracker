import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    let q;
    axios.get("https://api.quotable.io/random").then((response) => {
      q = response.data.content;
      setQuote(q);
    });
  }, []);
  return (
    <Box
      d="flex"
      marginTop={3}
      p={3}
      h="6%"
      bg={"white"}
      w="100%"
      mt="5px"
      borderRadius="lg"
      borderWidth="1px"
      textAlign={"center"}
    >
      {quote}
    </Box>
  );
};

export default Quote;
