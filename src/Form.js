import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();

  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData=new FormData();
    formData.append('name',username);
    formData.append('phone',phone);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('image',file);
    axios.post("http://localhost:5173/register",formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  console.log(file)

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control form-control-sm"
              name="UserName"
              aria-describedby="helpId"
              placeholder="User name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control form-control-sm"
              name="Phone"
              aria-describedby="helpId"
              placeholder="Enter Contact number"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-sm"
              name="email"
              aria-describedby="helpId"
              placeholder="Enter Email Id"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              autoComplete="false"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-sm"
              name="password"
              aria-describedby="helpId"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Profile Image</label>
            <input
              type="file"
              onChange={handleImage}
              className="form-control form-control-sm"
              aria-describedby="helpId"
              placeholder="Upload Your image"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <Link to="/">Login In</Link>
      </div>
    </div>
  );
};

export default Form;
