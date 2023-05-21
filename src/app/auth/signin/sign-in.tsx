"use client";
import { BlackButton } from "@/app/components";
import { ForgetPasswordPath, SignUpPath } from "@/app/constants/routes";
import withRedirect from "@/app/hoc/withRedirect";
import useAuth from "@/app/hooks/use-auth";
import { successToast } from "@/app/utils/toast";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Link from "next/link";
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
      onSubmit={onSubmit}
      width="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
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
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        my=".5rem"
        gap={1}
        alignItems="center"
      >
        <Typography component="p" fontSize=".75rem">
          By continuing, you agree to the Terms of use and Privacy Policy.
        </Typography>
        <Typography component="p" fontSize=".75rem">
          <Link href={ForgetPasswordPath} style={{ color: "inherit" }}>
            Forget your password
          </Link>
        </Typography>
        <Typography component="p" fontSize=".75rem">
          Don’t have an account?{" "}
          <Link href={SignUpPath} style={{ color: "inherit" }}>
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default withRedirect(SignIn);
