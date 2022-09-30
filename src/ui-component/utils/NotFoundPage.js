import { Box } from "@mui/system";
import React from "react";
// assets
import { IconFaceIdError } from "@tabler/icons";
import { Typography, useTheme } from "@mui/material";

export default function NotFoundPage({ label = "Item not found", dimension = 400 }) {
  const theme = useTheme();
  return (
    <Box display='flex' alignItems='center' flexDirection='column' mt={4} sx={
      {
        animationName: 'bounce',
        animationDuration: '3s'
      }
    }>
      <Typography variant='h3' sx={{ color: theme.palette.grey[600] }}>
        {label}
      </Typography>
      <IconFaceIdError width={dimension} height={dimension} strokeWidth={0.5} />
    </Box>
  );
}
