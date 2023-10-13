import React from "react";
import TaskContainer from ".//TaskContainer";
import AddTask from ".//AddTask";
import { Box } from "@chakra-ui/react";

const Task = () => {
  return (
    <Box height="85%" w="100%" marginBottom={4} gap={-2}>
      <AddTask />
      <TaskContainer />
    </Box>
  );
};

export default Task;
