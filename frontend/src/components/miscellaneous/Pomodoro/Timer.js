import React from "react";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Clock from "./Clock";
import ConfigureModal from "./ConfigureModal";
import { useColorModeValue } from "@chakra-ui/color-mode";
const Timer = () => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const [isConfigure, setIsConfigure] = useState(false);
  const [pomodoro, setPomodoro] = useState(25);
  const [pomoBreak, setPomoBreak] = useState(5);
  const updateConfigure = (bool) => {
    setIsConfigure(bool);
  };

  const updatePomodoro = (_pomodoro, _pomoBreak) => {
    setPomodoro(_pomodoro);
    setPomoBreak(_pomoBreak);
  };
  //UseEffect to take eye on bool change
  useEffect(() => {
    setIsConfigure(isConfigure);
  }, [isConfigure]);
  return (
    <Box height="100%" w="50%" bg={bgColor} borderRadius="lg">
      <Clock
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
      />
      <ConfigureModal
        isConfigure={isConfigure}
        updateConfigure={updateConfigure}
        updatePomodoro={updatePomodoro}
      />
    </Box>
  );
};

export default Timer;
