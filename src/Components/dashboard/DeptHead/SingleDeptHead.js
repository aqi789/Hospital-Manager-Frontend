import React, { useEffect, useState } from 'react'
import DashboardNav from '../DashbboardNav'
import Sidebar from '../Sidebar'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";

const SingleDeptHead = () => {

    const [head, setHead]=useState(null);
    const {id}=useParams();

    useEffect(()=>{
        const fetchHead=async()=>{
            try{
                const response=await axios.get(`http://localhost:3001/getHeadByName/${id}`);
                setHead(response.data);
            } catch(err) {
                console.log("Error fetching department head", err);
            }
        }
        fetchHead();
    },[id])

    if(!head) {
        return<div>Loading department head...</div>
    }

  return (
    <div style={{ backgroundColor: "#3ba9a9", height: "100vh" }}>
    <div>
      <DashboardNav />
    </div>
    <div>
      <Sidebar />
    </div>
    <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{ marginLeft: "190px", paddingTop: "160px" }}
      >
          <div
            className="card "
            style={{
              width: "500px",
              height: "445px",
              textAlign: "center",
              overflowY: "scroll",
              margin: "10px",
            }}
          >
            <img
              className="card-img-top img-fluid"
              src={`http://localhost:3001/images/${head.image}`}
              alt={`Department ${head._id}`}
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                margin: "0 auto",
                marginTop: "5px",
              }}
            />

            <div className="card-body">
              <h4 className="card-title m-2">{head.name}</h4>
              <h5 className="card-title m-2">{head.department}</h5>

              <p className="card-text">Employee Number: {head.number}</p>
              <p className="card-text">Employee Age: {head.age}</p>
              <p className="card-text">{head.description}</p>
            </div>
            <div>
              <Link to={`/dashboard/deptHeadUpdate/${head._id}`}>
                <button
                  style={{
                    backgroundColor: "#3c9b9b",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "40%",
                    margin: "4px",
                  }}
                >
                  Edit
                </button>
              </Link>
              <button
                style={{
                  backgroundColor: "#3c9b9b",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "40%",
                  margin: "4px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
    </div>
    </div>
  )
}

export default SingleDeptHead