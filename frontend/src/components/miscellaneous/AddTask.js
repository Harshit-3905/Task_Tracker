import React, { useState } from "react";
import { HStack, VStack, Input, Button, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";

const AddTask = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const taskAppend = async () => {
    setLoading(true);
    if (!title) {
      toast({
        title: "Please Add Title",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const email = JSON.parse(localStorage.getItem("userInfo")).email;
      const data = await axios.post(
        "http://localhost:5000/api/task/",
        { title, description, email },
        config
      );
      toast({
        title: "Task Added",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast({
        title: "Error Occured",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <VStack width="100%" bg={"white"} borderRadius="lg" p={3}>
      <HStack width="100%" height="40%">
        <Input
          placeholder="Title"
          height="100%"
          d="flex"
          p={3}
          w="93%"
          m="5px 0 5px 0"
          borderWidth="1px"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          variant="ghost"
          display={"flex"}
          height="100%"
          width="7%"
          onClick={taskAppend}
          bg={"blue"}
          borderRadius="lg"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AddIcon fontSize="2xl" />
        </Button>
      </HStack>
      <Input
        placeholder="Description"
        height="50%"
        d="flex"
        p={3}
        w="100%"
        m="5px 0 5px 0"
        borderWidth="1px"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </VStack>
  );
};

export default AddTask;
