import React from "react";
import { HStack, Box } from "@chakra-ui/react";

const TaskContainer = () => {
  return (
    <HStack height="80%" width="100%">
      <Box
        d="flex"
        p={3}
        h="100%"
        bg={"white"}
        w="100%"
        m="5px 0 5px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign={"center"}
      >
        Task To Do
      </Box>
    </HStack>
  );
};

export default TaskContainer;
