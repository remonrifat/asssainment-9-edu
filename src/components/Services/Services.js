import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";

const Services = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="services-page">
      <Container>
        <div className="py-5">
          <h1 className="text-center fw-bold text-light"> COURSES</h1>
        </div>
        <div className="services-card-container py-5">
          {items.map((item) => (
            <ServicesCard key={item.id} item={item}></ServicesCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
