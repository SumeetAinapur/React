import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
    } else if (
      formData.firstName.length < 3 ||
      formData.firstName.length > 15
    ) {
      newErrors.firstName = "First Name must be 3 to 15 characters";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    } else if (
      formData.lastName.length < 3 ||
      formData.lastName.length > 15
    ) {
      newErrors.lastName = "Last Name must be 3 to 15 characters";
    }

    if (formData.email === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.mobile === "") {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10 digit mobile number";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.dob === "") {
      newErrors.dob = "Date of Birth is required";
    }

    if (formData.gender === "") {
      newErrors.gender = "Select Gender";
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    } else if (
      formData.address.length < 10 ||
      formData.address.length > 100
    ) {
      newErrors.address = "Address must be 10 to 100 characters";
    }

    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
    } else if (
      formData.city.length < 3 ||
      formData.city.length > 20
    ) {
      newErrors.city = "City must be 3 to 20 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div className="inputBox">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <p>{errors.firstName}</p>
        </div>

        <div className="inputBox">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <p>{errors.lastName}</p>
        </div>

        <div className="inputBox">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>

        <div className="inputBox">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <p>{errors.mobile}</p>
        </div>

        <div className="inputBox">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>

        <div className="inputBox">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <p>{errors.confirmPassword}</p>
        </div>

        <div className="inputBox">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <p>{errors.dob}</p>
        </div>

        <div className="inputBox">
          <label>Gender</label>

          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <p>{errors.gender}</p>
        </div>

        <div className="inputBox">
          <label>Address</label>
          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          <p>{errors.address}</p>
        </div>

        <div className="inputBox">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <p>{errors.city}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;