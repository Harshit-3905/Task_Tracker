import React from "react";
import { VStack, HStack, Box } from "@chakra-ui/react";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Sidebar from "../components/miscellaneous/Sidebar";
import Task from "../components/miscellaneous/Task";

const HomePage = () => {
  return (
    <Box width="100vw" height="100vh" padding="10px 20px 10px 20px">
      <HStack w="100%" h="100%">
        <Sidebar />
        <VStack style={{ width: "80%", height: "100%" }}>
          <Box w="100%">
            <Navbar />
          </Box>
          <Task />
          <Quote />
        </VStack>
      </HStack>
    </Box>
  );
};

export default HomePage;
