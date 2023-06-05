import { Logo } from "@/app/components/logo";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";

export const Sidebar = () => {
  return (
    <Box
      flexDirection="column"
      p="1rem .6rem"
      bgcolor="#223354"
      color="#FFFFFFB3"
      height="100%"
    >
      <Logo logoStyle={{ pt: 1 }} />
      <Divider sx={{ bgcolor: "#FFFFFFB3", my: ".85rem" }} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py="1rem"
      >
        <Avatar
          sx={{
            bgcolor: "purple",
            width: 68,
            height: 68,
            textAlign: "center",
            mb: 2,
          }}
        >
          N
        </Avatar>
        <Typography component="p" fontSize="1rem" color="white">
          Randy Orton
        </Typography>
        <Typography component="p" fontSize=".9rem" fontWeight="300">
          Field developer
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFFB3", my: ".85rem" }} />
    </Box>
  );
};
