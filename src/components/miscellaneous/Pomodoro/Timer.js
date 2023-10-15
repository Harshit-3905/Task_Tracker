import React from "react";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Clock from "./Clock";
import ConfigureModal from "./ConfigureModal";
import BlockModal from "./BlockModal";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Timer = () => {
  const websites = [
    { name: "Facebook", website: "", blocked: false },
    { name: "Twitter", website: "", blocked: false },
    { name: "Instagram", website: "", blocked: false },
    { name: "LinkedIn", website: "", blocked: false },
    { name: "YouTube", website: "", blocked: false },
    { name: "Discord", website: "", blocked: false },
    { name: "WhatsApp", website: "", blocked: false },
    { name: "Netflix", website: "", blocked: false },
  ];
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const [isConfigure, setIsConfigure] = useState(false);
  const [isBlockOpen, setIsBlockOpen] = useState(false);
  const [block, setBlock] = useState(websites);
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
  //UseEffect to take eye on bool change
  useEffect(() => {
    setIsConfigure(isConfigure);
  }, [isConfigure]);
  useEffect(() => {
    setIsBlockOpen(isBlockOpen);
  }, [isBlockOpen]);
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
      />
    </Box>
  );
};

export default Timer;
