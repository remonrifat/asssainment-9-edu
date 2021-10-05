import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-page py-5">
      <Container>
        <h1 className="text-center fw-bolder text-light py-5">About</h1>
        <Row className="about-section">
          <Col className="text-secondary left-part">
            <h3>Our values</h3>
            <div>
              <h4 className="text-light fw-bold">We are Social Learners</h4>
              <p>
                We learn together. We empower and inspire our learners, our
                partners, and ourselves to develop through the power of lifelong
                learning.
              </p>
            </div>
            <div>
              <h4 className="text-light fw-bold">We are Transformative</h4>
              <p>
                We see no limits to what we can achieve by harnessing our
                individual and collective strengths. We are changing the world
                with our ideas, insights, and unique perspectives.
              </p>
            </div>
            <div>
              <h4 className="text-light fw-bold">We are Experimental</h4>
              <p>
                Our innovation is led by data, curiosity and the occasional
                happy accident. We create an uplifting environment where we
                learn from our failures and celebrate our success.
              </p>
            </div>
            <div>
              <h4 className="text-light fw-bold">We are Purposeful</h4>
              <p>
                We work hard to succeed because we’re so invested in our shared
                purpose. As we grow, so does our opportunity to make a long term
                difference to the lives of millions around the world.
              </p>
            </div>
            <div>
              <h4 className="text-light fw-bold">We are Social Learners</h4>
              <p>
                We learn together. We empower and inspire our learners, our
                partners, and ourselves to develop through the power of lifelong
                learning.
              </p>
            </div>
            <div>
              <h4 className="text-light fw-bold">We are Social Learners</h4>
              <p>
                We learn together. We empower and inspire our learners, our
                partners, and ourselves to develop through the power of lifelong
                learning.
              </p>
            </div>
          </Col>
          <Col className="right-part">
            <img
              src="https://image.freepik.com/free-vector/about-us-website-banner-concept-with-thin-line-flat-design_56103-96.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
