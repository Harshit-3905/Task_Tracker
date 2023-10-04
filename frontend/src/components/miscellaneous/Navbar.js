import React from "react";
import {
  HStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  MenuItem,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useHistory } from "react-router-dom";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
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
        <div>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
            ></MenuButton>
            <MenuList>
              <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
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
