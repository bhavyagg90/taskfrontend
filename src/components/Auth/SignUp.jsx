import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const history = useNavigate();
  const toast = useToast();
  const [show, setShowpasword] = useState(false);
  const [showcnf, setShowcnfPassword] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cnfpassword, setCnfPassword] = useState();
  const [pic, setPicture] = useState();
  const [load, setLoad] = useState(false);

  const handlePassword = () => {
    setShowpasword(!show);
  };
  const handleCnfPassword = () => {
    setShowcnfPassword(!showcnf);
  };

  const handelSignup = async () => {
    setLoad(true);
    if (!email || !password || !name || !cnfpassword) {
      toast({
        title: "please fill all the field",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      setLoad(false);
      return;
    }
    if (password !== cnfpassword) {
      toast({
        title: "Password do not match",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      setLoad(false);
      return;
    }

    try {
      const userSigned = await axios({
        method: "post",
        url: "https://social-backend-bafj.onrender.com/api/register",
        data: { name, email, password },
      });

      if (userSigned.status == 200) {
        toast({
          title: "registartion Succesfull",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom",
        });

        localStorage.setItem("userInfo", JSON.stringify(userSigned.data));
        setLoad(false);
        history("/home");
      } else {
        console.log(userSigned.data, "registering");
      }
    } catch (error) {
      console.log("error", error);
      if (error) {
        toast({
          title: error.response.data.message,
          // description:error.responce.data.message,
          status: "warning",
          duration: 9000,
          isClosable: true,
          position: "bottom",
        });
      }
      setLoad(false);
    }
  };

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel marginLeft="5px">Name</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your name"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="first-name" isRequired>
        <FormLabel marginLeft="5px">Email</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="first-name" isRequired>
        <FormLabel marginLeft="5px">Passowrd</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button width="5rem" h="1.75rem" size="sm" onClick={handlePassword}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="first-name" isRequired>
        <FormLabel marginLeft="5px">Passowrd</FormLabel>
        <InputGroup>
          <Input
            type={showcnf ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setCnfPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              width="5rem"
              h="1.75rem"
              size="sm"
              onClick={handleCnfPassword}
            >
              {showcnf ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        onClick={handelSignup}
        width="100%"
        m="10px"
        style={{ marginTop: "15px" }}
        isLoading={load}
      >
        SignUp
      </Button>
    </VStack>
  );
}

export default SignUp;
