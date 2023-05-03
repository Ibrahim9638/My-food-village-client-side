import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    console.log(chefDetails);
    return (
        <div>
            <h2>this is details</h2>
        </div>
    );
};

export default ChefDetails;