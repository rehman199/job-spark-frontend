import { Button, ButtonProps, styled } from "@mui/material";

const BlackButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "black",
  textTransform: "none",
  borderRadius: "2.5rem",
  "&:hover": {
    backgroundColor: "black",
  },
}));

export default BlackButton;
