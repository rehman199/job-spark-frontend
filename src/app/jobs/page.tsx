"use client";
import { Job } from "@/components/jobs";
import { Box, Typography } from "@mui/material";
import { uniqueId } from "lodash";

const JobsPage = () => {
  return (
    <Box component="div" padding="0 4rem">
      <Typography component="p" fontSize={24} color="#535353">
        All jobs
      </Typography>
      <Typography component="p" color="#8a8a8a" my="1rem" fontSize="1rem">
        Showing 10 of 250 jobs
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={2.5}
        width={{ xs: "100%", md: "70%" }}
      >
        {[...new Array(5)].map((i) => (
          <Job key={uniqueId("job")} />
        ))}
      </Box>
    </Box>
  );
};

export default JobsPage;
