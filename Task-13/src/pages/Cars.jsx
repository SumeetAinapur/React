import ProductCard from "../components/ProductCard"

function Cars() {
  return (
    <div className="product-grid">
      <ProductCard
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        name="Porsche Panamera"
        price="₹1,79,00,000"
        description="Stylish and powerful sports car."
      />

      <ProductCard
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
        name="Chevrolet Camaro"
        price="₹50,00,000"
        description="Comfortable luxury car for everyday driving."
      />
    </div>
  );
}

export default Cars