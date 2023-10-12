import React from "react";
import TaskContainer from ".//TaskContainer";
import AddTask from ".//AddTask";
import { Box } from "@chakra-ui/react";

const Task = () => {
  return (
    <Box height="80%" w="100%" marginBottom={6}>
      <AddTask />
      <TaskContainer />
    </Box>
  );
};

export default Task;
