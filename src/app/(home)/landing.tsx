"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import landingImage from "public/job-spark-landing.png";
import JobSearchBar from "./job-search-bar";

const Landing = () => {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="start"
      justifyContent="center"
      padding="0 64px"
      height="90%"
      flexDirection="column"
      position="relative"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="60%"
      >
        <Typography
          component="h1"
          fontSize={{ md: "2rem", xs: "1rem" }}
          fontWeight="bold"
        >
          Find freelance and fulltime jobs.
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#8A8A8A", mt: 3, mb: 6 }}
          fontSize={{ md: "1rem", xs: ".8rem" }}
          width="60%"
        >
          Job Spark is your one-stop-centre for thousands of digital freelance
          and fulltime jobs.
        </Typography>
        <JobSearchBar />
      </Box>
      <Image
        id="landing-page-image"
        src={landingImage}
        alt="landing-page-image"
        style={{
          width: "50%",
          height: "60%",
          objectFit: "contain",
          position: "absolute",
          right: "0px",
          top: "15%",
        }}
      />
    </Box>
  );
};

export default Landing;
