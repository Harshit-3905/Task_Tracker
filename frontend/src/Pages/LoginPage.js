import { React, useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const Homepage = () => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      history.push("/home");
    }
  }, [history]);
  return (
    <Container w="100%" h="100%" centerContent d="flex" justifyContent="center">
      <Box
        d="flex"
        justifyContent="center"
        p={2}
        bg={bgColor}
        w="100%"
        m="10px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign={"center"}
      >
        <Text fontSize={"2xl"} fontFamily={"Satisfy"} color={color}>
          Task Tracker
        </Text>
      </Box>
      <Box bg={bgColor} w="100%" p={2} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%" color={color}>
              Login
            </Tab>
            <Tab width="50%" color={color}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
