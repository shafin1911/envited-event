import React from "react"

// material-ui
import { Grid } from "@mui/material"
import { Box } from "@mui/system"

// project imports
import * as Yup from "yup"
import AnimateCustomButton from "ui-component/extended/AnimateCustomButton"
import { useNavigate } from "react-router"
import { Field, Formik } from "formik"
import CustomFormControl from "ui-component/inputs/CustomFormControl"
import { useTheme } from "@emotion/react"
import CustomDatePicker from "ui-component/inputs/CustomDatePicker"
import CustomFileUploader from "ui-component/inputs/CustomFileUploader"

const styles = {
  bodyWrapper: { marginTop: "60px" },
  headerTitleWrapper: {
    textAlign: "center",
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
    textAlign: "center",
    paddingX: "27px",
  },
  gradientHeadertext: {
    background: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)`,
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  bottomButton: {
    width: { xs: "180px", md: "311px" },
    marginBottom: "24px",
  },
}

export default function CreateEventPage() {
  const navigate = useNavigate()
  const theme = useTheme()

  const onSubmit = () => {
    navigate("/event")
  }

  const mdGrid = 12
  const lgGrid = 6

  return (
    <Grid container sx={styles.bodyWrapper}>
      <Grid item xs={12}>
        <Box sx={styles.headerTitleWrapper}>
          <Box>Create Your Own</Box>
          <Box sx={styles.gradientHeadertext}>Event</Box>
        </Box>
        <Box sx={styles.headerSubtitleWrapper}>
          Fill out the form and click the next button to create the event.
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Formik
          zIndex={1}
          initialValues={{
            eventName: "",
            hostName: "",
            location: "",
            startDate: new Date(),
            endDate: new Date(),
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            eventName: Yup.string()
              .max(600)
              .required("Event name is required!"),
            hostName: Yup.string().max(600).required("Host name is required!"),
            location: Yup.string().max(600).required("location is required!"),
            startDate: Yup.date().required("Start date is required!"),
            endDate: Yup.date().required("End date is required!"),
          })}
          onSubmit={async (
            values,
            { setErrors, setStatus, setSubmitting, resetForm }
          ) => {
            try {
              onSubmit(values)
              setStatus({ success: true })
              setErrors({ submit: null })
              setSubmitting(false)
              resetForm()
            } catch (err) {
              setStatus({ success: false })
              setErrors({ submit: err.message })
              setSubmitting(false)
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => {
            return (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={4} p={"36px"}>
                  <Grid item xs={mdGrid} lg={lgGrid}>
                    <CustomFormControl
                      label='*Event name'
                      name={"eventName"}
                      value={values.eventName}
                      touched={touched.eventName}
                      error={errors.eventName}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      theme={theme}
                    />
                  </Grid>

                  <Grid item xs={mdGrid} lg={lgGrid}>
                    <CustomFormControl
                      label='*Host name'
                      name={"hostName"}
                      value={values.hostName}
                      touched={touched.hostName}
                      error={errors.hostName}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      theme={theme}
                    />
                  </Grid>

                  <Grid item xs={mdGrid} lg={lgGrid}>
                    <Field
                      disabled={false}
                      name='startDate'
                      theme={theme}
                      label='*Start Date'
                      disablePast
                      component={CustomDatePicker}
                      minDate={new Date()}
                    />
                  </Grid>

                  <Grid item xs={mdGrid} lg={lgGrid}>
                    <Field
                      disabled={false}
                      name='endDate'
                      theme={theme}
                      label='*End Date'
                      disablePast
                      component={CustomDatePicker}
                      minDate={new Date()}
                    />
                  </Grid>

                  <Grid item xs={mdGrid} lg={lgGrid}>
                    <CustomFormControl
                      label='*Location'
                      name={"location"}
                      value={values.location}
                      touched={touched.location}
                      error={errors.location}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      theme={theme}
                    />
                  </Grid>

                  <Grid item xs={mdGrid} lg={lgGrid}>
                    <CustomFileUploader
                      setFile={(file) => {
                        console.log("log file", file)
                      }}
                      fileType='image'
                      title='Event photo'
                    />
                  </Grid>

                  <Grid item xs={12} display='flex' justifyContent='center'>
                    <Box sx={styles.bottomButton}>
                      <AnimateCustomButton type='submit' label={"Next"} />
                    </Box>
                  </Grid>
                </Grid>
              </form>
            )
          }}
        </Formik>
      </Grid>
    </Grid>
  )
}
