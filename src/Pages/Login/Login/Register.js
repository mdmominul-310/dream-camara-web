import React, { useState } from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navigation from '../../SharedPages/Navigation';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import UseAuth from '../../../hooks/UseAuth';
import SuccessModal from '../../SharedPages/SuccessModal';

const Register = () => {
    const [regData, setRegData] = useState({})
    const [passError, setPassError] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    let navigate = useNavigate()

    const { createUserWithEmail, signInWithGoogle, signInWithFacebook, user } = UseAuth();
    if (user?.email) {
        navigate('/shop', { replace: true });
    }

    //collect reg data
    const handleRegData = (e) => {
        const newRegData = { ...regData }
        const field = e.target.name;
        const value = e.target.value;

        newRegData[field] = value;
        setRegData(newRegData)

        //error message for pass not matched
        if (newRegData.password !== newRegData.confirmPassword) {
            setPassError(true)
        }
        else {
            setPassError(false)
        }
    }
    //handle registration new
    const handleReg = (e) => {
        const email = regData.email;
        const password = regData.password;
        const name = regData.name;
        const confirmPassword = regData.confirmPassword;
        if (password === confirmPassword) {
            createUserWithEmail(email, password, name);
            if (user) {
                setModalShow(true)
                setRegData({})
                e.target.reset()
            }

        }

        e.preventDefault()

    }
    //handle sign in with google 
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook();
    }


    return (
        <div className="login-form">
            <Navigation />
            <Container>
                <Container className="bg-dark p-5 my-5 shadow w-50">
                    <h2 className="text-light text-opacity-75 text-center mb-5"> <span> <LockOpenIcon /> </span>Please Register</h2>
                    <Form onSubmit={handleReg}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your Name"
                            className="mb-3 text-light text-opacity-75"
                        >
                            <Form.Control type="text" placeholder="Your Name" name="name" className=" bg-dark text-light text-opacity-75" onBlur={handleRegData} required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3 text-light text-opacity-75"
                        >
                            <Form.Control type="email" placeholder="name@example.com" name="email" className=" bg-dark text-light text-opacity-75" onBlur={handleRegData} required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="  text-light text-opacity-75 mb-3">
                            <Form.Control type="password" placeholder="Password" name="password" className="bg-dark text-light" onChange={handleRegData} required />
                        </FloatingLabel>
                        <FloatingLabel label="Confirm Password" className="  text-light text-opacity-75">
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" className="bg-dark text-light" onChange={handleRegData} required />
                        </FloatingLabel>
                        {passError && <p className="text-danger">Confirm password not matched!</p>}
                        <Form.Control type="submit" value="Submit" className="btn btn-outline-secondary text-light text-opacity-75  my-3" />

                        <Container className="d-flex justify-content-center">
                            <Button variant="outline-secondary" className="text-light text-opacity-75 me-3" onClick={handleGoogleSignIn}> <GoogleIcon /> Google Login</Button>
                            <Button variant="outline-secondary" className="text-light text-opacity-75" onClick={handleFacebookSignIn}><FacebookIcon /> Facebook Login</Button>
                        </Container>
                    </Form>
                    <NavLink to="/login" className="nav-link">Already Register?Please Login</NavLink>
                </Container>
            </Container>
            <SuccessModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Footer />
        </div>
    );
};

export default Register;