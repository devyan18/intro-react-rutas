import { Link } from "react-router-dom"

export default function NotFoundPage() {

  // const navigate = useNavigate()

  return (
    <div>
      <h1>Página no encontrada</h1>
      <Link to="/">Volver al Home</Link>
    </div>
  )
}