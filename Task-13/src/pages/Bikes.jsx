import ProductCard from "../components/ProductCard"

function Bikes() {
  return (
    <div className="product-grid">
      <ProductCard
        image="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
        name="Harley-Davidson LiveWire"
        price="₹20,50,000"
        description="Fast and stylish bike for city rides."
      />

      <ProductCard
        image="https://images.unsplash.com/photo-1558981403-c5f9899a28bc"
        name="Harley-Davidson Sportster"
        price="₹16,80,000"
        description="Classic design with modern performance."
      />
    </div>
  );
}

export default Bikes