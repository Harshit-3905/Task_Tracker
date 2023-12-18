import React from "react";
import { VStack, HStack, Box } from "@chakra-ui/react";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Leaderboard from "../components/miscellaneous/Leaderboard";
import Sidebar from "../components/miscellaneous/Sidebar";

const LeaderboardPage = () => {
  return (
    <Box width="100vw" height="100vh" padding="15px">
      <HStack style={{ width: "100%", height: "100%" }}>
        <Sidebar />
        <VStack style={{ width: "80%", height: "100%" }}>
          <Navbar />
          <Leaderboard />
          <Quote />
        </VStack>
      </HStack>
    </Box>
  );
};

export default LeaderboardPage;
