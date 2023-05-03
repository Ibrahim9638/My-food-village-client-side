import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefContent = ({ chef }) => {
  const { id, chefName, yearsOfExperience, likes, img_url, numberOfRecipes } =
    chef;

  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img_url} style={{ height: "280px" }} />
        <Card.Body>
          <Card.Title> <b style={{textShadow:'rgb(240, 0, 0) 0px 0px 0px', fontSize: '16px'}}>Name: {chefName}</b></Card.Title>
          <Card.Text>Years of experience: <b>{yearsOfExperience}</b></Card.Text>
          <Card.Text>
            <p className="m-0">Numbers of recipes: <b>{numberOfRecipes}</b></p>
          </Card.Text>
          <Card.Text>
            <p className="m-0">Likes: <b>{likes}</b></p>
          </Card.Text>

          <Link className="btn btn-dark text-white" to={`recipe/ ${id}`}>View Recipes</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefContent;
