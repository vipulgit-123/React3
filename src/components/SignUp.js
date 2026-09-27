import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const navigate = useNavigate();

  let host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cPassword) {
       props.showAlert("Passwords do not match", "danger");
      return;
    }

    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          cPassword: credentials.cPassword,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (response.ok && json.authtoken) {
        // Redirect to home
        navigate("/login");
        // Show success message
        props.showAlert(json.message || "Account Created Successfully  ", "success");
      } else {
        props.showAlert(json.error || "  Signup Failed (Invalid Credentials) .......  ", "danger");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server");
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
        <div className="container mt-3">
      <h2>SignUp to continue to iNoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={credentials.name}
            name="name"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            name="password"
            id="password"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.cPassword}
            name="cPassword"
            id="cPassword"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
