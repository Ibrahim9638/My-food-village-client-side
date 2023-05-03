import React from "react";
import { Card, Container } from "react-bootstrap";

const SingleChef = ({ singleChef }) => {
  console.log(singleChef);
  return (
    <div>
      <Container>
        <Card style={{width:"400px", margin:"auto"}}>
          <Card.Img variant="top" src={singleChef.img_url} style={{ height: "150px", width:"280px", margin:"4px auto" }} />
          
          <Card.Body className="text-start">
            <Card.Title>Name: {singleChef.chef_name}</Card.Title>
            <Card.Text>
              <b>Description:</b> <span>{singleChef.description.slice(0,200)}</span>...
            </Card.Text>
            <Card.Text>
              <b>Likes: {singleChef.likes}</b>
            </Card.Text>
            <Card.Text>
              <b>Experience: {singleChef.yearsOfExperience}</b>
            </Card.Text>
        
            <Card.Text>
              <b>Recipes: {singleChef.numberOfRecipes}</b>
            </Card.Text>

            <Card.Text>
              <b>Show the recipe:</b>
              <p><b>Recipe Name: {singleChef.recipe_name}</b></p>
              <p><b>Ingredients:</b> {singleChef.ingredients}</p>
            </Card.Text>

          </Card.Body>
          
          
        </Card>
        
      </Container>
    </div>
  );
};

export default SingleChef;
