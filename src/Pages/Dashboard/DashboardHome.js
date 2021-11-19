import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import MyOrder from './MyOrder';
import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HandymanIcon from '@mui/icons-material/Handyman';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import RateReviewIcon from '@mui/icons-material/RateReview';

const DashboardHome = () => {
    const { isAdmin } = UseAuth();
    return (
        <div>
            {
                isAdmin ? <Container>
                    <h1 className="text-center text-success py-3">Welcome to Admin Dasdhboard</h1>
                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card className="bg-primary admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">

                                        <NavLink to="makeadmin" className="nav-link text-light"> <AdminPanelSettingsOutlinedIcon />    Make Admin</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-success admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">
                                        <NavLink to="addproducts" className="nav-link text-light"> <AddIcon /> Add Product</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-info admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">
                                        <NavLink to="manageproducts" className="nav-link text-light"> <HandymanIcon />Manage Products</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-primary admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">
                                        <NavLink to="manageorders" className="nav-link text-light"> <HandymanIcon />Manage Orders</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-primary admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">
                                        <NavLink to="caruselitem" className="nav-link text-light"> <SlideshowOutlinedIcon /> Add Carusel Item</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-success admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">
                                        <NavLink to="managecarusel" className="nav-link text-light"> <HandymanIcon />Manage Carusel</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-info admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">
                                        <NavLink to="ratings" className="nav-link text-light"><RateReviewIcon />Ratings</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-primary admin-dashboard">

                                <Card.Body>
                                    <Container className="text-center">
                                        <NavLink to="myorder" className="nav-link text-light"> <Shop2OutlinedIcon />My Order</NavLink>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container> : <MyOrder></MyOrder>
            }

        </div>
    );
};

export default DashboardHome;