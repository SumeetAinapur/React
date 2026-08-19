import { Link, Outlet } from "react-router-dom"

function Products() {
  return (
    <div className="products-page">
      <p className="small-title">OUR COLLECTION</p>

      <h1>Find your next favourite</h1>

      <div className="category-links">
        <Link to="cars">Cars</Link>
        <Link to="bikes">Bikes</Link>
        <Link to="laptops">Laptops</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Products