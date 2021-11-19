import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import dreamLogo from '../../images/logo.PNG'
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import UseAuth from '../../hooks/UseAuth';


const Navigation = () => {
    const { user, logOut } = UseAuth()
    let navigate = useNavigate()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow sticky-top">
            <Container>
                <NavLink to="/home" className="nav-link">   <img src={dreamLogo} alt="" className="img-fluid" style={{ height: "50px" }} /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" className="nav-link"> <HomeIcon /> Home</NavLink>
                        <NavLink to="/shop" className="nav-link"> <AddShoppingCartIcon /> Shop</NavLink>
                        <NavLink to="/contactus" className="nav-link"> <ContactPageIcon /> Contact Us</NavLink>
                        <NavLink to="/about" className="nav-link"> <InfoIcon /> About Us</NavLink>
                    </Nav>
                    <Nav>
                        <AccountCircleIcon />
                        {user?.email ?
                            <NavDropdown title={<>{<AccountCircleIcon />}{user.displayName}</>} id="collasible-nav-dropdown">

                                <NavLink to="/dashboard" className="dropdown-item"> <DashboardIcon /> Dashboard</NavLink>
                                <Button variant="dropdown-item" onClick={() => {
                                    logOut()
                                    navigate('/', { replace: true });
                                }}> <LogoutIcon /> logout</Button>

                            </NavDropdown>
                            : <NavLink to="/login" className="nav-link"> <VpnKeyIcon /> Login</NavLink>}



                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default Navigation;