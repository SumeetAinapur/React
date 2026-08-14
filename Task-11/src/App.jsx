import React, { useState, useEffect, useRef, useContext } from "react";
import "./App.css";

const UserContext = React.createContext();

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const nameRef = useRef();

  useEffect(() => {
    console.log("Welcome User");
    nameRef.current.focus();
  }, []);

  const submit = (e) => {
    e.preventDefault();

    setSubmittedName(name);
    setSubmittedEmail(email);
  };

  return (
    <UserContext.Provider value="Welcome to User Profile">
      <Profile
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        submit={submit}
        nameRef={nameRef}
        submittedName={submittedName}
        submittedEmail={submittedEmail}
      />
    </UserContext.Provider>
  );
}

function Profile({
  name,
  email,
  setName,
  setEmail,
  submit,
  nameRef,
  submittedName,
  submittedEmail,
}) {
  const message = useContext(UserContext);

  return (
    <div className="container">
      <div className="card">
        <h2>User Profile</h2>

        <p>{message}</p>

        <form onSubmit={submit}>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        {submittedName && (
          <div>
            <h3>Profile Details</h3>
            <p>Name: {submittedName}</p>
            <p>Email: {submittedEmail}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;