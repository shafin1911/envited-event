import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import Loader from "ui-component/Loader"
import EventPage from "./EventPage"

// ==============================|| Landing Page ||============================== //

const EventPageRoot = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Box>
      <EventPage />
    </Box>
  )
}

export default EventPageRoot
