import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import TaskContainer from "../components/miscellaneous/TaskContainer";
import AddTask from "../components/miscellaneous/AddTask";

const HomePage = () => {
  return (
    <Box width="100vw" height="100vh" padding="0 25px 0 25px">
      <VStack style={{ width: "100%", height: "100%" }}>
        <Box w="100%">
          <Navbar />
        </Box>
        <AddTask />
        <TaskContainer />
        <Quote />
      </VStack>
    </Box>
  );
};

export default HomePage;
