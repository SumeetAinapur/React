import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h2>Mini Chat Application</h2>

      <div className="chat-box">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send Message
        </button>
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;