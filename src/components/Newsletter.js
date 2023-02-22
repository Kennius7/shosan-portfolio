import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="btn btn-light w-100">
          <Row className="d-flex align-items-center my-4">
            <Col lg={12} md={6} xl={5} sm={12} className="my-4">
              <h3>Subscribe to our Newsletter<br></br> & never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col lg={12} md={6} xl={5} className="my-4">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                  <input className="rounded-2 border border-3 border-info w-75" value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit" className="btn round-3 btn-info w-50 mx-2">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
