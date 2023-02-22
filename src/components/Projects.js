import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCard1";
import { ProjectCard2 } from "./ProjectCard2";
import projImg1 from "../assets/projectImages/Vampfi.jpg";
import projImg2 from "../assets/projectImages/Globattle.jpg";
import projImg3 from "../assets/projectImages/arcromride.jpg";
import projImg4 from "../assets/projectImages/1.jpg";
import projImg5 from "../assets/projectImages/2.jpg";
import projImg6 from "../assets/projectImages/4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const softwareProjects = [
    {
      title: "Vamp Facility Intelligence Website",
      description: "Front End Development and Design",
      imgUrl: projImg1,
    },
    {
      title: "Glo Dance Battle Of The Year Website",
      description: "Front End Development and Design",
      imgUrl: projImg2,
    },
    {
      title: "Arcromride App",
      description: "Mobile App Development",
      imgUrl: projImg3,
    },
  ];

  const contentProjects = [
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Over the years, I've worked on several projects ranging from software development projects,
                 all the way to content creation, and even Microwave telecoms projects.
                 Below are a list of some of the notable ones I've done. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Content Creation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          softwareProjects.map((project, index) => {
                            return (
                              <ProjectCard1
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          contentProjects.map((project1, index1) => {
                            return (
                              <ProjectCard2
                                key={index1}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Project listings coming soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
