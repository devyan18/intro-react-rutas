import { lazy } from "react"

export const HomePage = lazy(() => import("./HomePage"))
export const LoginPage = lazy(() => import("./LoginPage"))
export const DashboardPage = lazy(() => import("./DashboardPage"))
export const NotFoundPage = lazy(() => import("./NotFoundPage"))