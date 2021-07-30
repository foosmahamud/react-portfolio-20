import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
    <Container fluid>
      <Nav/>
      <Row>
        <Col size="md-6">
          <h1>Contact Me</h1>
        </Col>
      </Row>

      <Row><a href="https://docs.google.com/document/d/1qY4n1cTFX1nZKDsVuPAv2g_1tAz4zfEelXHrS-9hX3c/export?format=pdf"> click here to download my resume</a></Row>
      <Footer/>
    </Container>
    </div>
  );
};

export default Home;
