import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefContent = ({ chef }) => {
  const { id, chefName, yearsOfExperience, numberOfRecipes, likes, img_url } =
    chef;

  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img_url} style={{ height: "280px" }} />
        <Card.Body>
          <Card.Title>Name: {chefName}</Card.Title>
          <Card.Text>Years of experience: {yearsOfExperience}</Card.Text>
          <Card.Text>
            <p className="m-0">Numbers of recipes: {yearsOfExperience}</p>
          </Card.Text>
          <Link className="btn btn-dark text-white" to={`recipe/ ${id}`}>View Recipes</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefContent;
