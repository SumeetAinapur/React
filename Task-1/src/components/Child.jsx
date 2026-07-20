import "./Child.css";

function Child(props) {
  return (
    <div className="card">

      <h2>{props.user.name}</h2>

      <p><strong>Age:</strong> {props.user.age}</p>
      <p><strong>City:</strong> {props.user.city}</p>
      <p><strong>Mobile:</strong> {props.user.mobile}</p>
      <p><strong>Email:</strong> {props.user.email}</p>
      <p><strong>Occupation:</strong> {props.user.occupation}</p>
      <p><strong>Address:</strong> {props.user.address}</p>

    </div>
  );
}

export default Child;