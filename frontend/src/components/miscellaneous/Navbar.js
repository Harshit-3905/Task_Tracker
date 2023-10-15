import React from "react";
import {
  HStack,
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const redirectPomodoroPage = () => {
    history.push("/pomodoro");
  };
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <div>
      <HStack
        justifyContent={"space-between"}
        d="flex"
        p={2}
        h="100%"
        w="100%"
        bg={bgColor}
        borderRadius="lg"
        textAlign={"center"}
      >
        <Button variant="ghost" onClick={onOpen}>
          <i className="fas fa-search"></i>
          <Text
            fontSize={{ base: "0px", md: "10px" }}
            d={{ base: "", md: "flex" }}
            px="4"
            color={color}
          >
            <HamburgerIcon fontSize="2xl" m={1} color={color} />
          </Text>
        </Button>
        <Text fontSize="2xl" fontFamily={"Satisfy"} color={color}>
          Task Tracker
        </Text>
        <Button onClick={redirectPomodoroPage} bg={"blue.500"} size="sm">
          Pomodoro Timer
        </Button>
      </HStack>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
