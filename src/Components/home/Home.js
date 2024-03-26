import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../assets/images/Logo.png";
import home from "../../assets/images/home.avif";
import { Link } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar
          style={{ backgroundColor: "#3ba9a9", width: "100%" }}
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <div>
              <Navbar.Brand href="/home">
                <img src={logo} alt="logo" style={{ width: "50px" }} />
              </Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginRight: "25px" }}>
                    <Nav className="">
                      <Nav.Link
                        href="/"
                        style={{ color: "white", margin: "10px !important" }}
                      >
                        HOME
                      </Nav.Link>
                      <Nav.Link
                        href="#about"
                        style={{ color: "white", margin: "10px !important" }}
                      >
                        ABOUT
                      </Nav.Link>
                      <Nav.Link
                        href="#departments"
                        style={{ color: "white", margin: "10px !important" }}
                      >
                        DEPARTMENTS
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div>
                    <Link to={"/signup"}>
                      <Button
                        variant="outline-white"
                        style={{
                          color: "white",
                          margin: "10px !important",
                          border: "1px solid white",
                        }}
                      >
                        LOGIN
                      </Button>
                    </Link>
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className="parallax-container">
        <img src={home} style={{ width: "100%" }} alt="img" />
      </div>

      <section id="about">
        <About />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
