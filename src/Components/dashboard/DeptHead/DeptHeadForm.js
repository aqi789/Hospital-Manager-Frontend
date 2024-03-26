import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashbboardNav from "../DashbboardNav";

const DeptHeadForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [headImage, setHeadImage] = useState(null);
  const [description, setDescription] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = () => {
    axios
      .get("http://localhost:3001/getDept")
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("headImage", headImage);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("number", number);
    formData.append("description", description);
    formData.append("department", selectedDepartment);

    axios
      .post("http://localhost:3001/headPost", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard/deptHeadCard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#3ba9a9",
        height: "100vh",
      }}
    >
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
            <strong>Employee Name</strong>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="department" style={{ width: "150px", margin: "5px" }}>
            <strong>Select Department</strong>
          </label>
          <select
            onChange={(e) => setSelectedDepartment(e.target.value)}
            style={{ width: "60%" }}
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept._id} value={dept.deptName}>
                {dept.deptName}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="number" style={{ width: "150px", margin: "5px" }}>
            <strong>Employee Number</strong>
          </label>
          <input
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="number" style={{ width: "150px", margin: "5px" }}>
            <strong>Age</strong>
          </label>
          <input
            type="number"
            name="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="description"
            style={{ width: "150px", margin: "5px" }}
          >
            <strong>Profile Description</strong>
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "60%" }}
          ></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="image" style={{ width: "150px", margin: "5px" }}>
            <strong>Profile Image</strong>
          </label>
          <input
            type="file"
            onChange={(e) => setHeadImage(e.target.files[0])}
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#3ba9a9",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeptHeadForm;
