import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import Loader from "ui-component/Loader"
import CreateEventPage from "./CreateEventPage"

// ==============================|| Landing Page ||============================== //

const CreateEventPageRoot = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Box>
      <CreateEventPage />
    </Box>
  )
}

export default CreateEventPageRoot
