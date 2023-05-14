import { SearchRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { KeyboardEvent } from "react";

export const JobSearchFilter = ({
  note,
  title,
  inputName,
  inputPlaceholder,
  setCompaniesList,
}: {
  note?: string;
  title: string;
  inputName: string;
  inputPlaceholder: string;
  setCompaniesList: React.Dispatch<{
    type: string;
    payload: string;
  }>;
}) => {
  const addToCompaniesList = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      setCompaniesList({ type: "add", payload: target.value });
      target.value = "";
    }
  };

  return (
    <Box component="div" display="flex" flexDirection="column" my="1rem">
      <Typography component="p" fontSize=".88rem" color="#8a8a8a">
        {title}{" "}
        {!!note && (
          <Typography component="small" fontSize=".7rem">
            ({note})
          </Typography>
        )}
      </Typography>
      <Box
        component="div"
        display="flex"
        bgcolor="#F2F4F6"
        alignItems="center"
        borderRadius="4px"
        paddingX=".5rem"
        mt=".5rem"
        sx={{
          "& input::placeholder": { fontSize: ".88rem", color: "#8a8a8a" },
        }}
      >
        <input
          name={inputName}
          placeholder={inputPlaceholder}
          type="text"
          onKeyUp={addToCompaniesList}
          style={{
            outline: "none",
            border: "none",
            padding: ".5rem .5rem .5rem 0",
            backgroundColor: "#F2F4F6",
            width: "100%",
            fontSize: ".88rem",
            borderRadius: "4px",
          }}
        />
        <SearchRounded color="disabled" />
      </Box>
    </Box>
  );
};
