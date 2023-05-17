import { Box, Button, Slider, Typography } from "@mui/material";
import React from "react";

export const JobSalaryFilter: React.FC<{
  onSalaryChange: (event: Event, value: number | number[]) => void;
  salaryValue: number[];
}> = ({ onSalaryChange, salaryValue }) => (
  <Box component="div" display="flex" flexDirection="column" my="1rem">
    <Typography component="p" fontSize=".88rem" color="#8a8a8a">
      Salary&nbsp;
      <Typography component="small" fontSize=".7rem">
        per year
      </Typography>
    </Typography>
    <Box component="div" mt=".5rem">
      <Slider
        step={20}
        min={0}
        max={200000}
        getAriaLabel={() => "Salary range"}
        value={salaryValue}
        onChange={onSalaryChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `$${value}`}
      />
    </Box>
    <Box
      component="div"
      display="flex"
      gap="1rem"
      sx={{
        flexWrap: { xs: "wrap", sm: "nowrap" },
        "& .Mui-disabled": { bgcolor: "#F2F4F6" },
      }}
    >
      <Button disabled size="small" variant="contained" fullWidth>
        Min. ${salaryValue[0].toLocaleString()}
      </Button>
      <Button disabled size="small" variant="contained" fullWidth>
        Max. ${salaryValue[1].toLocaleString()}
      </Button>
    </Box>
  </Box>
);
