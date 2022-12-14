import React from "react"
// material-ui
import { Grid } from "@mui/material"

// project imports
import { Box } from "@mui/system"
import AnimateCustomButton from "ui-component/extended/AnimateCustomButton"
import { useNavigate } from "react-router"

const styles = {
  bodyWrapper: { marginTop: "60px" },
  headerTitleWrapper: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: { xs: "36px", md: "64px" },
    lineHeight: { xs: "36px", md: "64px" },
    color: "primary.dark",
  },
  headerSubtitleWrapper: {
    fontWeight: 300,
    fontSize: { xs: "16px", md: "24px" },
    lineHeight: { xs: "16px", md: "24px" },
    marginTop: "16px",
    color: "#4F4F4F",
    textAlign: "center",
    paddingX: "27px",
  },
  gradientHeadertext: {
    background: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)`,
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  midImage: {
    "& img": {
      maxWidth: { xs: "165px", md: "311px" },
      height: "auto",
    },
    paddingY: "36px",
    display: "flex",
    justifyContent: "center",
    filter: `drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))`,
    borderRadius: "13.2326px",
  },
  bottomButton: {
    width: { xs: "180px", md: "311px" },
    marginBottom: "24px",
  },
}

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <Grid container sx={styles.bodyWrapper}>
      <Grid item xs={12}>
        <Box sx={styles.headerTitleWrapper}>
          <Box>Imagine if</Box>
          <Box sx={styles.gradientHeadertext}>Snapchat</Box>
          <Box>had events.</Box>
        </Box>
        <Box sx={styles.headerSubtitleWrapper}>
          Easily host and share events with your friends across any social
          media.
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={styles.midImage}>
          <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T103200Z&X-Amz-Expires=86400&X-Amz-Signature=54bace6c3d2e78e28cb9953deedb9e2c7a249a244a109e33bd689abc8d7ae8cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject' />
        </Box>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box sx={styles.bottomButton}>
          <AnimateCustomButton
            label={"???? Create my event"}
            onClick={() => {
              navigate("/create")
            }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
