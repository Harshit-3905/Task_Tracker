import React from "react";
import { VStack, Box, HStack } from "@chakra-ui/react";
import Timer from "../components/miscellaneous/Pomodoro/Timer";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Spotify from "../components/miscellaneous/Spotify";
import Sidebar from "../components/miscellaneous/Sidebar";

const PomodoroPage = () => {
  return (
    <Box width="100vw" height="100vh" padding="15px">
      <HStack style={{ width: "100%", height: "100%" }}>
        <Sidebar />
        <VStack width={{ base: "100%", md: "100%", lg: "80%" }} height="100%">
          <Navbar />
          <HStack w="100%" h="80%">
            <Timer />
            <Spotify />
          </HStack>
          <Quote />
        </VStack>
      </HStack>
    </Box>
  );
};

export default PomodoroPage;
