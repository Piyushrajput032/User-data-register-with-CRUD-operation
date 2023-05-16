import React, { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fetchdata,setFetchData]=useState()
  const [check,setCheck]=useState(true)
    const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios
    .get(`http://localhost:5173/login/${password}`)
    .then((res) => setFetchData(res))
    .catch((err) => console.log(err));
    console.log(fetchdata.data[0].name)
    if(fetchdata.data[0].name==name){
        navigate("/home")
    }
  
  };


  return (
    <div>
      {check?<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      
      <div className="w-50 bg-white rounded p-3">
      <h2>User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-sm"
              name="UserName"
              aria-describedby="helpId"
              placeholder="User name"
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
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>:<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      
      <div className="w-50 bg-white rounded p-3">
      <Link to="/signup">Sign Up</Link>
        </div>
        </div> }

      
    </div>
  );
};

export default Login;
