import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Container className="py-5">
        <h1 className="text-center fw-bolder text-light py-5">Contact us</h1>
        <Form>
          <div className="d-flex bg-info ">
            <Form.Group
              className="mb-3 w-100 me-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </div>
          <Form.Group className="mb-3 bg-info " controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
          <Button varient="success">Accept</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
