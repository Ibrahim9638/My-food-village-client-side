import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import delivery1 from "../images/delivery-1.jpg";
import delivery2 from "../images/delivery-2.jpg";
import delivery3 from "../images/delivery-3.jpg";

const DeliveryPartner = () => {
  return (
    <div className="pb-5 pt-5" style={{ backgroundColor: "rgb(255 247 237)" }}>
      <Container>
        <h2
          className="text-center fw-bold mb-4"
          style={{
            textShadow: "rgb(240, 0, 0) -1px 1px 1px",
            fontSize: "40px",
          }}
        >
          Your Favourite Food <br />
          Delivery Partner
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card className="h-75">
              <Card.Img variant="top" src={delivery1} className="h-75 " />
            </Card>
            <h4
              style={{
                textShadow: "rgb(240, 0, 0) -1px 1px 0px",
                fontSize: "30px",
              }}
              className="text-center mt-3"
            >
              Easy To Order
            </h4>
          </Col>
          <Col>
            <Card className="h-75">
              <Card.Img variant="top" src={delivery2} className="h-75 text-center" />
            </Card>
            <h4
              style={{
                textShadow: "rgb(240, 0, 0) -1px 1px 0px",
                fontSize: "30px",
              }}
              className="text-center mt-3"
            >
              Fastest Delivery
            </h4>
          </Col>
          <Col>
            <Card className="h-75">
              <Card.Img variant="top" src={delivery3} className="h-100 text-center" />
            </Card>
            <h4
              style={{
                textShadow: "rgb(240, 0, 0) -1px 1px 0px",
                fontSize: "25px",
              }}
              className="text-center mt-3"
            >
              Best Quality
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeliveryPartner;
