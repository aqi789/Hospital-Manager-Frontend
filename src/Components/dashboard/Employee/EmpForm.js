import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashbboardNav from "../DashbboardNav";
import Sidebar from "../Sidebar";

const EmpForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [empImage, setEmpImage] = useState(null);
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [report, setReport] = useState([]);
  const [selectedReport, setSelectedReport] = useState("");

  useEffect(() => {
    fetchDepartments();
    fetchReports();
  }, []);

  const fetchDepartments = () => {
    axios
      .get("http://localhost:3001/getDept")
      .then((res) => {
        setDepartment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchReports = () => {
    axios
      .get("http://localhost:3001/getHead")
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("empImage", empImage);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("number", number);
    formData.append("description", description);
    formData.append("department", selectedDepartment);
    formData.append("report", selectedReport);

    axios
      .post("http://localhost:3001/empPost", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard/empCard");
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
          <label htmlFor="number" style={{ width: "150px", margin: "5px" }}>
            <strong>Employee Number</strong>
          </label>
          <input
            type="number"
            name="number"
            style={{ width: "60%" }}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="age" style={{ width: "150px", margin: "5px" }}>
            <strong>Age</strong>
          </label>
          <input
            type="number"
            style={{ width: "60%" }}
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
            style={{ width: "60%" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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
            {department.map((dept) => (
              <option key={dept._id} value={dept.deptName}>
                {dept.deptName}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="report" style={{ width: "150px", margin: "5px" }}>
            <strong>Report to</strong>
          </label>
          <select
            onChange={(e) => setSelectedReport(e.target.value)}
            style={{ width: "60%" }}
          >
            <option value="">Select Report</option>
            {report.map((rep) => (
              <option key={rep._id} value={rep.name}>
                {rep.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="image" style={{ width: "150px", margin: "5px" }}>
            <strong>Profile Image</strong>
          </label>
          <input
            type="file"
            style={{ width: "60%" }}
            onChange={(e) => setEmpImage(e.target.files[0])}
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

export default EmpForm;
