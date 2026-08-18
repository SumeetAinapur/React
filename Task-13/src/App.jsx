import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Cars from "./pages/Cars"
import Bikes from "./pages/Bikes"
import Laptops from "./pages/Laptops"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route path="cars" element={<Cars />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="laptops" element={<Laptops />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App