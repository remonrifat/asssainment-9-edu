import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeCard from "../HomeCard/HomeCard";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const fourItems = items.slice(0, 4);
  return (
    <>
      <div className="bg-info py-5">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-cente justify-content-center">
              <h1 className="site-title text-center r">OnlineEdu.com</h1>
            </Col>
            <Col>
              <img
                className="header-image"
                src="https://image.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="card-container">
          {fourItems.map((item) => (
            <HomeCard key={item.id} item={item}></HomeCard>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Home;
