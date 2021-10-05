import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  const { courseName, instructior, duration, price, img } = props.item;
  return (
    <Card style={{ width: "75%" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <hr />
        <div className="d-flex justify-content-between my-3">
          <Card.Text className="fw-bold">Instractor: {instructior}</Card.Text>
          <Card.Text> Duration: {duration}Hrs</Card.Text>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <Card.Text>Price: {price}</Card.Text>
          <Link to="/services">
            <Button variant="primary">Wanna ?</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
