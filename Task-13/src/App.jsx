import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Category from "./pages/Category"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Category />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App