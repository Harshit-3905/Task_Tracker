import React from "react";
import { HStack, Checkbox, Text, Button, Icon, Input } from "@chakra-ui/react";
import { AiFillEdit, AiFillDelete, AiFillSave } from "react-icons/ai";
import { toggleTask, updateTask, deleteTask } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
  return (
    <HStack
      height="13%"
      width="100%"
      bg={"blue.200"}
      borderRadius="lg"
      borderWidth="1px"
      marginBottom={2}
    >
      <Checkbox
        colorScheme="green"
        pl={4}
        isChecked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      ></Checkbox>
      <HStack w="85%" pl={2}>
        <Text fontSize="lg" style={textStyle}>
          {title}
        </Text>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          display={editing ? "block" : "none"}
          w="100%"
        ></Input>
      </HStack>
      <Button
        size="md"
        onClick={
          editing
            ? onTaskChange
            : () => {
                setEditing((prevState) => !prevState);
              }
        }
      >
        <Icon as={editing ? AiFillSave : AiFillEdit} />
      </Button>
      <Button size="md" onClick={() => dispatch(deleteTask(task.id))}>
        <Icon as={AiFillDelete} />
      </Button>
    </HStack>
  );
};

export default TaskItem;
