import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/usersSlice";
import { useState } from "react";
import "./register.scss";

function Register() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    documentType: "",
    documentNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    for (const key in formData) {
      if (formData[key] === "") {
        alert(`Please fill out the ${key} field`);
        return;
      }
    }

    const userWithId = { ...formData, id: Date.now() };

    dispatch(addUser(userWithId));

    setFormData({
      name: "",
      lastname: "",
      documentType: "",
      documentNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    alert("User added successfully");
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="lastname">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="documentType">
          <label htmlFor="documentType">Document Type</label>
          <select
            name="documentType"
            id="documentType"
            value={formData.documentType}
            onChange={handleChange}
          >
            <option value="">Select Document Type</option>
            <option value="cc">Citizenship Card</option>
            <option value="ti">Identity Card</option>
            <option value="passport">Passport</option>
          </select>
        </div>
        <div className="documentNumber">
          <label htmlFor="documentNumber">Document Number</label>
          <input
            type="text"
            id="documentNumber"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="confirmPassword">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
