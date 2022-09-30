import React, { memo } from "react";
import { MenuItem, Select } from "@mui/material";
import lookup from "country-code-lookup";

function CountrySelector({
  values,
  handleBlur,
  handleChange,
  id,
  name,
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
      {lookup.countries.map((item) => (
        <MenuItem value={item.iso2} key={item.iso3}>{item.country}</MenuItem>
      ))}
    </Select>
  );
}

export default memo(CountrySelector)