"use client";
// import Head from "next/head";
import React, { useState } from "react";
import {
  Heading,
  Flex,
  Box,
  Text,
  //   Image,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import Onlineshop from "../../assets/Onlineshop.png"; //  test
import Image from "next/image";
export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        w={"1200px"}
        h={"628px"}
        mt={"110px"}
        mx={"auto"}
        p={"20px 64px 20px 64px"}
        borderRadius={"16px"}
        boxShadow={"rgba(0,0,0,0.12) 0px 1px 6px"}
      >
        <Box
          w={"1072px"}
          h={"588px"}
          p={"20px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box h={"548px"} w={"480px"}>
            <Image src={Onlineshop} alt="online" />
          </Box>
          <Box h={"548px"} w={"432px"}></Box>
        </Box>
      </Box>
    </>
  );
}
