import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function CustomFormControl({
  label,
  name,
  value,
  touched,
  error,
  handleBlur,
  handleChange,
  theme,
  type = "text",
  options = [],
  disabled
}) {
  return (
    <FormControl
      fullWidth
      error={Boolean(touched && error)}
      sx={{
        ...theme.typography.customInput,
        "&.MuiFormControl-root": {
          margin: 0,
          padding: "0 !important",
        },
      }}
      disabled={disabled}
    >
      <InputLabel htmlFor={`outlined-adornment-title-${name}`}>
        {label}
      </InputLabel>
      {type === "text" && (
        <OutlinedInput
          id={`outlined-adornment-title-${name}`}
          type='text'
          value={value}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
        />
      )}
      {type === "dropdown" && (
        <Select
          id={`outlined-adornment-title-${name}`}
          value={value}
          onChange={handleChange}
          name={name}
        >
          {options.map((item) => (
            <MenuItem value={item._id} key={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      )}
      {touched && error && (
        <FormHelperText error id={`standard-weight-helper-text-${name}`}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
}

CustomFormControl.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  theme: PropTypes.object,
  type: PropTypes.oneOf(["dropdown", "text"]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
