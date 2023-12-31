import React from "react";
import {
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Box,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaUserAlt, FaTasks, FaClock } from "react-icons/fa";
import { MdLeaderboard, MdLightMode } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const userName = JSON.parse(localStorage.getItem("userInfo")).name;
  const userEmail = JSON.parse(localStorage.getItem("userInfo")).email;
  const pic_url = JSON.parse(localStorage.getItem("userInfo")).pic;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const { colorMode, toggleColorMode } = useColorMode();
  const profileHandler = () => {
    history.push("/profile");
  };
  const taskHandler = () => {
    history.push("/home");
  };
  const leaderboardHandler = () => {
    history.push("/leaderboard");
  };
  const redirectPomodoroPage = () => {
    history.push("/pomodoro");
  };
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  return (
    <Flex
      p={2}
      h="10%"
      w="100%"
      bg={bgColor}
      borderRadius="lg"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        display={{ base: "", md: "", lg: "none" }}
        variant="outline"
        color={color}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Box h="100%" w="100%" p={6}>
              <VStack width="100%" height="100%" alignItems="left">
                <HStack height="10%" w="100%">
                  <Avatar src={pic_url} size="md"></Avatar>

                  <VStack gap={-2} d="flex" alignItems="flex-start">
                    <Text color={color}>{userName}</Text>
                    <Text color={color}>{userEmail}</Text>
                  </VStack>
                </HStack>
                <HStack
                  height="50px"
                  w="100%"
                  _hover={{ bg: "blue.500", cursor: "pointer" }}
                  onClick={profileHandler}
                  p={3}
                  borderRadius="lg"
                >
                  <Icon as={FaUserAlt} boxSize={6} />
                  <Text color={color} fontSize="15px">
                    Profile
                  </Text>
                </HStack>
                <HStack
                  height="50px"
                  w="100%"
                  _hover={{ bg: "blue.500", cursor: "pointer" }}
                  onClick={taskHandler}
                  p={3}
                  borderRadius="lg"
                >
                  <Icon as={FaTasks} boxSize={6} />
                  <Text color={color} fontSize="15px">
                    Tasks
                  </Text>
                </HStack>
                <HStack
                  height="50px"
                  w="100%"
                  _hover={{ bg: "blue.500", cursor: "pointer" }}
                  onClick={leaderboardHandler}
                  p={3}
                  borderRadius="lg"
                >
                  <Icon as={MdLeaderboard} boxSize={6} />
                  <Text color={color} fontSize="15px">
                    Leaderboard
                  </Text>
                </HStack>
                <HStack
                  height="50px"
                  w="100%"
                  _hover={{ bg: "blue.500", cursor: "pointer" }}
                  p={3}
                  borderRadius="lg"
                  onClick={redirectPomodoroPage}
                >
                  <Icon as={FaClock} boxSize={6} />
                  <Text color={color} fontSize="15px">
                    Pomodoro Timer
                  </Text>
                </HStack>
                <HStack
                  height="50px"
                  w="100%"
                  _hover={{ bg: "blue.500", cursor: "pointer" }}
                  p={3}
                  borderRadius="lg"
                  onClick={toggleColorMode}
                >
                  <Icon as={MdLightMode} boxSize={6} />
                  <Text color={color} fontSize="15px">
                    {colorMode === "light" ? "Dark" : "Light"} Mode
                  </Text>
                </HStack>
                <HStack
                  height="50px"
                  w="100%"
                  _hover={{ bg: "blue.500", cursor: "pointer" }}
                  onClick={logoutHandler}
                  p={3}
                  borderRadius="lg"
                >
                  <Icon as={BiLogOut} boxSize={6} />
                  <Text color={color} fontSize="15px">
                    LogOut
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Text
        fontSize="3xl"
        fontFamily="Satisfy"
        color={color}
        textAlign="center"
        mx="auto"
      >
        Task Tracker
      </Text>
    </Flex>
  );
};

export default Navbar;
