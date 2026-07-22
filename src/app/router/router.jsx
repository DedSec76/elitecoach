import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { LandingPage } from "../../features/landing/pages/LandingPage";
import { DashboardPage } from "../../features/dashboard/pages/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            }
        ]
    },

    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            }
        ]
    }
])