import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { uniqueId } from "lodash";
import { useReducer, useState } from "react";
import { FiltersLayout } from "./filters-layout";
import { JobSalaryFilter } from "./job-salary-filter";
import { JobSearchFilter } from "./job-search-filter";
import { JobSubFilter } from "./job-sub-filter";

const JobFilters = () => {
  const [companiesList, setCompaniesList] = useReducer(
    (state: Array<string>, action: { type: string; payload: string }) => {
      const { type, payload } = action;
      switch (type) {
        case "add":
          return Array.from(new Set([...state, payload]));
        case "remove":
          return [...state.filter((value) => value !== payload)];
        default:
          return state;
      }
    },
    []
  );

  const [salaryValue, updateSalaryValue] = useState<number[]>([0, 0]);

  const onSalaryChange = (_event: Event, value: number | number[]) => {
    updateSalaryValue(value as number[]);
  };

  const removeFromCompaniesList = (company: string) => {
    setCompaniesList({ type: "remove", payload: company });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ xs: "100%", md: "30%" }}
      gap={{ xs: "1rem", lg: "1.5rem" }}
    >
      <FiltersLayout typeTitle="Sort By">
        <FormControl>
          <RadioGroup
            aria-labelledby="sort-by-radio-buttons-group-label"
            defaultValue="salary"
            name="sort_by"
            sx={{
              flexDirection: "row",
              gap: { xs: "0", lg: "2rem" },
            }}
          >
            <FormControlLabel
              value="salary"
              label="Salary"
              control={<Radio size="small" />}
              componentsProps={{
                typography: { fontSize: "0.88rem", fontWeight: 400 },
              }}
            />
            <FormControlLabel
              value="date_posted"
              label="Date Posted"
              control={<Radio size="small" />}
              componentsProps={{
                typography: { fontSize: "0.88rem", fontWeight: 400 },
              }}
            />
          </RadioGroup>
        </FormControl>
      </FiltersLayout>
      <FiltersLayout typeTitle="Filters" showClear>
        <JobSubFilter
          title="Job Type"
          filters={[
            { label: "Fulltime", value: "fulltime" },
            { label: "Freelance", value: "freelance" },
          ]}
        />
        <JobSubFilter
          title="Experience level"
          filters={[
            { label: "Expert", value: "expert" },
            { label: "Intermediate", value: "intermediate" },
            { label: "Beginner", value: "beginner" },
          ]}
        />
        <JobSubFilter
          title="Preferred Location"
          filters={[
            { label: "Remote", value: "remote" },
            { label: "Office", value: "office" },
            { label: "Both", value: "both" },
          ]}
        />
        <JobSearchFilter
          title="Location"
          inputName="location"
          inputPlaceholder="Anywhere"
          setCompaniesList={setCompaniesList}
        />
        <JobSearchFilter
          title="Company"
          note="press enter to add company to the list"
          inputName="company"
          inputPlaceholder="Type company name here"
          setCompaniesList={setCompaniesList}
        />
        <Box component="div" display="flex" gap=".5rem" flexWrap="wrap">
          {companiesList.map((company) => (
            <Button
              key={uniqueId()}
              type="button"
              endIcon={
                <CloseRounded
                  fontSize="small"
                  onClick={(_e) => removeFromCompaniesList(company)}
                />
              }
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              {company}
            </Button>
          ))}
        </Box>
        <JobSalaryFilter
          onSalaryChange={onSalaryChange}
          salaryValue={salaryValue}
        />
      </FiltersLayout>
    </Box>
  );
};

export default JobFilters;
