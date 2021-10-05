import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./ServicesCard.css";

const ServicesCard = (props) => {
  const history = useHistory();
  const {
    courseName,
    instructior,
    duration,
    price,
    img,
    trainerIMG,
    include,
    description,
  } = props.item;
  const purchesHandler = () => {
    history.push("/purches");
  };
  return (
    <div>
      <Card className="service-card">
        <Card.Img variant="top" src={img} className="service-card-image" />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text className="d-flex align-items-center">
            <img src={trainerIMG} alt="" className="trainer-image" />
            <p>{instructior}</p>
          </Card.Text>
          <div>
            <Card.Text>PRICE: {price}$</Card.Text>
            <Card.Text>DURATION: {duration}Hrs</Card.Text>
          </div>
          <Card.Text>{description.slice(0, 500)}</Card.Text>
          <br />
          <h4>DEDICATED TO:</h4>
          {include.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </Card.Body>
        <Button
          onClick={purchesHandler}
          variant="info"
          className="w-50 m-auto mb-3 "
        >
          ADD TO CART
        </Button>
      </Card>
    </div>
  );
};

export default ServicesCard;
