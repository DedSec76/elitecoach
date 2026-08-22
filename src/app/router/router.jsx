import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { LandingPage } from "../../features/landing/pages/LandingPage";
import { StudentPage } from "../../features/dashboard/pages/StudentPage";
import { LoginLayout } from "../layouts/LoginLayout";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { RoutinesPage } from "@/features/routines/pages/RoutinesPage";
import { AnaliticsPage } from "@/features/analytics/pages/AnalyticsPage";
import { SettingsPage } from "@/features/auth/pages/SettingsPage";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            }
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <StudentPage />
                    },
                    {
                        path: "routines",
                        element: <RoutinesPage />
                    },
                    {
                        path: "analytics",
                        element: <AnaliticsPage />
                    },
                    {
                        path: "settings",
                        element: <SettingsPage />
                    },
                ]
            },
        ]
    },
    
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
])