import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const localProducts = {
  cars: [
    {
      id: 1,
      name: "Porsche Panamera",
      price: "₹1.79 Crore",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      description: "Luxury sports car with powerful performance."
    },
    {
      id: 2,
      name: "Chevrolet Camaro",
      price: "₹50 Lakh",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      description: "Sporty design with an exciting driving experience."
    }
  ],

  bikes: [
    {
      id: 3,
      name: "Harley-Davidson LiveWire",
      price: "₹20.5 Lakh",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
      description: "Modern electric performance motorcycle."
    },
    {
      id: 4,
      name: "Harley-Davidson Sportster",
      price: "₹16.49 Lakh",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
      description: "Classic cruiser styling with modern performance."
    }
  ]
}

function Category() {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const search = searchParams.get("search")?.toLowerCase() || ""
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      setError("")

      try {
        if (category === "laptops") {
          const response = await fetch("https://dummyjson.com/products/category/laptops")

          if (!response.ok) {
            throw new Error("Failed to fetch products")
          }

          const data = await response.json()

          const laptopProducts = data.products.map(product => ({
            id: product.id,
            name: product.title,
            price: `₹${Math.round(product.price * 85).toLocaleString("en-IN")}`,
            image: product.thumbnail,
            description: product.description
          }))

          setProducts(laptopProducts)
        } else {
          setProducts(localProducts[category] || [])
        }
      } catch (err) {
        setError("Unable to load products")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search)
  )

  if (!["cars", "bikes", "laptops"].includes(category)) {
    return (
      <div className="message">
        <h2>Category not found</h2>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="message">
        <h2>Loading products...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="message">
        <h2>{error}</h2>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))
      ) : (
        <div className="message">
          <h2>No products found</h2>
        </div>
      )}
    </div>
  )
}

export default Category