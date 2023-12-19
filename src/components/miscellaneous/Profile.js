import React from "react";
import {
  Box,
  Avatar,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Center,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <Box
      d="flex"
      p={5}
      h="80%"
      bg={bgColor}
      w="100%"
      borderRadius="lg"
      borderWidth="1px"
      textAlign={"center"}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Avatar name={user.name} src={user.pic} size="2xl"></Avatar>
      <Center width="100%">
        <TableContainer pt={6} width={{ base: "100%", md: "80%", lg: "70%" }}>
          <Table variant="striped" colorScheme="teal">
            <Tbody color={color} fontSize="15px">
              <Tr>
                <Td>Name</Td>
                <Td>{user.name}</Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td>{user.email}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Box>
  );
};

export default Profile;
