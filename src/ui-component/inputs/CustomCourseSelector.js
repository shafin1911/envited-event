import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

export default function CustomCourseSelector({
  courses = [],
  handleSelectedCourseChange = () => {},
}) {
  return (
    <FormControl fullWidth sx={{ minWidth: "200px" }}>
      <Select
        defaultValue={courses[0]?._id || ""}
        onChange={handleSelectedCourseChange}
      >
        {courses.map((item) => (
          <MenuItem key={item?._id} value={item?._id}>
            {item?.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
