import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeptUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [department, setDepartment] = useState({
    departmentName: "",
    departmentImage: "",
    departmentYear: null, // Initialize with null instead of an empty string
    departmentDescription: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/getDeptById/${id}`)
        .then((result) => {
          if (result.data) {
            const { deptName, image, deptYear, deptDesc } = result.data;
            setDepartment({
              departmentName: deptName,
              departmentImage: image,
              departmentYear: deptYear,
              departmentDescription: deptDesc,
            });
          } else {
            // Handle case where department data is null
            console.log("Department data is null");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateDept/${id}`, department)
      .then((res) => {
        console.log("updated successfully", res.data);
        navigate("/dashboard/deptCard");
      })
      .catch((err) => {
        console.error("update failed", err);
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
        <h2 style={{ textAlign: "center" }}>Update Department</h2>
      </div>
      <form
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.1)",
          width: "550px",
        }}
        encType="multipart/form-data"
        onSubmit={handleUpdate}
      >
        <div>
          <label
            htmlFor="departmentName"
            style={{ width: "150px", margin: "5px" }}
          >
            <strong>Department Name</strong>
          </label>
          <input
            type="text"
            name="departmentName"
            value={department.departmentName}
            onChange={handleChange}
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="departmentImage"
            style={{ width: "150px", margin: "5px" }}
          >
            <strong>Department Profile Image</strong>
          </label>
          <input
            type="file"
            style={{ width: "60%" }}
            onChange={handleChange}
            name="departmentImage"
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="departmentYear"
            style={{ width: "150px", margin: "5px" }}
          >
            <strong>Year Founded</strong>
          </label>
          <input
            type="number"
            name="departmentYear"
            value={department.departmentYear || ""}
            onChange={handleChange}
            style={{ width: "60%" }}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="departmentDescription"
            style={{ width: "150px", margin: "5px" }}
          >
            <strong>Description</strong>
          </label>
          <textarea
            name="departmentDescription"
            value={department.departmentDescription}
            onChange={handleChange}
            style={{ width: "60%" }}
          ></textarea>
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

export default DeptUpdate;
