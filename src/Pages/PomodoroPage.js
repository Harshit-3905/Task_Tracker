import React from "react";
import { VStack, Box, HStack } from "@chakra-ui/react";
import Timer from "../components/miscellaneous/Pomodoro/Timer";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Spotify from "../components/miscellaneous/Spotify";

const PomodoroPage = () => {
  return (
    <VStack width="100vw" height="100vh" padding="5px 10px 5px 10px">
      <Box w="100%">
        <Navbar />
      </Box>
      <HStack w="100%" h="80%">
        <Timer />
        <Spotify />
      </HStack>
      <Quote />
    </VStack>
  );
};

export default PomodoroPage;
