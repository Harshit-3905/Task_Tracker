import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const handleClick = () => setShow(!show);
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.700");

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://tasktrackerbackend-raao.onrender.com/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      if (!res.data) localStorage.setItem("userInfo", JSON.stringify(res));
      else localStorage.setItem("userInfo", JSON.stringify(res.data));
      setLoading(false);
      history.push("/home");
    } catch (err) {
      toast({
        title: "Error Occured",
        description: err.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px" color={color} bg={bgColor}>
      <FormControl id="loginemail" isRequired>
        <FormLabel color={color}>E-mail</FormLabel>
        <Input
          placeholder="Enter E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="loginpassword" isRequired>
        <FormLabel color={color}>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Password"
            value={password}
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="teal"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
        color={color}
      >
        Login
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        style={{ marginTop: 3 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
        color={color}
      >
        Login with Guest Credentials
      </Button>
    </VStack>
  );
};

export default Login;
