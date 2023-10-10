import React from "react";
import {
  HStack,
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <HStack
        justifyContent={"space-between"}
        d="flex"
        p={3}
        h="100%"
        w="100%"
        bg={"white"}
        mb="5px"
        borderRadius="lg"
        textAlign={"center"}
      >
        <Button variant="ghost" onClick={onOpen}>
          <i className="fas fa-search"></i>
          <Text
            fontSize={{ base: "0px", md: "15px" }}
            d={{ base: "", md: "flex" }}
            px="4"
          >
            <HamburgerIcon fontSize="3xl" m={1} />
          </Text>
        </Button>
        <Text fontSize="3xl" fontFamily={"Satisfy"} color="black">
          Task Tracker
        </Text>
        <Button>Start Timer</Button>
      </HStack>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search User</DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
