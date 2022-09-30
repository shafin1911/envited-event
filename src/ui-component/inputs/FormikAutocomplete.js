// import { fieldToTextField } from "formik-material-ui";
import { Autocomplete, Box, FormHelperText, TextField } from "@mui/material";

export default function FormikAutocomplete({
  form,
  field: { name },
  label,
  onInputChange,
  defaultData,
  ...other
}) {
  const currentError = form.errors[name];
  return (
    <Autocomplete
      {...other}
      defaultValue={defaultData ? { title: defaultData?.title, _id: defaultData?.id } : undefined}
      onChange={(_, value) => form.setFieldValue(name, value?._id)}
      onBlur={() => form.setTouched({ [name]: true })}
      getOptionLabel={(option) => option.title}
      disabled={defaultData && true}
      renderInput={(props) => (
        <Box
          sx={{
            "& .MuiOutlinedInput-root": {
              paddingY: "14px",
            },
          }}
        >
          <TextField
            label={label}
            fullWidth
            {...props}
            error={currentError ? true : false}
            onChange={onInputChange}
          />
          {currentError && (
            <FormHelperText error id={`standard-weight-helper-text-${name}`}>
              {currentError}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
