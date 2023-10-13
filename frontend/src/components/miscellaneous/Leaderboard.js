import React, { useEffect } from "react";
import {
  Box,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Center,
  Thead,
  Th,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const [topFive, setTopFive] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/user/leaderboard").then((response) => {
      const leaderboardData = response.data;
      setTopFive(leaderboardData.slice(0, 10));
    });
  }, []);
  return (
    <Box
      d="flex"
      p={3}
      h="100%"
      bg={bgColor}
      w="100%"
      borderRadius="lg"
      borderWidth="1px"
      textAlign={"center"}
      color={color}
    >
      <Text fontSize="20px">Leaderboard</Text>
      <Center>
        <TableContainer pt={6} p={4} width="80%">
          <Table
            variant="striped"
            colorScheme="teal"
            size={"sm"}
            textAlign={"center"}
          >
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>No. of Task Completed</Th>
              </Tr>
            </Thead>
            <Tbody color={color} fontSize="15px">
              {topFive.map((user) => (
                <Tr>
                  <Td>
                    <HStack>
                      <Avatar src={user.pic} size={"sm"}></Avatar>
                      <Text>{user.name}</Text>
                    </HStack>
                  </Td>
                  <Td textAlign={"center"}>{user.numberofTasksCompleted}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Box>
  );
};

export default Leaderboard;
