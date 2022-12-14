import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import Loader from "ui-component/Loader"
import LandingPage from "./LandingPage"

// ==============================|| Landing Page ||============================== //

const LandingPageRoot = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Box>
      <LandingPage />
    </Box>
  )
}

export default LandingPageRoot
