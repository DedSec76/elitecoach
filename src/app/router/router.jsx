import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { LandingPage } from "../../features/landing/pages/LandingPage";
import { DashboardPage } from "../../features/dashboard/pages/DashboardPage";
import { LoginLayout } from "../layouts/LoginLayout";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";

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
                        element: <DashboardPage />
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