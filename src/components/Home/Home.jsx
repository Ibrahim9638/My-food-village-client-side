import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import DeliveryPartner from '../DeliveryPartner/DeliveryPartner';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Chef></Chef>
            <Outlet></Outlet>
            <DeliveryPartner></DeliveryPartner>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;