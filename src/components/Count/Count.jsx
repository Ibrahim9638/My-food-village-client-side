import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Count = () => {
  return (
    <div className="pb-3 pt-5 " style={{ backgroundColor: "rgb(255 247 237)" }}>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <div>
            <h1 className="text-center" style={{textShadow:'rgb(240, 0, 0) -1px 1px 1px', fontSize: '53px'}}>20K <small>+</small></h1>
            <h5 className="text-center fw-bold">Our Register Member</h5>
            </div>
          </Col>
          <Col>
          <div>
            <h1 className="text-center" style={{textShadow:'rgb(240, 0, 0) -1px 1px 1px', fontSize: '53px'}}>100K <small>+</small></h1>
            <h5 className="text-center fw-bold">Following Our Food Village</h5>
          </div>
          </Col>
          <Col>
          <div>
            <h1 className="text-center" style={{textShadow:'rgb(240, 0, 0) -1px 1px 1px', fontSize: '53px'}}>30+</h1>
            <h5 className="text-center fw-bold">Master of Chef </h5>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Count;
