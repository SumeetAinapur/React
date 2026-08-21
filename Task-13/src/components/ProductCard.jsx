import { useId } from "react"

function ProductCard({ image, name, price, description }) {
  const productId = useId()

  return (
    <div className="product-card" aria-labelledby={productId}>
      <img src={image} alt={name} />

      <div className="card-content">
        <h3 id={productId}>{name}</h3>

        <h4>{price}</h4>

        <p>{description}</p>

        <button>View Details</button>
      </div>
    </div>
  )
}

export default ProductCard