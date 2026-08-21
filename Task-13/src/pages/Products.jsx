import { Link, Outlet, useSearchParams } from "react-router-dom"

function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get("search") || ""
  function handleSearch(e) {
    const value = e.target.value
    if (value) {
      setSearchParams({ search: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="products-page">
      <p className="small-title">OUR COLLECTION</p>
      <h1>Find your next favourite</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
        />
      </div>
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