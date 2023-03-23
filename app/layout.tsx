"use client";
import "./globals.css";

import React from "react";
import { Box, Image, Text, Input } from "@chakra-ui/react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={"bg-blue-400 flex p-5"}>
        {/* <Image src="https://www.kaubei.com/wp/wp-content/uploads/2020/05/logo-Blibli-ok.jpg" />
         */}
        <h1 className="text-slate-600 text-lg font-bold py-3">Shopedia</h1>
        <input className="ml-4 w-3/4" />

        <Link
          href={"/register"}
          className="p-3 bg-slate-700 text-white ml-4 w-60 text-center"
        >
          <button>Register</button>
        </Link>

        <Link
          href={"/login"}
          className="p-3 bg-green-700 text-white ml-4 w-60 text-center"
        >
          <button>Login</button>
        </Link>
      </div>
      {children}
    </>
  );
}
