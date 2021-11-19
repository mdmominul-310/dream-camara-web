import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import logo from '../../images/logo.PNG'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark shadow">
            <Container className="py-5">
                <Row sm={1} mg={2} lg={3}>
                    <Col>
                        <ul className="text-light text-opacity-75" style={{ listStyleType: "none" }} >
                            <li>  <img src={logo} alt="" style={{ width: "200px" }} className="mb-3" /> Camara </li>
                            <li> <span><LocationOnIcon /></span> Bir Uzali Bazar,Kapasia,Gazipur </li>
                            <li className="my-3"> <span><EmailIcon /></span>admin@developer-bd.com </li>
                            <li> <span><CallIcon /></span> +8801704003819( Emergency:01715224754) </li>
                        </ul>
                    </Col>
                    <Col>
                        <NavLink to="/aboutus" className="footer-nav" >About Us</NavLink>
                        <NavLink to="/shop" className="footer-nav" >Shop Camara</NavLink>
                        <NavLink to="/contactus" className="footer-nav" >Contact Us</NavLink>
                        <NavLink to="/home" className="footer-nav" >Home</NavLink>
                        <NavLink to="/login" className="footer-nav" >Login</NavLink>
                        <NavLink to="/register" className="footer-nav" >Sign Up</NavLink>
                    </Col>
                    <Col>
                        <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="pay" />
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3 footer-bg text-light text-opacity-75 shadow-lg">
                <p  >copyright &copy; 2021 dream camara.com</p>
            </div>

        </div >
    );
};

export default Footer;