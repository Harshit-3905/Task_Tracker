import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Leaderboard from "../components/miscellaneous/Leaderboard";

const LeaderboardPage = () => {
  return (
    <Box width="100vw" height="100vh" padding="5px 10px 5px 10px">
      <VStack style={{ width: "100%", height: "100%" }}>
        <Box w="100%">
          <Navbar />
        </Box>
        <Leaderboard />
        <Quote />
      </VStack>
    </Box>
  );
};

export default LeaderboardPage;
