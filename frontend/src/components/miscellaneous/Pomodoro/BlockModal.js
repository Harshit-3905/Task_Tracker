import React from "react";
import { useState } from "react";
import {
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
import BlockItem from "./BlockItem";

const BlockModal = (props) => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const { updateOpen, block, updateBlock, updateBlockItem } = props;
  const onSubmitForm = (e) => {
    // e.preventDefault();
    updateOpen(false);
    updateBlock(block);
  };
  const changeOpen = () => {
    updateOpen(false);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const close = () => {
    onClose();
    changeOpen();
  };
  return (
    <>
      <Modal
        isOpen={props.isBlockOpen}
        onClose={close}
        size={"md"}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={color}>Block Websites</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={bgColor}>
            {block.map((web, index) => (
              <BlockItem
                name={web.name}
                website={web.website}
                blocked={web.blocked}
                updateBlockItem={(isBlocked) =>
                  updateBlockItem(index, isBlocked)
                }
              />
            ))}
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BlockModal;
