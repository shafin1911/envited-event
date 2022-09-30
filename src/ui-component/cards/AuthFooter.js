// material-ui
import { Link, Typography, Stack } from "@mui/material";

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://basic-neurology.com/"
      target="_blank"
      underline="hover"
    >
      BASIC NEUROLOGY
    </Typography>
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://basic-neurology.com/"
      target="_blank"
      underline="hover"
    >
      &copy; BASIC NEUROLOGY
    </Typography>
  </Stack>
);

export default AuthFooter;
