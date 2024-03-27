import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DashbboardNav from "../DashbboardNav";
import Sidebar from "../Sidebar";

const EmpCard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:3001/getEmp")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/empDelete/${id}`)
      .then((res) => {
        console.log("Deleted");
        fetchEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        {employees.map((employee, index) => (
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
            <img
              className="card-img-top"
              src={`http://localhost:3001/images/${employee.image}`}
              alt={`Department ${employee._id}`}
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                margin: "5px auto",
              }}
            />

            <div className="card-body">
              <h4 className="card-title m-2">{employee.name}</h4>
              <Link to={`/dashboard/singleDept/${employee.department}`} style={{color:'#3ba9a9'}}>
              <h5 className="card-title m-2">{employee.department}</h5>
              </Link>
              <Link to={`/dashboard/singleDeptHead/${employee.report}`} style={{color:'#3ba9a9'}}>
              <p className="card-title m-2">Report to: {employee.report}</p>
              </Link>
              <p className="card-text">Employee Number: {employee.number}</p>
              <p className="card-text">Employee Age: {employee.age}</p>
              <p className="card-text">{employee.description}</p>
            </div>
            <div>
              <Link to={`/dashboard/empUpdate/${employee._id}`}>
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
                }}
                onClick={() => handleDelete(employee._id)}
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

export default EmpCard;