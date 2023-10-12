import React from "react";
import {
  Box,
  Avatar,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return (
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
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Avatar name={user.name} src={user.pic} size="2xl"></Avatar>
      <Box width="70%" d="flex" alignContent={"center"} justifyItems={"center"}>
        <TableContainer pt={6} p={6} justifySelf={"center"}>
          <Table variant="striped" colorScheme="teal">
            <Tbody>
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
      </Box>
    </Box>
  );
};

export default Profile;
