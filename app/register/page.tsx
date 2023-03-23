"use client";
import Head from "next/head";
import React, { useState } from "react";
import {
  Heading,
  Flex,
  Box,
  Text,
  Image,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
//  test
export default function Register() {
  const [show, setShow] = useState(false);
  return (
    <>
      <main className="w-1/2 h-1/2 mx-auto mt-20 border-2 border-black rounded-lg bg-blue-200">
        <FormControl className="flex">
          <Text className="text-left">Email</Text>
          <Input type="text" className="ml-5" />
        </FormControl>
        <FormControl className="flex">
          <Text className="text-left">Password</Text>
          <InputGroup className="max-w-5">
            <Input type="password" className="ml-5" />
            <InputRightElement>
              <Button>show</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </main>
    </>
  );
}
