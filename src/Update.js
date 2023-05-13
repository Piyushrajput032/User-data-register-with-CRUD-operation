import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';

const  Update = () => {
    const {id}=useParams();
    const[user,setUser]=useState([]);
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:5173/details/"+id)
        .then((res) => setValues({...values,name:res.data[0].name,phone:res.data[0].phone,email:res.data[0].email}))
        .catch((err) => console.log(err));
    })
    const [values,setValues]=useState({
        name:'',
        phone:'',
        email:'',
        
    })
    const handleUpdate=e=>{
        e.prevenDefault();
        axios.put("http://localhost:5173/update/"+id,values)
        .then(res=>{console.log(res)
        navigate("/home")})
        .catch(err=>console.log(err))
    }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
            <h2>Update User</h2>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              value={values.name}
              onChange={(e) => setValues([...values,e.target.value])}
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
              value={values.phone}
              onChange={(e) => setValues([...values,e.target.value])}
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
              value={values.email}
              onChange={(e) => setValues([...values,e.target.value])}
              className="form-control form-control-sm"
              name="email"
              aria-describedby="helpId"
              placeholder="Enter Email Id"
            />
          </div>
          
          
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
        <Link to="/home">GO TO HOME</Link>
      </div>
    </div>
  )
}

export default Update