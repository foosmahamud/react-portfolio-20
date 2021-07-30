import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
    <Container fluid>
      <Nav/>
      <Row>
        <Col size="md-6">
          <h1>About Me</h1>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Home;
