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
          className="text-center fw-bold"
          style={{
            textShadow: "rgb(240, 0, 0) -1px 1px 1px",
            fontSize: "40px",
          }}
        >
          Your Favourite Food <br />
          Delivery Partner
        </h2>
        <Row className="g-4">
          <Col sm={4}>
            <div >
              <img src={delivery1} alt="" style={{height:"220px", width:"260px"}} className="rounded" />
            
              <h4  style={{textShadow:'rgb(240, 0, 0) -1px 1px 0px', fontSize: '25px', marginLeft:"36px", marginTop:"10px"}}>Easy To Order</h4>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <img src={delivery2} alt="" style={{height:"220px", width:"260px"}} className="rounded"/>
              <h4 style={{textShadow:'rgb(240, 0, 0) -1px 1px 0px', fontSize: '25px', marginLeft:"36px", marginTop:"10px"}}>Fastest Delivery</h4>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <img src={delivery3} alt="" style={{height:"220px", width:"260px"}} className="  rounded" />
              <h4 style={{textShadow:'rgb(240, 0, 0) -1px 1px 0px', fontSize: '25px', marginLeft:"36px", marginTop:"10px"}}>Best Quality</h4>
            </div>
          </Col>
        </Row>




        
      </Container>
    </div>
  );
};

export default DeliveryPartner;
