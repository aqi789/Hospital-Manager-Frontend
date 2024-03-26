import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashbboardNav from "../DashbboardNav";
import Sidebar from "../Sidebar";

const DeptForm = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentImage, setDepartmentImage] = useState("");
  const [departmentYear, setDepartmentYear] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !departmentName ||
      !departmentImage ||
      !departmentYear ||
      !departmentDescription
    ) {
      console.error("Please fill in all fields");
      return;
    }
    const formData = new FormData();
    formData.append("deptName", departmentName);
    formData.append("deptImg", departmentImage);
    formData.append("deptYear", departmentYear);
    formData.append("deptDesc", departmentDescription);

    axios
      .post("http://localhost:3001/DeptPost", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard/deptCard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ backgroundColor: "#3ba9a9", height: "100vh" }}>
      <div>
        <DashbboardNav />
      </div>
      <div style={{ height: "10px" }}>
        <Sidebar />
      </div>
      <form
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.1)",
          marginLeft: "570px",
          width: "600px",
          marginTop: "100px",
        }}
        className="form-group"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" style={{ width: "150px", margin: "5px" }}>
            <strong>Department Name</strong>
          </label>
          <input
            type="text"
            name="name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            style={{ width: "60%" }}
          />
        </div>
        <br />

        <div>
          <label htmlFor="image" style={{ width: "150px", margin: "5px" }}>
            <strong>Department Profile Image</strong>
          </label>
          <input
            type="file"
            onChange={(e) => setDepartmentImage(e.target.files[0])}
            style={{ width: "60%" }}
          />
        </div>
        <br />

        <div>
          <label htmlFor="number" style={{ width: "150px", margin: "5px" }}>
            <strong>Year Founded</strong>
          </label>
          <input
            type="number"
            name="number"
            value={departmentYear}
            onChange={(e) => setDepartmentYear(e.target.value)}
            style={{ width: "60%" }}
          />
        </div>
        <br />

        <div>
          <label
            htmlFor="description"
            style={{ width: "150px", margin: "5px" }}
          >
            <strong>Description</strong>
          </label>
          <textarea
            name="description"
            value={departmentDescription}
            onChange={(e) => setDepartmentDescription(e.target.value)}
            style={{ width: "60%" }}
          ></textarea>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "#3ba9a9",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeptForm;
