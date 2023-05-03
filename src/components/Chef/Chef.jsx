import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ChefContent from "../ChefContent/ChefContent";


const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:7000/data')
        .then(res => res.json())
        .then(data => setChefs(data))

    },[])
     

  return (
    <div className="pb-2 pt-2 " style={{backgroundColor: "rgb(255 247 237)"}}>
      <Container>
          <h3 className="text-center mt-5 mb-5 fw-bold">
          <span style={{textShadow:'rgb(240, 0, 0) -1px 1px 0px', fontSize: '35px'}}>Our Best Chef in The Food Village</span>
          </h3>
          <Row xs={1} md={2} lg={3} className="g-4">
          {
            chefs.map(chef => <ChefContent
            key = {chef.id}
            chef = {chef}
            ></ChefContent>)
          }
          </Row>
      </Container>
    </div>
  );
};

export default Chef;
