import {
  Box,
  Typography, FormControlLabel, FormGroup,
  Checkbox
} from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";

export const JobSubFilter = ({
  title, filters,
}: {
  title: string;
  filters: Record<string, string>[];
}) => {
  return (
    <Box component="div" display="flex" flexDirection="column" my="1rem">
      <Typography component="p" fontSize=".88rem" color="#8a8a8a">
        {title}
      </Typography>
      <FormGroup>
        {filters.map((filter) => (
          <FormControlLabel
            key={uniqueId("filter")}
            label={filter.label}
            control={<Checkbox value={filter.value} size="small" />}
            componentsProps={{ typography: { fontSize: ".77rem" } }}
            sx={{ "& > span": { padding: ".2rem" }, ml: "-6px" }} />
        ))}
      </FormGroup>
    </Box>
  );
};
