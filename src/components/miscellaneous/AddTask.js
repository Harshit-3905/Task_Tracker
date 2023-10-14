import React, { useState } from "react";
import { HStack, Box, Input, Button, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/index";
import { useColorModeValue } from "@chakra-ui/color-mode";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");

  const taskAppend = async () => {
    setLoading(true);
    if (title.length === 0) {
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
      const email = JSON.parse(localStorage.getItem("userInfo")).email;
      dispatch(addTask({ title, email }));
      toast({
        title: "Task Added",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setTitle("");
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
    <Box width="100%" bg={bgColor} borderRadius="lg" p={2} h="15%">
      <HStack width="100%" height="100%">
        <Input
          placeholder="Title"
          height="100%"
          d="flex"
          p={3}
          w="93%"
          m="5px 0 5px 0"
          borderColor={color}
          color={color}
          borderWidth="1px"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          display={"flex"}
          height="100%"
          width="7%"
          onClick={taskAppend}
          bg={"green.300"}
          borderRadius="lg"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AddIcon fontSize="sm" color={color} />
        </Button>
      </HStack>
    </Box>
  );
};

export default AddTask;
