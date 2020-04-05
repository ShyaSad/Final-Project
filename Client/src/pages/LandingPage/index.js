// our contact info
import React from "react";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import Logo from "../../assets/aa-away-logo.svg";
import { Button } from "reactstrap";
import "./Landing.css";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Container className="land-cont">
        <Row className="justify-content-md-center">
          <Col className="colApp">
            <h1 className="appName-leftSide">Let's Meet</h1>
          </Col>
          <div className="position">
            <Col md="auto" className="logoIcon">
              <img src={Logo} id="logo" alt='AA Away Logo' />
            </Col>
          </div>
          <Col className="colApp">
            <h1 className="appName">Anywhere</h1>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <h3 className="appIntro">Have your AA meetings on the go</h3>
        </Row>

        <Row className="justify-content-md-center">
          <Button as="input" type="submit" value="Find Meeting" />{" "}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
