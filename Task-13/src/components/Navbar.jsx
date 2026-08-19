import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Velora</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Collection</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar