import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import "./bar.css";
import { IoPerson } from "react-icons/io5";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { FaPersonCircleCheck } from "react-icons/fa6";

const DashboardNav = () => {
  const handleLogout = () => {
    alert("Are you sure you want to logout?");
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          width: "100%",
          backgroundColor: "#f1f1f1",
          position: "fixed",
          zIndex: "1000",
        }}
      >
        <Container>
          <div>
            <Navbar.Brand href="/dashboard">
              <img src={logo} alt="logo" style={{ width: "50px" }} />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/dashboard/empCard" style={{ color: "black" }}>
                  <IoPerson style={{ margin: "2px" }} />
                  EMPLOYEE
                </Nav.Link>
                <Nav.Link href="/dashboard/deptCard" style={{ color: "black" }}>
                  <HiMiniBuildingOffice style={{ margin: "2px" }} />
                  DEPARTMENT
                </Nav.Link>
                <Nav.Link
                  href="/dashboard/deptHeadCard"
                  style={{ color: "black" }}
                >
                  <FaPersonCircleCheck style={{ margin: "2px" }} />
                  DEPARTMENT HEAD{" "}
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
              </Nav>
              <div>
                <Link to={"/login"}>
                  <Button
                    variant="button"
                    className="logoutButton"
                    style={{ border: "1px solid black" }}
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </Button>
                </Link>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default DashboardNav;
