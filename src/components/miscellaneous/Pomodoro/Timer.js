import React from "react";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Clock from "./Clock";
import ConfigureModal from "./ConfigureModal";
import BlockModal from "./BlockModal";
import { useColorModeValue } from "@chakra-ui/color-mode";
const Timer = () => {
  const chrome = window.chrome;
  const websites = [
    { name: "Facebook", website: "https://www.facebook.com/", blocked: false },
    { name: "Twitter", website: "https://twitter.com/", blocked: false },
    {
      name: "Instagram",
      website: "https://www.instagram.com/",
      blocked: false,
    },
    { name: "LinkedIn", website: "https://www.linkedin.com/", blocked: false },
    { name: "YouTube", website: "https://www.youtube.com/", blocked: false },
    { name: "Discord", website: "https://discord.com/", blocked: false },
    { name: "WhatsApp", website: "https://www.whatsapp.com/", blocked: false },
    { name: "Netflix", website: "https://www.netflix.com/in/", blocked: false },
  ];
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const [isConfigure, setIsConfigure] = useState(false);
  const [isBlockOpen, setIsBlockOpen] = useState(false);
  const [block, setBlock] = useState(websites);
  useEffect(() => {
    chrome.storage.local.get("blockedWebsites", function (data) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        const storedBlock = data.blockedWebsites;
        setBlock(storedBlock || websites);
      }
    });
  }, []);
  const [pomodoro, setPomodoro] = useState(25);
  const [pomoBreak, setPomoBreak] = useState(5);
  const updateConfigure = (bool) => {
    setIsConfigure(bool);
  };
  const updateOpen = (bool) => {
    setIsBlockOpen(bool);
  };
  const updateBlock = (block) => {
    setBlock(block);
  };
  const updatePomodoro = (_pomodoro, _pomoBreak) => {
    setPomodoro(_pomodoro);
    setPomoBreak(_pomoBreak);
  };
  const updateBlockItem = (index, isBlocked) => {
    const updatedBlock = [...block];
    updatedBlock[index].blocked = isBlocked;
    setBlock(updatedBlock);
  };
  //UseEffect to take eye on bool change
  useEffect(() => {
    setIsConfigure(isConfigure);
  }, [isConfigure]);
  useEffect(() => {
    setIsBlockOpen(isBlockOpen);
  }, [isBlockOpen]);
  useEffect(() => {
    setBlock(block);
    chrome.storage.local.set({ blockedWebsites: block }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      }
    });
  }, [block]);
  return (
    <Box height="100%" w="50%" bg={bgColor} borderRadius="lg">
      <Clock
        updateOpen={updateOpen}
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
      />
      <ConfigureModal
        isConfigure={isConfigure}
        updateConfigure={updateConfigure}
        updatePomodoro={updatePomodoro}
      />
      <BlockModal
        isBlockOpen={isBlockOpen}
        updateOpen={updateOpen}
        block={block}
        updateBlock={updateBlock}
        updateBlockItem={updateBlockItem}
      />
    </Box>
  );
};

export default Timer;
