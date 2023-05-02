import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;