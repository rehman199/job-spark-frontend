"use client";
import { BlackButton } from "@/app/components";
import { Box, InputLabel, TextField, Typography } from "@mui/material";

const SignUp = () => {
  return (
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
        <Typography component="h1" fontSize="1.5rem" mb="1rem">
          Create an account
        </Typography>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <InputLabel shrink htmlFor="email">
            Name
          </InputLabel>
          <TextField
            name="name"
            type="text"
            fullWidth
            size="small"
            variant="outlined"
            sx={{ "& > div:first-child": { borderRadius: "8px" } }}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <InputLabel shrink htmlFor="email">
            Email
          </InputLabel>
          <TextField
            name="email"
            type="email"
            fullWidth
            size="small"
            variant="outlined"
            sx={{ "& > div:first-child": { borderRadius: "8px" } }}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <InputLabel shrink htmlFor="email">
            Password
          </InputLabel>
          <TextField
            name="password"
            type="password"
            fullWidth
            size="small"
            variant="outlined"
            sx={{ "& > div:first-child": { borderRadius: "8px" } }}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <InputLabel shrink htmlFor="email">
            Confirm Password
          </InputLabel>
          <TextField
            name="password_confirmation"
            type="password"
            fullWidth
            size="small"
            variant="outlined"
            sx={{ "& > div:first-child": { borderRadius: "8px" } }}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <BlackButton type="submit" variant="contained">
            Sign in
          </BlackButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
