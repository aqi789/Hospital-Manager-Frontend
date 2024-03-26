import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeptHeadUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [departmentsList, setDepartmentsList] = useState([]);

  useEffect(() => {
    console.log("Department Head ID:", id);
    axios.get(`http://localhost:3001/getDeptHead/${id}`).then((response) => {
      const data = response.data;
      console.log("Department Head Data:", data);
      setName(data.name);
      setNumber(data.number);
      setAge(data.age);
      setImage(data.image);
      setDescription(data.description);
      setDepartment(data.department);
    });
    axios.get("http://localhost:3001/getDepartments").then((response) => {
      setDepartmentsList(response.data);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDeptHead = {
      name,
      number,
      age,
      image,
      description,
      department,
    };

    axios
      .put(`http://localhost:3001/updateDeptHead/${id}`, updatedDeptHead)
      .then((res) => {
        console.log("Department head updated successfully!");
        navigate("/dashboard/deptHeadCard");
      })
      .catch((err) => {
        console.error("Error updating department head: ", err);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#3ba9a9",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Update Department Head</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.1)",
          width: "600px",
        }}
      >
        <div>
          <label htmlFor="name" style={{ width: "150px", margin: "5px" }}>
            <strong>Name</strong>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="department" style={{ width: "150px", margin: "5px" }}>
            <strong>Department</strong>
          </label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            style={{ width: "60%" }}
          >
            <option value="">Select Department</option>
            {departmentsList.map((dept) => (
              <option key={dept._id} value={dept.deptName}>
                {dept.deptName}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="number" style={{ width: "150px", margin: "5px" }}>
            {" "}
            <strong>Number</strong>
          </label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="image" style={{ width: "150px", margin: "5px" }}>
            <strong>Image</strong>
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
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
            Update
          </button>
        </div>{" "}
      </form>
    </div>
  );
};

export default DeptHeadUpdate;
