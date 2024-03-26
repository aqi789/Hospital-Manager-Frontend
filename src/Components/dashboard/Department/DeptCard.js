import React, { useEffect, useState } from "react";
import DashbboardNav from "../DashbboardNav";
import Sidebar from "../Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

const DeptCard = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartments();
  }, []);
  const fetchDepartments = () => {
    axios
      .get("http://localhost:3001/getDept")
      .then((response) => {
        setDepartments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      console.error("Invalid department id");
      return;
    }
    axios
      .delete(`http://localhost:3001/deptDelete/${id}`)
      .then((res) => {
        console.log("deleted");
        setDepartments(departments.filter((dept) => dept._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "#3ba9a9", height: "100%" }}>
      <div>
        <DashbboardNav />
      </div>
      <div>
        <Sidebar />
      </div>

      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{ marginLeft: "190px", paddingTop: "70px" }}
      >
        {departments.map((department, index) => (
          <div
            key={index}
            className="card"
            style={{
              width: "300px",
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
                onClick={() => handleDelete(department._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeptCard;
