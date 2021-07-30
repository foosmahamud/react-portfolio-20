import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import Project from "../components/Project";

const Portfolio = () => {

  const myProjects = [
    // 6 best projects
    // 3 group projects
    // 3 of whichever you are most proud of
    {
      title: "Foo's Masterpiece",
      image: "https://via.placeholder.com/150",
      tech: "HTML, CSS, JS, Bootstrap",
      github: "https://github.com/foosmahamud/Sequelize-Homework-14",
      liveapp: "https://frozen-cliffs-96798.herokuapp.com/",
    },
    {
      title: "Project 2",
      image: "https://via.placeholder.com/150",
      tech: "HTML, CSS, JS, Mysql",
      github: "https://github.com/Jrubio1995/Fairweather-Adventures",
      liveapp: "https://frozen-cliffs-96798.herokuapp.com/",
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/150",
      tech: "HTML, CSS, JS, Mongo, React",
      github: "https://github.com/foosmahamud/GoodREADMEGeneratorHomework9",
      liveapp: "https://frozen-cliffs-96798.herokuapp.com/",
    },
    {
      title: "Project 4",
      image: "https://via.placeholder.com/150",
      tech: "HTML, CSS, JS, Bootstrap",
      github: "https://github.com/foosmahamud/burgers-homework-13",
      liveapp: "https://frozen-cliffs-96798.herokuapp.com/",
    },
    {
      title: "Project 5",
      image: "https://via.placeholder.com/150",
      tech: "HTML, CSS, JS, Bootstrap",
      github: "https://github.com/whackingMUFN/Jasmine-RPG",
      liveapp: "https://frozen-cliffs-96798.herokuapp.com/",
    },
    {
      title: "Project 6",
      image: "https://via.placeholder.com/150",
      tech: "HTML, CSS, JS, Bootstrap",
      github: "https://github.com/foosmahamud/Nosql-Homework-17-",
      liveapp: "https://frozen-cliffs-96798.herokuapp.com/",
    }
  ];

  // loop over all 6 projects
  // for each project, render the project component
  // pass the project info down via props to the project component
  return (
    <div>
    <Container fluid>
      <Nav/>
      <Row>
        <Col size="md-12" className="text-center">
          <h1>Portfolio</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          {myProjects.map(project => (
            <Project
              title={project.title}
              image={project.image}
              tech={project.tech}
              github={project.github}
              liveapp={project.liveapp}
            />
          ))}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Portfolio;
