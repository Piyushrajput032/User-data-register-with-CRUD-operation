import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,NavLink } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5173/users")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const handeDelete=(id)=>{
    axios.delete("http://localhost:5173/delete/"+id)
    .then((res) => { 
      window.location.reload()})
    .catch((err) => console.log(err))
  }
  console.log(data);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>User List</h2>
        <div className="d-flex justify-content-end">
          <Link to="/signup" className="btn btn-success">
            Create +
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      
                      <NavLink to={`/details/${user.id}`} className="btn btn-primary m-2"><VisibilityIcon/></NavLink>
                      <Link to={`/edit/${user.id}`} className="btn btn-success m-2"><EditIcon/></Link>       
                      <button onClick={()=>handeDelete(user.id)}   className="btn btn-danger m-2"><DeleteForeverIcon/></button>
                     
                      
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
