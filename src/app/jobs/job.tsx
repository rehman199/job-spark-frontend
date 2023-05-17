import {
  CurrencyExchangeRounded,
  ReportRounded,
  TimelapseRounded,
  WorkRounded,
} from "@mui/icons-material";
import { Box, Button, Chip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import placeholder from "public/next-js-logo.png";

const Job = () => {
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
        component="div"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap="1rem"
      >
        <Box display="flex" flexWrap="wrap" gap="1.25rem">
          <Image
            src={placeholder}
            alt="company image"
            width="72"
            height="72"
            style={{
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.15)",
              borderRadius: "4px",
            }}
          />
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
          >
            <Typography
              component="p"
              fontSize="0.88rem"
              color="#8a8a8a"
              fontWeight="500"
            >
              Shaw Academy
            </Typography>
            <Typography component="p" fontWeight="bold">
              UX Designer for Product Based Company
            </Typography>
            <Typography component="p" fontSize="0.88rem" color="#8a8a8a">
              Bangalore India | Remote work available
            </Typography>
          </Box>
        </Box>
        <Typography component="small" fontSize="0.75rem" color="#8a8a8a">
          Posted 2 days ago
        </Typography>
      </Box>
      <Box
        component="div"
        display="flex"
        flexWrap="wrap"
        gap={{ xs: 1, md: "2.2rem" }}
        my="10px"
        sx={{
          "& p": { fontSize: "0.88rem", color: "#8a8a8a", fontWeight: 500 },
        }}
      >
        <Box component="div" display="flex" gap="10px">
          <TimelapseRounded fontSize="small" />
          <Typography component="p">Full Time</Typography>
        </Box>
        <Box component="div" display="flex" gap="10px">
          <CurrencyExchangeRounded fontSize="small" />
          <Typography component="p">$20 per hour</Typography>
        </Box>
        <Box component="div" display="flex" gap="10px">
          <WorkRounded fontSize="small" />
          <Typography component="p">2 - 3 years experience</Typography>
        </Box>
      </Box>
      <Box
        component="div"
        display="flex"
        my="10px"
        gap={{ xs: 1, md: 2 }}
        flexWrap="wrap"
      >
        <Chip
          label="Responsive Recruiter"
          color="success"
          icon={<ReportRounded />}
          size="small"
        />
        <Chip
          label="Urgent Recruiting"
          color="error"
          icon={<ReportRounded />}
          size="small"
        />
      </Box>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        my="10px"
        sx={{ "& p": { fontSize: "12px", color: "#8a8a8a", fontWeight: 500 } }}
      >
        <Box component="div" display="flex" alignItems="center" gap={1}>
          <Box
            component="div"
            height="10px"
            width="10px"
            borderRadius="50%"
            bgcolor="gray"
          ></Box>
          <Typography component="p">
            Establish creative direction and develop concepts together with
            product team
          </Typography>
        </Box>
        <Box component="div" display="flex" alignItems="center" gap={1}>
          <Box
            component="div"
            height="10px"
            width="10px"
            borderRadius="50%"
            bgcolor="gray"
          ></Box>

          <Typography component="p">
            Help developers and visual designers with solving design challenges.
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={1}
      >
        <Typography component="small" color="#8a8a8a" fontSize="0.78rem">
          14 applicants
        </Typography>
        <Box display="flex" gap="1rem">
          <Button
            variant="outlined"
            type="button"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            type="button"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Apply now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Job;
