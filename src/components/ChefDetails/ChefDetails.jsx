import React from "react";
import { useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SingleChef from "../SingleChef/SingleChef";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  return (
    <div style={{ backgroundColor: "rgb(255 247 237)" }} className="text-center">
      <NavBar></NavBar>
      <div className="mt-5 mb-5">
        <h2 className="text-center" style={{textShadow:'rgb(240, 0, 0) -1px 1px 1px', fontSize: '45px'}}>Chef Recipes</h2>

        <div className="mt-3">
            {
                chefDetails.map(singleChef => <SingleChef
                key={singleChef.id}
                singleChef = {singleChef}
                >

                </SingleChef>)
            }
        </div>
      </div>


      <Footer></Footer>
    </div>
  );
};

export default ChefDetails;
