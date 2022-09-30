import React from "react";
import { Autocomplete, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function CourseSelectFilter({
  onInputChange = () => {},
  handleSelectedCourseChange = () => {},
  filteredCourse = [],
  selectedFilteredCourse,
}) {
  return (
    <Box pb={1}>
      <FormControl fullWidth sx={{ minWidth: "200px" }}>
        <Autocomplete
          id="custom-course-filter"
          disableClearable
          options={filteredCourse}
          getOptionLabel={(option) => option?.title || ""}
          onChange={handleSelectedCourseChange}
          value={selectedFilteredCourse ? selectedFilteredCourse : ""}
          renderInput={(params) => (
            <TextField
              {...params}
              label={"Filter By Course"}
              onChange={(e) => {
                if (e.target.value) {
                  onInputChange(e);
                } else {
                  // onInputChange("");
                  handleSelectedCourseChange(false, {});
                }
              }}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.title}
            </Box>
          )}
        />
        {/* <Divider sx={{ my: 2 }} /> */}
        {/* <AnimateButton>
          <Button
            sx={{ boxShadow: "none" }}
            disableElevation
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
            onClick={() => handleSelectedCourseChange(null, "")}
          >
            Clear Filter
          </Button>
        </AnimateButton> */}
      </FormControl>
    </Box>
  );
}
