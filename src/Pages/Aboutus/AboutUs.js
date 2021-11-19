import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navigation from '../SharedPages/Navigation';
import lesun from '../../images/lesun.jpg'
import momin from '../../images/momin.JPG'
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <div className="about-banner">
                <Navigation />
                <img src="https://image.freepik.com/free-photo/film-projector-dark-background-close-up-old-retro-things-shoot-with-vintage-style-colors-toned_155003-32075.jpg" alt="" className="" />
                <div className="banner-element">
                    <h1>Explore Everything</h1>
                    <NavLink to="/shop" className="btn btn-outline-success px-5">Explore</NavLink>
                </div>

            </div>
            <div className="bg-secondary">
                <h2 className="text-center text-light border-bottom  py-3">Our Team Member</h2>
                <Container className=" py-3">
                    <Carousel controls={false} interval="2000" indicators={false}>

                        <Carousel.Item >
                            <Container className=" text-center p-5">
                                <img src={momin} alt="" className="rounded-circle w-25 img-fluid" />
                                <h3 className="text-light"> Md Mominul Islam</h3>
                                <h4 className="text-light text-opacity-75"> C.E.O at Dream Camara. He is sinour web developer ad Dream Camara. Now studyied cse at Brack  University </h4>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item >
                            <Container className=" text-center p-5">
                                <img src={lesun} alt="" className="rounded-circle w-25 img-fluid" />
                                <h3 className="text-light"> md Lesun Sarkar</h3>
                                <h4 className="text-light text-opacity-75"> Digital Marketing Manager at Dream Camara. He is sinour web developer ad Dream Camara. Now studyied cse at Brack  University </h4>
                            </Container>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;