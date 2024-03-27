import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import DashboardNav from "../DashbboardNav";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

const SingleDept = () => {
  const [department, setDepartment] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        // Fetch department data from the backend by name
        const response = await axios.get(`http://localhost:3001/getDeptByName/${id}`);
        setDepartment(response.data);
      } catch (error) {
        console.error("Error fetching department:", error);
        // Handle error, display error message to the user, etc.
      }
    };

    fetchDepartment();
  }, [id]);

  if (!department) {
    return <div>Loading department...</div>;
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
            className="card"
            style={{
              width: "500px",
              height: "350px",
              textAlign: "center",
              overflowY: "scroll",
              margin: "10px",
            }}
          >
            <h4 className="card-title m-2">{department.deptName}</h4>
            <img
              className="card-img-top"
              src={`http://localhost:3001/images/${department.image}`}
              alt={`Department ${department._id}`}
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                margin: "5px auto",
              }}
            />
            <div className="card-body">
              <p className="card-text">Year founded: {department.deptYear}</p>
              <p className="card-text">{department.deptDesc}</p>
            </div>
            <div>
              <Link to={`/dashboard/deptUpdate/${department._id}`}>
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
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default SingleDept;
