import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/shosan-acodemia-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="d-flex flex-row justify-content-center align-items-center">
            <img src={logo} alt="Logo" style={{width: "100px", height: "100px"}} />
            <div className="text-white mx-4">Shosan Acodemia</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kenny-ogbogu-b6710137"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com.Kennius7"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
