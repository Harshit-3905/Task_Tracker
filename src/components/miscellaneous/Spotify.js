import React from "react";
import { Box, Input, HStack, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { SpotifyEmbed } from "spotify-embed";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useToast } from "@chakra-ui/react";

const Spotify = () => {
  const bgColor = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("black", "white");
  const [playlistLink, setPlaylistLink] = React.useState("");
  const [linkTaken, setLinkTaken] = React.useState(false);
  const toast = useToast();
  const playlistAdded = () => {
    if (!playlistLink) {
      toast({
        title: "Please Enter a Link",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    setLinkTaken(true);
    toast({
      title: "Playlist Added",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  return (
    <Box h="100%" w="50%" bg={bgColor} color={color} borderRadius="lg">
      {!linkTaken && (
        <HStack padding={3} h="15%">
          <Input
            placeholder="Add Spotify Playlist Link"
            color={color}
            onChange={(e) => setPlaylistLink(e.target.value)}
            h="100%"
          />
          <Button
            display={"flex"}
            height="100%"
            width="7%"
            onClick={playlistAdded}
            bg={"green.300"}
            borderRadius="lg"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AddIcon fontSize="sm" color={color} />
          </Button>
        </HStack>
      )}
      {linkTaken && (
        <Box h="20%" w="100%" bg={"gray.700"}>
          <SpotifyEmbed src={playlistLink} />
        </Box>
      )}
    </Box>
  );
};

export default Spotify;
