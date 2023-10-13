import React from "react";
import { HStack, Checkbox, Text, Button, Icon, Input } from "@chakra-ui/react";
import { AiFillEdit, AiFillDelete, AiFillSave } from "react-icons/ai";
import { toggleTask, updateTask, deleteTask } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const TaskItem = (task) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const textStyle = {
    textDecoration: task.completed ? "line-through" : "none",
    display: editing ? "none" : "block",
  };
  const dispatch = useDispatch();
  const onTaskChange = (e) => {
    setEditing(false);
    dispatch(updateTask(task.id, { title }));
  };
  const refreshTaskList = async () => {
    await dispatch(deleteTask(task.id));
  };
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <HStack
      height="13%"
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
        onChange={() => dispatch(toggleTask(task.id))}
      ></Checkbox>
      <HStack w="85%" pl={2}>
        <Text fontSize="lg" style={textStyle} color={color}>
          {title}
        </Text>
        <Input
          size="lg"
          value={title}
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
