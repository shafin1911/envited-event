import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  Alert,
  Box,
  Button,
  CssBaseline,
  Divider,
  Modal,
  Snackbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

// project imports
import { drawerWidth, severity } from "store/customization/constant";
import { RESET_MODAL, SET_SNACKBAR } from "store/actions";

// assets

// styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up("md")]: {
        marginLeft: -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
        marginRight: "10px",
      },
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
      },
    }),
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSnackClose = () => {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        isOpenSnackbar: false,
        severity: severity.success,
        message: "",
      },
    });
  };

  const handleClose = () => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    dispatch({
      type: SET_SNACKBAR,
      payload: {
        isOpenSnackbar: false,
        severity: severity.success,
        message: "",
      },
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        <Outlet />
      </Main>
      <Snackbar
        open={snackBarConfig.open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
        onClick={handleClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={snackBarConfig.severity}
          sx={{ width: "100%" }}
        >
          {snackBarConfig.message}
        </Alert>
      </Snackbar>
      <Modal
        open={modalConfig.open}
        onClose={() => {
          dispatch({ type: RESET_MODAL })
        }}
      >
        <Box sx={{ ...style, width: 'fit-content', maxWidth: '90vw', overflow: 'auto' }}>
          <Typography
            variant="h3"
            color={modalConfig.severity === 'error' ? 'error' : 'secondary'}
            py={2}
          >
            {modalConfig.header}
          </Typography>
          <div>{modalConfig.body}</div>
          <Divider sx={{ marginY: 2 }} />
          <Button
            onClick={modalConfig.confirmActionBtn}
            variant="contained"
            color={modalConfig.severity === 'error' ? 'error' : 'secondary'}
          >
            {modalConfig.btnLabel}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default MainLayout;
