import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "6px"
    }}>
      <NavLink to="/" className={({isActive}) => `${isActive ? "activa": ''}`}>Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  )
}