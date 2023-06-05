"use client";
import { Box } from "@mui/material";
import React from "react";
import { Navbar } from "../components";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        py="4rem"
        px={{ xs: "3rem", md: "0" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius="2rem"
          border="1px solid #6666664d"
          bgcolor="white"
          width={{ xs: "100%", md: "45%" }}
          boxSizing="border-box"
          padding={{ xs: "2rem", md: "3rem" }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
