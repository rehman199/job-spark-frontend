"use client";
import { BlackButton } from "@/app/components";
import useAuth from "@/app/hooks/use-auth";
import { successToast } from "@/app/utils/toast";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SignIn = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("account_confirmation_success"))
      setTimeout(() => {
        successToast(
          "Congratulations ! Your account is confirmed. You can now Login."
        );
      }, 500);
  }, [searchParams]);

  const { values, onChange, onSubmit } = useAuth({
    initialValues: {
      email: "",
      password: "",
    },
    formType: "login",
  });

  return (
    <Box
      component="form"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="4rem"
      onSubmit={onSubmit}
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
          Sign in
        </Typography>
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
            value={values.email}
            onChange={onChange}
            sx={{ "& > div:first-of-type": { borderRadius: "8px" } }}
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
            sx={{ "& > div:first-of-type": { borderRadius: "8px" } }}
            value={values.password}
            onChange={onChange}
          />
        </Box>

        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <BlackButton type="submit" variant="contained">
            Sign in
          </BlackButton>
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <Typography component="p" fontSize=".75rem">
            By continuing, you agree to the Terms of use and Privacy Policy.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
