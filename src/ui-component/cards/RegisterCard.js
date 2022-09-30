import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import { format } from "date-fns";
import AnimateButton from "ui-component/extended/AnimateButton";
import logo from "assets/images/stripe-logo.png";

export default function RegisterCard({ course = {}, onPayment = () => {} }) {
  return (
    <Box
      sx={{ border: "1px dashed", borderColor: "secondary.light", p: 1, my: 2 }}
    >
      <Grid container>
        <Grid
          item
          sm={12}
          md={7}
          sx={{
            borderRight: { md: "1px dashed" },
            borderColor: { md: "secondary.light" },
            mr: 2,
            py: 2,
          }}
        >
          <Box typography="h4" p={1}>
            {course?.title}
          </Box>
          <Box typography="p" p={1}>
            <b>Price:</b> ${course?.price}
          </Box>
          <Box typography="p" p={1}>
            <b>Course Start Date:</b>{" "}
            {format(new Date(course?.open_date), "PPPP")}{" "}
          </Box>
          <Box typography="p" p={1}>
            <b>Course End Date:</b>{" "}
            {format(new Date(course?.open_date), "PPPP")}{" "}
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={4.5}
          sx={{ minWidth: { xs: "100%", md: "auto" }, py: 2 }}
        >
          <Box typography="h4" p={1}>
            Payment Options
          </Box>
          <Divider sx={{ my: 1 }} />
          <AnimateButton>
            <Button
              sx={{ boxShadow: "none", my: 1, backgroundColor: "primary.200" }}
              disableElevation
              size="large"
              variant="contained"
              onClick={() => onPayment(course)}
            >
              <img
                style={{ marginRight: "8px", marginLeft: "-8px" }}
                width="50px"
                src={logo}
              />
              Pay With Stripe
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </Box>
  );
}
