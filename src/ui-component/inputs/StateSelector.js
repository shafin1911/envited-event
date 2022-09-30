import React, { memo } from "react";
import { MenuItem, Select } from "@mui/material";
import { State } from "country-state-city";

function StateSelector({
  values,
  handleBlur,
  handleChange,
  id,
  name,
  country,
}) {
  return (
    <Select
      id={id}
      name={name}
      value={values}
      onBlur={handleBlur}
      onChange={handleChange}
      inputProps={{}}
    >
      {State.getStatesOfCountry(country || "AU").map((item) => (
        <MenuItem value={item.isoCode} key={item.isoCode}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
}

export default memo(StateSelector);
