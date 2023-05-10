import { Box, Button, MenuItem, TextField } from "@mui/material";
import React from "react";

const JobSearchBar = () => {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="8px"
      bgcolor="white"
      padding={2.5}
      width={{ xs: "150%", sm: "100%" }}
      boxShadow="0 0 0 rgba(0, 0, 0, 0.5), 0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.1)"
      gap={{ xs: 2, lg: 7 }}
      flexDirection={{
        xs: "column",
        md: "row",
      }}
    >
      <Box
        component="div"
        display="flex"
        width="100%"
        flexDirection={{ xs: "column", md: "row" }}
        gap={1}
      >
        <TextField
          size="small"
          variant="outlined"
          type="search"
          placeholder="Search a job"
          inputProps={{ style: { fontSize: "13px" } }}
          sx={{ width: { xs: "100%", md: "70%" } }}
        />
        <TextField
          select
          defaultValue="Freelance"
          size="small"
          SelectProps={{ style: { fontSize: "13px", opacity: 0.7 } }}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          {["Freelance", "Fulltime"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Button
        variant="contained"
        sx={{ fontSize: "14px", textTransform: "none", px: 6 }}
        type="submit"
      >
        Search
      </Button>
    </Box>
  );
};

export default JobSearchBar;
