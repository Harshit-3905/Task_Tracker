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
    axios
      .get("https://tasktrackerbackend-raao.onrender.com/api/user/leaderboard")
      .then((response) => {
        const leaderboardData = response.data;
        setTopFive(leaderboardData.slice(0, 5));
      });
  }, []);
  return (
    <Box
      d="flex"
      p={3}
      h="80%"
      bg={bgColor}
      w="100%"
      borderRadius="lg"
      borderWidth="1px"
      textAlign={"center"}
      color={color}
    >
      <Text fontSize="30px">Leaderboard</Text>
      <Center>
        <TableContainer pt={6} width={{ base: "100%", md: "80%", lg: "70%" }}>
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
