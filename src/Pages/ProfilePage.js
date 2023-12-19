import React from "react";
import { VStack, HStack, Box } from "@chakra-ui/react";
import Navbar from "../components/miscellaneous/Navbar";
import Quote from "../components/miscellaneous/Quote";
import Profile from "../components/miscellaneous/Profile";
import Sidebar from "../components/miscellaneous/Sidebar";

const ProfilePage = () => {
  return (
    <Box width="100vw" height="100vh" padding="15px">
      <HStack style={{ width: "100%", height: "100%" }}>
        <Sidebar />
        <VStack width={{ base: "100%", md: "100%", lg: "80%" }} height="100%">
          <Navbar />
          <Profile />
          <Quote />
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProfilePage;
