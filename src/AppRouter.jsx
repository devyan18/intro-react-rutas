import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, LoginPage, DashboardPage, NotFoundPage } from "./pages"
import { Suspense } from "react"
import { Navbar } from "./components/Navbar"
import { PrivateRoutes } from "./components/PrivateRoutes"

export default function AppRouter() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoutes />}>
            
            <Route path="/dashboard" element={<DashboardPage />} />
          
          </Route>
          
          <Route path="*" element={<NotFoundPage />}  />

        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}