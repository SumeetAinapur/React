import "./App.css";
import Child from "./components/Child";

function App() {

  const user1 = {
    name: "Sumeet",
    age: 23,
    city: "Bangalore",
    mobile: "8105205678",
    email: "adsumeet@gmail.com",
    occupation: "Student",
    address: "Rajajinagar"
  };

  const user2 = {
    name: "Sudeep",
    age: 23,
    city: "Mysore",
    mobile: "9876543201",
    email: "sudeep@gmail.com",
    occupation: "Software Engineer",
    address: "Vijaynagar"
  };

  const user3 = {
    name: "Basavaraj",
    age: 24,
    city: "Sedam",
    mobile: "9876543201",
    email: "bassu@gmail.com",
    occupation: "Teacher",
    address: "Vidyanagar"
  };

  const user4 = {
    name: "Rajashekar",
    age: 22,
    city: "Kalaburagi",
    mobile: "9876543201",
    email: "raju@gmail.com",
    occupation: "Designer",
    address: "Om Nagar"
  };

  const user5 = {
    name: "Sumanth",
    age: 24,
    city: "Dharwad",
    mobile: "9876543201",
    email: "sumanth@gmail.com",
    occupation: "Developer",
    address: "Bangalore"
  };

  return (
    <div className="container">
      <h1>User Details</h1>

      <div className="cards">
        <Child user={user1} />
        <Child user={user2} />
        <Child user={user3} />
        <Child user={user4} />
        <Child user={user5} />
      </div>
    </div>
  );
}

export default App;