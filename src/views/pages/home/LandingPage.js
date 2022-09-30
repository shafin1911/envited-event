import React from "react";
// material-ui
import {
  Grid,
} from "@mui/material";

// project imports
import { gridSpacing } from "store/customization/constant";

// project imports
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
  );
}
