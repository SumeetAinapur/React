import { Link, Outlet } from "react-router-dom"

function Products() {
  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="category-links">
        <Link to="cars">Cars</Link>
        <Link to="bikes">Bikes</Link>
        <Link to="laptops">Laptops</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Products