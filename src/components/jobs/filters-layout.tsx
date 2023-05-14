import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export const FiltersLayout = ({
  children,
  typeTitle,
  showClear,
}: {
  children: ReactNode;
  typeTitle: string;
  showClear?: boolean;
}) => {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      bgcolor="white"
      p="1.25rem"
      borderRadius="8px"
      boxShadow="0 0 2px rgba(0, 0, 0, 0.1)"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        color={"#8a8a8a"}
      >
        <Typography component="p">{typeTitle}</Typography>
        {showClear && (
          <Typography
            component="small"
            fontSize="0.6875rem"
            fontWeight="bold"
            sx={{ cursor: "pointer" }}
          >
            clear all
          </Typography>
        )}
      </Box>
      {children}
    </Box>
  );
};
