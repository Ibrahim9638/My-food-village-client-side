import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import banner from '../images/banner.png'

const Banner = () => {
  return (
    <div className="pb-2 pt-2" style={{backgroundColor: "rgb(255 247 237)"}}>
      <Container>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
              <Card.Body>
                <Card.Title>
                    <h1 className=" mt-5 mb-3 fw-bold" 
                    style={{textShadow:'rgb(240, 0, 0) -1px 1px 1px', fontSize: '53px'}}>
                    Fun and Easy 
                    <br /> Join us for  
                    <br /> Master chef cooking
                    </h1> 
                </Card.Title>
                <Card.Text >
                  <p style={{fontSize: "20px"}}>
                  Let join us to become a cooking expert in every kind of <br /> cuisine with a fun way to learn
                  </p>
                </Card.Text>
                <Button variant="dark" size="lg" className="mt-3">Join Us</Button>
              </Card.Body>
            
          </Col>
          <Col>
            <div className="">
            <img className="rounded img-fluid" src={banner} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Banner;
