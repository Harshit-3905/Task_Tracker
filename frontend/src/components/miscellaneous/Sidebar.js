import React from "react";
import { Box, VStack, HStack, Image, Text, Icon } from "@chakra-ui/react";
import { FaUserAlt, FaTasks } from "react-icons/fa";
import { MdLeaderboard, MdLightMode } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const userName = JSON.parse(localStorage.getItem("userInfo")).name;
  const userEmail = JSON.parse(localStorage.getItem("userInfo")).email;
  const pic_url = JSON.parse(localStorage.getItem("userInfo")).pic;
  const profileHandler = () => {
    history.push("/profile");
  };
  const taskHandler = () => {
    history.push("/home");
  };
  const leaderboardHandler = () => {
    history.push("/leaderboard");
  };
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  return (
    <Box
      width="20%"
      height="100%"
      bg="white"
      d="flex"
      p="10px 0 10px 0"
      m="5px 0 5px 0"
      borderRadius="lg"
      textAlign={"center"}
    >
      <Box h="100%" w="100%" p={6}>
        <VStack width="100%" height="100%" alignItems="left">
          <HStack height="10%" w="100%">
            <Image
              borderRadius="full"
              boxSize="150px"
              height="50px"
              width="50px"
              src={pic_url}
            />
            <VStack gap={-2} d="flex" alignItems="flex-start">
              <Text>{userName}</Text>
              <Text>{userEmail}</Text>
            </VStack>
          </HStack>
          <HStack
            height="40px"
            w="100%"
            _hover={{ bg: "blue.500", cursor: "pointer" }}
            onClick={profileHandler}
          >
            <Icon as={FaUserAlt} h="90%" />
            <Text>Profile</Text>
          </HStack>
          <HStack
            height="40px"
            w="100%"
            _hover={{ bg: "blue.500", cursor: "pointer" }}
            onClick={taskHandler}
          >
            <Icon as={FaTasks} h="90%" />
            <Text>Tasks</Text>
          </HStack>
          <HStack
            height="40px"
            w="100%"
            _hover={{ bg: "blue.500", cursor: "pointer" }}
            onClick={leaderboardHandler}
          >
            <Icon as={MdLeaderboard} h="90%" />
            <Text>Leaderboard</Text>
          </HStack>
          <HStack
            height="40px"
            w="100%"
            _hover={{ bg: "blue.500", cursor: "pointer" }}
          >
            <Icon as={MdLightMode} h="90%" />
            <Text>Change Appearance</Text>
          </HStack>
          <HStack
            height="40px"
            w="100%"
            _hover={{ bg: "blue.500", cursor: "pointer" }}
            onClick={logoutHandler}
          >
            <Icon as={BiLogOut} h="90%" />
            <Text>LogOut</Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
