import React from "react";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import startTimer from "../../../sounds/startTimer.mp3";
import pauseTimer from "../../../sounds/pauseTimer.mp3";
import timesUp from "../../../sounds/timesUp.mp3";
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Icon,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Clock = (props) => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const { updateConfigure, pomodoro, pomoBreak } = props;
  const [isPlay, setIsPlay] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [_interval, _setInterval] = useState(0);
  const [_remainingTimeinMs, _setRemainingTimeinMs] = useState(0);
  const [_startTimer] = useSound(startTimer);
  const [_pauseTimer] = useSound(pauseTimer);
  const [_timesUp] = useSound(timesUp);

  const configureTime = (_session, _break) => {
    if (!isBreak) {
      _session < 10 ? setMinutes(`0${_session}`) : setMinutes(pomodoro);
      setSeconds("00");
    } else {
      _break < 10 ? setMinutes(`0${_break}`) : setMinutes(_break);
      setSeconds("00");
    }
  };
  /**
   * Countdown function to count the time.
   */
  const countDownFunction = (_endTime) => {
    let remainingTimeinMs = _endTime - Date.now();
    _setRemainingTimeinMs(remainingTimeinMs);
    let remainingTimeinS = Math.round(remainingTimeinMs / 1000);
    //Preparing for the two digits minutes & seconds
    let _tempMinute = Math.floor(remainingTimeinS / 60);
    let _tempSeconds = Math.floor(remainingTimeinS % 60);
    _tempMinute < 10 ? setMinutes(`0${_tempMinute}`) : setMinutes(_tempMinute);
    _tempSeconds < 10
      ? setSeconds(`0${_tempSeconds}`)
      : setSeconds(_tempSeconds);
  };
  // Changing the play/pause btn
  const changePlayBtn = () => {
    if (minutes === "00" && seconds === "00") return;
    setIsPlay(!isPlay);
    if (!isPlay) {
      _startTimer();
      let totalTimeinMs = _remainingTimeinMs;
      let _endTime = totalTimeinMs + Date.now();
      _setInterval(
        setInterval(() => {
          countDownFunction(_endTime);
        }, 100)
      );
    } else {
      _pauseTimer();
      clearInterval(_interval);
    }
  };
  //Timer Restart functionality
  const restartFunction = () => {
    configureTime(pomodoro, pomoBreak);
    clearInterval(_interval);
    setIsPlay(false);
    setIsBreak(false);
    _setRemainingTimeinMs(pomodoro * 60000);
  };
  const changeConfigure = () => {
    restartFunction();
    updateConfigure(true);
  };
  // ChangingConfigure
  useEffect(() => {
    configureTime(pomodoro, pomoBreak);
    if (!isBreak) {
      _setRemainingTimeinMs(pomodoro * 60000);
    } else {
      _setRemainingTimeinMs(pomoBreak * 60000);
    }
  }, [pomodoro, pomoBreak, isBreak]);
  //useEffect
  useEffect(() => {
    if (
      minutes === "00" &&
      seconds === "00" &&
      _remainingTimeinMs < 1000 &&
      _remainingTimeinMs !== 0
    ) {
      _timesUp();
      clearInterval(_interval);
      setIsPlay(false);
      setIsBreak(!isBreak);
    }
  }, [minutes, seconds]);

  return (
    <VStack bg={bgColor} borderRadius="lg">
      <Box textAlign={"center"} pt={3}>
        <Text fontSize="20px" color={color} fontFamily={"Roboto"}>
          {isBreak ? "BREAK" : "SESSION"}
        </Text>
        <CircularProgress
          size="200px"
          thickness="4px"
          value={(_remainingTimeinMs / (pomodoro * 60000)) * 100}
          color="green.400"
        >
          <CircularProgressLabel fontFamily={"Roboto"}>
            {minutes} : {seconds}
          </CircularProgressLabel>
        </CircularProgress>
      </Box>
      <HStack>
        <Button onClick={changePlayBtn} bg="green.500">
          <Icon as={isPlay ? FaPause : FaPlay} color={color} />
        </Button>
        <Button onClick={restartFunction} bg="red.500">
          <Icon as={AiOutlineReload} color={color} />
        </Button>
      </HStack>
      <Button onClick={changeConfigure} bg="teal.500" mt={2}>
        Configure
      </Button>
    </VStack>
  );
};

export default Clock;
