import React from "react";
import { HStack, Input, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddTask = () => {
  return (
    <HStack width="100%">
      <Input
        placeholder="Add a Task"
        height="100%"
        d="flex"
        p={3}
        bg={"white"}
        w="90%"
        m="5px 0 5px 0"
        borderRadius="lg"
        borderWidth="1px"
      />
      <Button
        variant="ghost"
        display={"flex"}
        height="100%"
        width="10%"
        bg={"blue"}
        borderRadius="lg"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AddIcon fontSize="2xl" />
      </Button>
    </HStack>
  );
};

export default AddTask;
