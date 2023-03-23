"use client";
import "./globals.css";
import logo from "../assets/Shopify.png";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { SiShopee } from "react-icons/si";
import {
  Box,
  HStack,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="h-28 bg-blue-500">
        <div className="flex">
          <Image src={logo} alt="Logo" width={130} className="mx-auto" />
          <p className="mx-auto my-auto">test</p>
        </div>
      </div> */}
      <Box
        h={"80px"}
        bgColor={"#0095DA"}
        position={"fixed"}
        left={"0"}
        right={"0"}
        top={"0"}
        display={"flex"}
        alignItems={"center"}
      >
        <HStack
          width={"96%"}
          // h={"114px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            w={"1200px"}
            display={"flex"}
            justifyContent={"space-between"}
            h={"80px"}
            alignItems={"center"}
          >
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={130} />
            </Link>
            <Box display={"flex"} alignItems={"center"}>
              <InputGroup ml={"15px"}>
                <InputLeftElement
                  w={"137px"}
                  h={"28px"}
                  m={"7px 8px 0 5px"}
                  borderRight={"1px solid #BDBDBD"}
                >
                  <Button
                    bgColor={"#ffffff"}
                    h={"28px"}
                    w={"120px"}
                    _hover={{ bgColor: "#DAF3FF", color: "rgba(0,149,218)" }}
                    p={"2px 8px 2px 10px"}
                    borderRadius={"8px"}
                    color={"rgba(0,0,0,0.6)"}
                  >
                    <Text
                      fontSize={"13px"}
                      lineHeight={"21px"}
                      letterSpacing={"0px"}
                      fontFamily={"effra, Helvetica, Arial, sans-serif"}
                      pr={"5px"}
                    >
                      All Categories
                    </Text>
                    <IoIosArrowDown style={{ color: "rgba(0,149,218)" }} />
                  </Button>
                </InputLeftElement>
                <Input
                  placeholder="What are you looking for?"
                  h={"40px"}
                  width={"745px"}
                  borderRadius={"8px"}
                  p={"4px"}
                  pl={"155px"}
                  fontSize={"16px"}
                  fontFamily={"Effra, Helvetica, Arial, sans-serif"}
                  color={"#000000"}
                />
                <InputRightElement>
                  <Button
                    w={"48px"}
                    h={"32px"}
                    bgColor={"#0095DA"}
                    color={"#ffffff"}
                    borderRadius={"8px"}
                    mt={"4px"}
                    mr={"4px"}
                  >
                    <GoSearch />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box
              h={"40px"}
              w={"301px"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                h={"40px"}
                w={"50px"}
                display={"flex"}
                justifyContent={"center"}
                pl={"10px"}
              >
                <Button color={"#fff"}>
                  <SiShopee style={{ width: "22px", height: "22px" }} />
                </Button>
              </Box>
              <Box h={"24px"} w={"1px"} bgColor={"#ffffff"}></Box>
              <Button
                w={"87px"}
                h={"32px"}
                border={"2px solid #ffffff"}
                borderRadius={"8px"}
                color={"#ffffff"}
                fontSize={"14px"}
                lineHeight={"18px"}
                // fontFamily={"Effra, Helvetica, Arial, sans-serif"}
                fontWeight={500}
              >
                Login
              </Button>
              <Button
                w={"87px"}
                h={"32px"}
                // border={"2px solid #ffffff"}
                bgColor={"#ffffff"}
                borderRadius={"8px"}
                color={"#0095DA"}
                fontSize={"14px"}
                lineHeight={"18px"}
                // fontFamily={"Open Sauce One,Nunito Sans, sans-serif"}
                fontWeight={500}
              >
                Register
              </Button>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
