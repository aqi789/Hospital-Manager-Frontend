import React from "react";
import { IoPersonAdd } from "react-icons/io5";
import { BsBuildingFillAdd } from "react-icons/bs";
import { FaPersonCirclePlus } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <div
        style={{
          margin: "0",
          padding: "0",
          height: "100%",
          width: "200px",
          backgroundColor: "#f1f1f1",
          position: "fixed",
          overflow: "auto",
          boxShadow: "8px 8px 18px rgb(56,54,54)",
          marginTop: "66px",
        }}
      >
        <a
          style={{
            boxShadow: "18px 8px 18px #ddd",
            color: "black",
            padding: "16px",
            textDecoration: "none",
            display: "flex",
          }}
          className="active"
          href="/dashboard/employee"
        >
          <IoPersonAdd style={{ margin: "2px" }} />
          <h6>ADD EMPLOYEE</h6>
        </a>

        <a
          style={{
            boxShadow: "18px 8px 18px #ddd",
            color: "black",
            padding: "16px",
            textDecoration: "none",
            display: "flex",
          }}
          className="active"
          href="/dashboard/department"
        >
          <BsBuildingFillAdd style={{ margin: "2px" }} />
          <h6>ADD DEPARTMENT</h6>
        </a>

        <a
          style={{
            boxShadow: "18px 8px 18px #ddd",
            color: "black",
            padding: "16px",
            textDecoration: "none",
            display: "flex",
          }}
          className="active"
          href="/dashboard/deptHead"
        >
          <FaPersonCirclePlus style={{ margin: "2px" }} />
          <h6>ADD DEPARTMENT HEAD</h6>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
