import React from 'react';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import Navigation from '../SharedPages/Navigation';
import Carusel from './Carusel/Carusel';
import Map from './Map';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Carusel></Carusel>
            <Products />
            <Review />
            <Map />
            <Footer></Footer>
        </div>
    );
};

export default Home;