import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

// material-ui
import { useTheme } from "@mui/material/styles"
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
} from "@mui/material"

// project imports
import { severity } from "store/customization/constant"
import { RESET_MODAL, SET_SNACKBAR } from "store/actions"

// assets

// styles

// ==============================|| MAIN LAYOUT ||============================== //

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const MainLayout = () => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"))
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const { snackBarConfig, modalConfig } = useSelector(
    (state) => state.customization
  )
  console.log("first matchDownMd", matchDownMd)
  const handleSnackClose = () => {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        isOpenSnackbar: false,
        severity: severity.success,
        message: "",
      },
    })
  }

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
    })
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* main content */}
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Outlet />
      </Box>
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
        <Box
          sx={{
            ...style,
            width: "fit-content",
            maxWidth: "90vw",
            overflow: "auto",
          }}
        >
          <Typography
            variant='h3'
            color={modalConfig.severity === "error" ? "error" : "secondary"}
            py={2}
          >
            {modalConfig.header}
          </Typography>
          <div>{modalConfig.body}</div>
          <Divider sx={{ marginY: 2 }} />
          <Button
            onClick={modalConfig.confirmActionBtn}
            variant='contained'
            color={modalConfig.severity === "error" ? "error" : "secondary"}
          >
            {modalConfig.btnLabel}
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}

export default MainLayout
