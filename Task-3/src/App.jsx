import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const students = [
    {
      id: 1,
      name: "Sumeet",
      age: 22,
      city: "Bangalore",
      email: "adsumeet@gmail.com",
      occupation: "Student",
    },
    {
      id: 2,
      name: "Sudeep",
      age: 21,
      city: "Hyderabad",
      email: "sudeep@gmail.com",
      occupation: "Intern",
    },
    {
      id: 3,
      name: "Bassu",
      age: 23,
      city: "Chennai",
      email: "bassu@gmail.com",
      occupation: "Developer",
    },
    {
      id: 4,
      name: "Raju",
      age: 22,
      city: "Selam",
      email: "raju@gmail.com",
      occupation: "Designer",
    },
    {
      id: 5,
      name: "Sanga",
      age: 24,
      city: "Mysore",
      email: "sanga@gmail.com",
      occupation: "Tester",
    },
  ];

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">

      <h1>Task 3 - useState & List Rendering</h1>

      <div className="counter">
        <h2>Counter Application</h2>

        <h1>{count}</h1>

        <div className="btns">
          <button className="inc" onClick={increment}>
            Increment
          </button>

          <button className="dec" onClick={decrement}>
            Decrement
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      <h2 className="title">Student Details</h2>

      <div className="cards">
        {students.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>

            <p>
              <b>Age:</b> {item.age}
            </p>

            <p>
              <b>City:</b> {item.city}
            </p>

            <p>
              <b>Email:</b> {item.email}
            </p>

            <p>
              <b>Occupation:</b> {item.occupation}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;