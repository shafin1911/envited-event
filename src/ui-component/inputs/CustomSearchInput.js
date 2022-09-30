import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

export default function CustomSearchInput({
  suggestion = [],
  label,
  onInputChange,
  onChange,
  isSearch,
}) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      {/* <Autocomplete
        id='free-solo-demo'
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label='freeSolo' />}
      /> */}
      {isSearch ? (
        <Autocomplete
          freeSolo
          id='custom-search'
          disableClearable
          options={suggestion}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={onInputChange}
              label={label}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
          renderOption={(props, option) => (
            <Box
              component='li'
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.title}
            </Box>
          )}
        />
      ) : (
        <Autocomplete
          id='country-select-demo'
          sx={{ width: 300 }}
          options={suggestion}
          autoHighlight
          getOptionLabel={(option) => option.title}
          onChange={onChange}
          renderOption={(props, option) => (
            <Box
              component='li'
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.title}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              onChange={onInputChange}
              inputProps={{
                ...params.inputProps,
                autoComplete: `${label}-search`, // disable autocomplete and autofill
              }}
            />
          )}
        />
      )}
    </Stack>
  );
}
