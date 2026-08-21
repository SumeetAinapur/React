import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="not-found">
      <p className="small-title">404 ERROR</p>

      <h1>Page not found</h1>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <button
        className="hero-button"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  )
}

export default NotFound