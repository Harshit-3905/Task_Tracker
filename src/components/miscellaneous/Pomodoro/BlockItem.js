import { HStack, Text, Checkbox } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const BlockItem = (props) => {
  const [isBlocked, setIsBlocked] = React.useState(props.blocked);
  const color = useColorModeValue("black", "white");
  const block = () => {
    const newBlockedStatus = !isBlocked;
    setIsBlocked(newBlockedStatus);
    props.updateBlockItem(newBlockedStatus);
  };
  return (
    <HStack
      height="40px"
      width="100%"
      bg={"teal.500"}
      borderRadius="lg"
      borderWidth="1px"
      marginBottom={2}
      pr={1}
      justifyContent={"space-between"}
    >
      <Text fontSize="md" color={color} pl={2}>
        {props.name}
      </Text>
      <Checkbox
        colorScheme="red"
        pr={4}
        color={color}
        isChecked={isBlocked}
        onChange={block}
      ></Checkbox>
    </HStack>
  );
};

export default BlockItem;
