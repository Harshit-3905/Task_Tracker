import React from "react";
import { VStack, HStack, Box } from "@chakra-ui/react";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Task from "../components/miscellaneous/Task";
import Sidebar from "../components/miscellaneous/Sidebar";

const HomePage = () => {
  return (
    <Box width="100vw" height="100vh" padding="15px">
      <HStack style={{ width: "100%", height: "100%" }}>
        <Sidebar />
        <VStack width={{ base: "100%", md: "100%", lg: "80%" }} height="100%">
          <Navbar />
          <Task />
          <Quote />
        </VStack>
      </HStack>
    </Box>
  );
};

export default HomePage;
