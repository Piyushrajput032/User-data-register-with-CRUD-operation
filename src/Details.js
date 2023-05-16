import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [datas, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5173/details/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(datas[0]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#3b4d91",
        }}
      >
        <h1 style={{ color: "white" }}>User Details</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <div>
            <img
              src={`http://localhost:5173/images/${datas[0]?.image}`}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              alt="User"
            />
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {datas[0]?.name}
              </div>
              <div  style={{ fontSize: "18px", marginBottom: "10px" }}>
                Phone: {datas[0]?.phone}
              </div>
              <div style={{ fontSize: "18px", marginBottom: "10px" }}>
                Email: {datas[0]?.email}
              </div>
            </div>
            <div>
                <Link to={`/edit/${datas[0]?.id}`} className="btn btn-info me-2">Edit</Link>

                <Link to={`/home`} className="btn btn-primary ">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
