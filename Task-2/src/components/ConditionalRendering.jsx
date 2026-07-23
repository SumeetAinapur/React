import "./ConditionalRendering.css";

function ConditionalRendering() {
  const isLoggedIn = false;

  return (
    <div className="container">
      <div className="card">
        <h1>Conditional Rendering</h1>

        {isLoggedIn ? (
          <div className="success">
            <h2>Welcome Back!</h2>
            <p>You have successfully logged in.</p>
          </div>
        ) : (
          <div className="danger">
            <h2>Please Login to Continue</h2>
            <p>You need to log in to access the application.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConditionalRendering;