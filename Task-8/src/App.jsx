import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }

    if (timer === 0) {
      setIsRunning(false);
    }
  }, [isRunning, timer]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setTimer(10);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      {timer > 0 ? (
        <h2>Time Remaining: {timer}s</h2>
      ) : (
        <h2>Time's Up!</h2>
      )}

      <button onClick={startTimer}>Start Timer</button><br />

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;