import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  function goToProducts() {
    navigate("/products")
  }

  return (
    <div className="home">
      <div className="hero-content">
        <p className="small-title">WELCOME TO VELORA</p>

        <h1>
          Things worth
          <br />
          bringing home
        </h1>

        <p>
          Explore our collection of cars, bikes and laptops
          selected for style, performance and everyday life.
        </p>

        <button className="hero-button" onClick={goToProducts}>
          Explore Collection
        </button>
      </div>
    </div>
  )
}

export default Home