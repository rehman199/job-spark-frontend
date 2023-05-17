"use client";
import { Box, Typography, Pagination } from "@mui/material";
import { uniqueId } from "lodash";
import React, { useState } from "react";
import JobFilters from "./job-filters";
import Job from "./job";

const Jobs = () => {
  const [page, updatePage] = useState<number>(1);
  return (
    <Box component="div" padding="0 4rem">
      <Typography component="p" fontSize={24} color="#535353">
        All jobs
      </Typography>
      <Typography component="p" color="#8a8a8a" my="1rem" fontSize="1rem">
        Showing 10 of 250 jobs
      </Typography>
      <Box display="flex" flexWrap="wrap-reverse" gap="1rem">
        <Box
          display="flex"
          flexDirection="column"
          gap={2.5}
          width={{ xs: "100%", md: "68%" }}
        >
          {[...new Array(5)].map(() => (
            <Job key={uniqueId("job")} />
          ))}
        </Box>
        <JobFilters />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        py="2rem"
        width={{ xs: "100%", md: "68%" }}
      >
        <Pagination
          color="primary"
          count={5}
          shape="rounded"
          page={page}
          onChange={(_e, value) => updatePage(value)}
        />
      </Box>
    </Box>
  );
};

export default Jobs;
