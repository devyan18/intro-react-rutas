import { useNavigate } from "react-router-dom"
import { useSession } from "../context/SessionProvider"

export default function LoginPage () {

  const navigate = useNavigate()
  const { setUser } = useSession()


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    
    const values = Object.fromEntries(formData.entries())

    const resp = await fetch("http://localhost:4000/auth/sign-in", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })

    if (!resp.ok) {
      return
    }

    const data = await resp.json()

    setUser(data.user)
    navigate("/")
  }

  return (
    <div>
      <h1>Login page</h1>
      <form
        onSubmit={handleSubmit}
      >
        <input type="email" name="email" placeholder="example@ex.com" /><br />
        <input type="password" name="password" placeholder="***********"/><br />
        <button>Login</button>
      </form>
    </div>
  )
}