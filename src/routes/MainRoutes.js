import { lazy } from "react"

// project imports
import MainLayout from "layout/MainLayout"
import Loadable from "ui-component/Loadable"
import NotFoundPage from "ui-component/utils/NotFoundPage"

// user routing
const LandingPage = Loadable(lazy(() => import("views/pages/home")))
const CreateEventPage = Loadable(lazy(() => import("views/pages/create-event")))
const EventPage = Loadable(lazy(() => import("views/pages/event")))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/create",
        element: <CreateEventPage />,
      },
      {
        path: "/event",
        element: <EventPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage label='404 - Page Not Found!' />,
      },
    ],
  }
}

export default MainRoutes
