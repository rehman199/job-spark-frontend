"use client";
import { BlackButton } from "@/app/components";
import PasswordChecker from "@/app/components/password-checker";
import useAuth from "@/app/hooks/use-auth";
import { Box, InputLabel, TextField, Typography } from "@mui/material";

const SignUp = () => {
  const { signupValues, onSignupValuesChange, register } = useAuth({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    confirm_success_url: "",
  });

  const isFormIncomplete = (): boolean =>
    !(
      signupValues.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/
      ) && signupValues.password_confirmation === signupValues.password
    );
  return (
    <Box
      component="form"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="4rem"
      onSubmit={register}
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
            value={signupValues.name}
            onChange={onSignupValuesChange}
            sx={{ "& > div:first-of-type": { borderRadius: "8px" } }}
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
            value={signupValues.email}
            onChange={onSignupValuesChange}
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
            value={signupValues.password}
            onChange={onSignupValuesChange}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <PasswordChecker value={signupValues.password} />
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
            value={signupValues.password_confirmation}
            onChange={onSignupValuesChange}
            sx={{ "& > div:first-of-type": { borderRadius: "8px" } }}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <BlackButton
            type="submit"
            variant="contained"
            disabled={isFormIncomplete()}
          >
            Sign up
          </BlackButton>
        </Box>
        <Box display="flex" flexDirection="column" width="100%" my=".5rem">
          <Typography component="p" fontSize=".75rem">
            By creating an account, you agree to the Terms of use and Privacy
            Policy.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
