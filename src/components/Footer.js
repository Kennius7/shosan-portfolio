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
            <img src={logo} alt="Logo"  />
            <div className="text-white mx-3">Powered by Shosan Acodemia</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end align-items-center">
            
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kenny-ogbogu-b6710137"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Kennius7"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
