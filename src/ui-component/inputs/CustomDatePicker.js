import React from "react";
import { Box, FormHelperText, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { styled } from "@mui/material/styles";
import { add, format } from "date-fns";

const DatePickerContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export default function CustomDatePicker({
  form,
  field: { value, name },
  minDate = new Date(),
  maxDate = new Date(
    add(new Date(minDate), {
      years: 1,
    })
  ),
  getShouldDisableDateError,
  ...other
}) {
  const currentError = form.errors[name];
  const toShowError = Boolean(currentError && form.touched[name]);

  // const filterMaxDate = format(
  //   add(new Date(minDate), {
  //     years: 1,
  //   }),
  //   "MM/dd/yyyy hh:mm"
  // );

  return (
    <DatePickerContainer>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          clearable
          minDate={minDate}
          maxDate={maxDate}
          value={value}
          inputFormat="PPpp"
          onError={(reason, value) => {
            switch (reason) {
              case "invalidDate":
                form.setFieldError(name, "Invalid date format");
                break;

              case "disablePast":
                form.setFieldError(name, "Values in the past are not allowed");
                break;

              case "maxDate":
                form.setFieldError(
                  name,
                  `Date should not be after ${format(maxDate, "P")}`
                );
                break;

              case "minDate":
                form.setFieldError(
                  name,
                  `Date should not be before ${format(minDate, "P")}`
                );
                break;

              case "shouldDisableDate":
                // shouldDisableDate returned true, render custom message according to the `shouldDisableDate` logic
                form.setFieldError(name, getShouldDisableDateError(value));
                break;

              default:
                // eslint-disable-next-line no-case-declarations
                const currentErrors = { ...form.errors };
                delete currentErrors[name];
                form.setErrors({
                  ...currentErrors,
                });
            }
          }}
          // Make sure that your 3d param is set to `false` on order to not clear errors
          onChange={(date) => form.setFieldValue(name, date, false)}
          renderInput={(props) => (
            <Box
              sx={{
                "& .MuiOutlinedInput-input": {
                  paddingY: "22px",
                },
              }}
            >
              <TextField
                fullWidth
                {...props}
                name={name}
                error={toShowError}
                // helperText={
                //   toShowError ? currentError ?? props.helperText : undefined
                // }
                // Make sure that your 3d param is set to `false` on order to not clear errors
                onBlur={() => form.setFieldTouched(name, true, false)}
                onChange={(ev) => {
                  form.setFieldValue(name, new Date(ev.target.value), false);
                  form.setFieldTouched(name, true, false);
                }}
              />
              {currentError && (
                <FormHelperText
                  error
                  id={`standard-weight-helper-text-${name}`}
                >
                  {currentError}
                </FormHelperText>
              )}
            </Box>
          )}
          {...other}
        />
      </LocalizationProvider>
    </DatePickerContainer>
  );
}
