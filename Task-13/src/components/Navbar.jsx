import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>ProductHub</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar