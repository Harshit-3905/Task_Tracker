import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import TaskItem from ".//TaskItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/actions/index";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useColorModeValue } from "@chakra-ui/color-mode";

const TaskContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <VStack height="90%" width="100%" paddingTop={2}>
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <Box
              d="flex"
              p={3}
              h="100%"
              bg={bgColor}
              w="100%"
              borderRadius="lg"
              borderWidth="1px"
              textAlign={"center"}
              overflow={"scroll"}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task) => (
                <TaskItem
                  id={task._id}
                  title={task.title}
                  completed={task.completed}
                />
              ))}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </VStack>
  );
};

export default TaskContainer;
