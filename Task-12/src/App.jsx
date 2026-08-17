import { useReducer } from "react"
import "./App.css"

const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const existingItem = state.find((item) => item.id === action.item.id)

      if (existingItem) {
        return state.map((item) =>item.id === action.item.id? { ...item, quantity: item.quantity + 1 }: item)
      }

      return [...state, action.item];

    case "remove":
      return state.filter((item) => item.id !== action.id)

    case "increase":
      return state.map((item) =>item.id === action.id ? { ...item, quantity: item.quantity + 1 }: item)

    case "decrease":
      return state.map((item) =>item.id === action.id? { ...item, quantity: item.quantity - 1 }: item)
      .filter((item) => item.quantity > 0);

    case "clear":
      return []

    default:
      return state
  }
}

function App() {
  const [cart, dispatch] = useReducer(reducer, initialState)

  const products = [
    { id: 1, name: "Laptop", quantity: 1 },
    { id: 2, name: "Mouse", quantity: 1 },
    { id: 3, name: "Keyboard", quantity: 1 },
  ];

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <span>{product.name}</span>

          <button onClick={() =>dispatch({type: "add",item: product,})}>Add Item </button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>
              {item.name} - Quantity: {item.quantity}
            </span>

            <button onClick={() =>dispatch({ type: "increase", id: item.id })}>+</button>

            <button onClick={() =>dispatch({ type: "decrease", id: item.id })}>-</button>

            <button onClick={() =>dispatch({ type: "remove", id: item.id })}>Remove</button>
          </div>
        ))
      )}

      <button onClick={() => dispatch({ type: "clear" })}>Clear Cart</button>
    </div>
  );
}

export default App;