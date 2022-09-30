import React from "react"
// material-ui
import { Grid } from "@mui/material"

// project imports
import { Box } from "@mui/system"
import { ImCalendar, ImLocation2 } from "react-icons/im"

const styles = {
  bodyWrapper: { px: { xs: 0, sm: "184px" }, py: { xs: 0, sm: "88px" } },
  contentWrapper: { px: { xs: "20px", sm: 0 }, py: { xs: "11px", sm: "36px" } },
  topImage: {
    "& img": {
      // maxWidth: { xs: "165px", md: "311px" },
      width: "100%",
      height: "auto",
    },
    display: "flex",
    justifyContent: "center",
    filter: `drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))`,
    borderRadius: "13.2326px",
  },
  headerTitleWrapper: {
    textAlign: "left",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: { xs: "36px", md: "64px" },
    lineHeight: { xs: "36px", md: "64px" },
    color: "#240D57",
  },
  headerSubtitleWrapper: {
    fontWeight: 300,
    fontSize: { xs: "16px", md: "24px" },
    lineHeight: { xs: "16px", md: "24px" },
    marginTop: "16px",
    color: "#4F4F4F",
    textAlign: "left",
  },
  eventDetailsWrapper: {
    my: "32px",
  },
  eventDetails: {
    display: "flex",
    textAlign: "left",
    width: "100%",
    mb: "16px",
  },
  eventDetailsIcon: {
    mr: "20px",
    background: "white",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "primary.light",
    fontSize: "20px",
    borderRadius: "16px",
  },
  eventDetailsTextTitle: {
    fontSize: "16px",
    fontWeight: 700,
  },
  eventDetailsTextData: {
    fontSize: "14px",
    fontWeight: 400,
  },
}

export default function EventPage() {
  return (
    <Box sx={styles.bodyWrapper}>
      <Box sx={styles.topImage}>
        <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T123153Z&X-Amz-Expires=86400&X-Amz-Signature=8b9568146a0e556985e29a6a2b80a9496b06f0c3ec139323e1f3748328bfebbf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject' />
      </Box>
      <Grid container sx={styles.contentWrapper}>
        <Grid item xs={12}>
          <Box sx={styles.headerTitleWrapper}>
            <Box>Birthday Bash</Box>
          </Box>
          <Box sx={styles.headerSubtitleWrapper}>Hosted by Elysia</Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={styles.eventDetailsWrapper}>
            <Box sx={styles.eventDetails}>
              <Box sx={styles.eventDetailsIcon}>
                <ImCalendar />
              </Box>
              <Box sx={styles.eventDetailsText}>
                <Box sx={styles.eventDetailsTextTitle}>18 August 6:00PM</Box>
                <Box sx={styles.eventDetailsTextData}>
                  to 19 August 1:00PM UTC +10
                </Box>
              </Box>
            </Box>

            <Box sx={styles.eventDetails}>
              <Box sx={styles.eventDetailsIcon}>
                <ImLocation2 />
              </Box>
              <Box sx={styles.eventDetailsText}>
                <Box sx={styles.eventDetailsTextTitle}>Street name</Box>
                <Box sx={styles.eventDetailsTextData}>
                  Suburb, State, Postcode
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
