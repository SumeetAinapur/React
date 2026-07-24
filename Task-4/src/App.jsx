import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "container dark" : "container light"}>
      <div className="card">
        <h1>React Task 4</h1>

        <h2>
          {isLoggedIn ? "Welcome Back!" : "Please Login"}
        </h2>

        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="btn"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <button
          onClick={() => setIsDark(!isDark)}
          className="btn"
        >
          {isDark ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </div>
  );
}

export default App;