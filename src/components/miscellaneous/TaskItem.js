import React from "react";
import { HStack, Checkbox, Text, Button, Icon, Input } from "@chakra-ui/react";
import { AiFillEdit, AiFillDelete, AiFillSave } from "react-icons/ai";
import { toggleTask, updateTask, deleteTask } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const TaskItem = (task) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const textStyle = {
    textDecoration: task.completed ? "line-through" : "none",
    display: editing ? "none" : "block",
  };
  const toast = useToast();
  const dispatch = useDispatch();
  const onTaskChange = (e) => {
    setEditing(false);
    dispatch(updateTask(task.id, { title }));
    toast({
      title: "Task Successfully Edited",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  const refreshTaskList = async () => {
    await dispatch(deleteTask(task.id));
    toast({
      title: "Task Deleted",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const onCompletion = async () => {
    const email = JSON.parse(localStorage.getItem("userInfo")).email;
    axios.put(
      "https://tasktrackerbackend-raao.onrender.com/api/user/increment",
      { email }
    );
    dispatch(toggleTask(task.id));
    toast({
      title: "Task Completed",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  return (
    <HStack
      height="40px"
      width="100%"
      bg={"teal.500"}
      borderRadius="lg"
      borderWidth="1px"
      marginBottom={2}
      pr={1}
    >
      <Checkbox
        colorScheme="green"
        pl={4}
        color={color}
        isChecked={task.completed}
        onChange={onCompletion}
      ></Checkbox>
      <HStack w="85%" pl={2}>
        <Text fontSize="lg" style={textStyle} color={color}>
          {title}
        </Text>
        <Input
          size="lg"
          value={title}
          height={"100%"}
          onChange={(e) => setTitle(e.target.value)}
          display={editing ? "block" : "none"}
          w="100%"
        ></Input>
      </HStack>
      <Button
        size="sm"
        onClick={
          editing
            ? onTaskChange
            : () => {
                setEditing((prevState) => !prevState);
              }
        }
        bg="yellow.500"
      >
        <Icon as={editing ? AiFillSave : AiFillEdit} color={color} />
      </Button>
      <Button size="sm" onClick={refreshTaskList} bg="red.500">
        <Icon as={AiFillDelete} color={color} />
      </Button>
    </HStack>
  );
};

export default TaskItem;
