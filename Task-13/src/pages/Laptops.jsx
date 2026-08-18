import ProductCard from "../components/ProductCard"

function Laptops() {
  return (
    <div className="product-grid">
      <ProductCard
        image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        name="MacBook Air"
        price="₹79,900"
        description="Powerful laptop for work and development."
      />

      <ProductCard
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        name="MacBook Pro"
        price="₹1,20,000"
        description="Lightweight laptop with excellent performance."
      />
    </div>
  );
}

export default Laptops