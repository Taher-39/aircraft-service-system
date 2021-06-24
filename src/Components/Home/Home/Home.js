import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FlightRoutes from '../FlightRoutes/FlightRoutes';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <FlightRoutes></FlightRoutes>
            <Footer></Footer>
        </div>
    );
};

export default Home;