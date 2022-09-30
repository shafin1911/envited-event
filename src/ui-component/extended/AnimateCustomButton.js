import { Button } from "@mui/material"
import React from "react"
import AnimateButton from "./AnimateButton"

export default function AnimateCustomButton({ label, onClick }) {
  return (
    <AnimateButton>
      <Button
        fullWidth
        size='large'
        variant='contained'
        color='primary'
        onClick={onClick}
        sx={{
          "&.MuiButton-root": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            width: "fit-content",
            background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
            borderRadius: "10px",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "18px",
          },
        }}
      >
        {label}
      </Button>
    </AnimateButton>
  )
}
