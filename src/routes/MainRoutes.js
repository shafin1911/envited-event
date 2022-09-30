import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import NotFoundPage from "ui-component/utils/NotFoundPage";

// user routing
const UserDashboard = Loadable(lazy(() => import("views/pages/home")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <UserDashboard />,
      },
      {
        path: "/*",
        element: <NotFoundPage label='404 - Page Not Found!' />,
      },
    ],
  };
};

export default MainRoutes;
