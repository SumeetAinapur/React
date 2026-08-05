import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="main">
      <div className="box">
        <h2>Stopwatch Timer</h2>

        <h1>{hours} : {minutes} : {secs}</h1>

        <button onClick={() => setIsRunning(true)}>Start</button>

        <button onClick={() => setIsRunning(false)}>Stop</button>

        <button onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;