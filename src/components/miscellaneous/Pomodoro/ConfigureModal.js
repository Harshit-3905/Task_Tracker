import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useColorModeValue } from "@chakra-ui/color-mode";

const ConfigureModal = (props) => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const { updateConfigure, updatePomodoro } = props;
  const [pomodoro, setPomodoro] = useState("");
  const [pomoBreak, setPomoBreak] = useState("");
  const onSubmitForm = (e) => {
    // e.preventDefault();
    if (pomodoro === "" || pomoBreak === "") return;
    updateConfigure(false);
    updatePomodoro(pomodoro, pomoBreak);
  };
  const changeConfigure = () => {
    updateConfigure(false);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const close = () => {
    onClose();
    changeConfigure();
  };
  return (
    <>
      <Modal isOpen={props.isConfigure} onClose={close} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={color}>Configure Pomodoro</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={bgColor}>
            <FormControl mt={3}>
              <FormLabel color={color}>
                Focus/Session Time (in minutes)
              </FormLabel>
              <Input
                placeholder="25"
                value={pomodoro}
                onChange={(e) => setPomodoro(e.target.value)}
              />
            </FormControl>
            <FormControl mt={1}>
              <FormLabel color={color}>Break Time (in minutes)</FormLabel>
              <Input
                placeholder="5"
                value={pomoBreak}
                onChange={(e) => setPomoBreak(e.target.value)}
              />
              <Center mt={4} mb={4}>
                <Button
                  colorScheme="blue"
                  mr={3}
                  mt={3}
                  type="submit"
                  onClick={onSubmitForm}
                >
                  Apply
                </Button>
              </Center>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfigureModal;
