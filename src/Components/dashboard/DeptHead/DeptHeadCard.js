import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import DashbboardNav from "../DashbboardNav";

const DeptHeadCard = () => {
  const [head, setHead] = useState([]);

  useEffect(() => {
    fetchHead();
  }, []);

  const fetchHead = () => {
    axios
      .get("http://localhost:3001/getHead")
      .then((res) => {
        setHead(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/headDelete/${id}`)
      .then((res) => {
        console.log("Deleted");
        window.location.reload();
        fetchHead();
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
        {head.map((head, index) => (
          <div
            key={index}
            className="card "
            style={{
              width: "300px",
              height: "350px",
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
              {/* <Link to={`/dashboard/deptHead/${head._id}`}>
  <button style={{ backgroundColor: '#3c9b9b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '40%', margin: '4px' }}>View Details</button>
</Link> */}

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
                onClick={() => handleDelete(head._id)}
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

export default DeptHeadCard;
