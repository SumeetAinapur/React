function ProductCard({ image, name, price, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <p>{description}</p>
        <button>View Details</button>
      </div>
    </div>
  )
}

export default ProductCard