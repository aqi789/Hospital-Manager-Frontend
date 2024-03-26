import React from "react";
import logo from "../../assets/images/Logo.png";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#3ba9a9" }}>
        <Container fluid>
          <Row className=" text-white p-4">
            <Col className="mx-5">
              <Stack>
                <Image
                  src={logo}
                  alt="logo"
                  style={{ width: "100px", margin: "0 auto" }}
                />
                <h4 style={{ textAlign: "center", margin: "5px" }}>Medicare</h4>
              </Stack>
            </Col>
            <Col>
              <Nav className="flex-column fx-5">
                <NavLink href="/" className="text-white">
                  Home
                </NavLink>
                <NavLink href="#about" className="text-white">
                  About
                </NavLink>
                <NavLink href="#departments" className="text-white">
                  Departments
                </NavLink>
              </Nav>
            </Col>
            <Col>
              123 Street,
              <br />
              New Zealand
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
