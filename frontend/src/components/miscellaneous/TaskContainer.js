import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import TaskItem from ".//TaskItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/actions/index";

const TaskContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);
  return (
    <HStack height="80%" width="100%" paddingTop={3} marginBottom={3}>
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
        overflow={"scroll"}
      >
        {tasks.map((task) => (
          <TaskItem
            id={task._id}
            title={task.title}
            description={task.description}
            completed={task.completed}
          />
        ))}
      </Box>
    </HStack>
  );
};

export default TaskContainer;
