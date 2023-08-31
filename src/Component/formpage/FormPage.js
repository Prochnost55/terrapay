import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

function FormPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      !validateEmail(data.email)
    ) {
      setError("Please fill in all required fields with valid data.");
    } else {
      setError("");
      navigate("/gearupPage");
    }
  };

  return (
    <div className="container">
      <h1 className="terrapay-title">
        t<em>e</em>rrapay
      </h1>
      <div className="form">
        <div className="form-header">
          <h1 className="form-title">Fill in your details</h1>
          <h2 className="form-subtitle">let's find out!</h2>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={data.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={data.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={data.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="tel"
              name="mobileNo"
              placeholder="Mobile no (optional)"
              value={data.mobileNo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="submit-button" onClick={handleSubmit}>
          I'm ready to begin!
        </button>
      </div>
    </div>
  );
}

export default FormPage;
