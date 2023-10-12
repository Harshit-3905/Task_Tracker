import React from "react";
import { VStack, HStack, Box } from "@chakra-ui/react";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Leaderboard from "../components/miscellaneous/Leaderboard";
import Sidebar from "../components/miscellaneous/Sidebar";

const LeaderboardPage = () => {
  return (
    <Box width="100vw" height="100vh" padding="10px 20px 10px 20px">
      <HStack w="100%" h="100%">
        <Sidebar />
        <VStack style={{ width: "80%", height: "100%" }}>
          <Box w="100%">
            <Navbar />
          </Box>
          <Leaderboard />
          <Quote />
        </VStack>
      </HStack>
    </Box>
  );
};

export default LeaderboardPage;
