import { Box } from "@mui/material";
import React from "react";
import BulletRounded from "./bullet-rounded";
import { Check } from "@mui/icons-material";

const PasswordChecker = ({ value }: { value: string }) => {
  return (
    <Box
      component="ul"
      display="flex"
      flexDirection="column"
      fontSize=".6rem"
      pl={0}
      sx={{ listStyle: "none" }}
      gap={1}
    >
      <Box
        component="li"
        display="grid"
        alignItems="center"
        gridTemplateColumns=".5fr .5fr"
      >
        <Box display="flex" alignItems="center" gap={1}>
          {value.match(/^.{8,}$/) ? (
            <Check fontSize="small" color="success" />
          ) : (
            <BulletRounded />
          )}
          Use 8 or more characters
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          {value.match(/^(?=.*[a-z])(?=.*[A-Z]).+$/) ? (
            <Check fontSize="small" color="success" />
          ) : (
            <BulletRounded />
          )}
          Use upper and lower case letters (e.g. Aa)
        </Box>
      </Box>
      <Box
        component="li"
        display="grid"
        alignItems="center"
        gridTemplateColumns=".5fr .5fr"
      >
        <Box display="flex" alignItems="center" gap={1}>
          {value.match(/^(?=.*\d).+$/) ? (
            <Check fontSize="small" color="success" />
          ) : (
            <BulletRounded />
          )}
          Use a number (e.g. 1234)
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          {value.match(/^(?=.*[\W_]).+$/) ? (
            <Check fontSize="small" color="success" />
          ) : (
            <BulletRounded />
          )}
          Use a symbol (e.g. !@#$)
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordChecker;
