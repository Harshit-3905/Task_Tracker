import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const QuoteGenerator = async () => {
    const q = await axios.get("https://api.quotable.io/random");
    console.log(q.data);
    setQuote(q.data.content);
  };
  useEffect(() => {
    QuoteGenerator();
  }, []);

  return (
    <Box
      d="flex"
      p={3}
      h="10%"
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
