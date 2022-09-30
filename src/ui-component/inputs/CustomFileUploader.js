import { Box, Button } from "@mui/material"
import React from "react"
import AnimateButton from "ui-component/extended/AnimateButton"
import { useFileUpload } from "use-file-upload"
import { IconVideo, IconFile3d } from "@tabler/icons"
import { useTheme } from "@mui/material/styles"

const CustomFileUploader = ({ setFile, title, fileType }) => {
  const [file, selectFile] = useFileUpload()
  const theme = useTheme()
  return (
    <div>
      <AnimateButton>
        <Button
          fullWidth
          sx={{ boxShadow: "none" }}
          disableElevation
          size='large'
          variant='outlined'
          color='primary'
          onClick={() => {
            // Single File Upload accepts only images
            selectFile({ accept: `${fileType}` }, ({ file }) => {
              setFile(file)
            })
          }}
        >
          Click Here to Upload A {title}
        </Button>
      </AnimateButton>
      <Box
        sx={{
          padding: "16px",
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: "8px",
          marginY: "8px",
        }}
      >
        {file ? (
          <Box display='flex' alignItems='center'>
            {title === "video" ? (
              <IconVideo style={{ marginRight: "16px" }} />
            ) : (
              <IconFile3d style={{ marginRight: "16px" }} />
            )}
            <span style={{ marginRight: "16px" }}> Name: {file.name} </span>
            <span> Size: {file.size / (1024 * 1024)} MB </span>
          </Box>
        ) : (
          <Box>No file selected</Box>
        )}
      </Box>
    </div>
  )
}

export default CustomFileUploader
