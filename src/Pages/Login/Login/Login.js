import React, { useState } from 'react';
import { FloatingLabel, Form, Container, Button } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Navigation from '../../SharedPages/Navigation';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import UseAuth from '../../../hooks/UseAuth';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({})
    const [passError, setPassError] = useState(false)
    const { signInWithEmail, signInWithGoogle, signInWithFacebook, user } = UseAuth();
    const location = useLocation();
    let navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    if (user?.email) {
        navigate(from, { replace: true });
    }
    const loginData = (e) => {
        const newLoginInfo = { ...loginInfo }
        const field = e.target.name;
        const value = e.target.value;
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo)
        if (newLoginInfo.password !== newLoginInfo.confirmPassword) {
            setPassError(true)
        }
        else {
            setPassError(false)
        }
    }
    //sign in with password and email
    const handleLogin = (e) => {
        const email = loginInfo.email;
        const pass = loginInfo.password;
        const confirmPass = loginInfo.confirmPassword;

        if (pass === confirmPass) {
            signInWithEmail(email, pass, from);
            e.target.reset();
            setLoginInfo({});
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
                    <h2 className="text-light text-opacity-75 text-center mb-5"> <span> <VpnKeyIcon /> </span>Please Login</h2>
                    <Form onSubmit={handleLogin}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3 text-light text-opacity-75"
                        >
                            <Form.Control type="email" placeholder="name@example.com" name="email" className=" bg-dark text-light text-opacity-75" onBlur={loginData} required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="  text-light text-opacity-75 mb-3">
                            <Form.Control type="password" placeholder="Password" name="password" className="bg-dark text-light" required onChange={loginData} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="  text-light text-opacity-75">
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" className="bg-dark text-light" onChange={loginData} required />
                        </FloatingLabel>
                        {passError && <p className="text-danger"> password doesn't match</p>}
                        <Form.Control type="submit" value="Submit" className="btn btn-outline-secondary text-light text-opacity-75  my-3" />

                        <Container className="d-flex justify-content-center">
                            <Button variant="outline-secondary" className="text-light text-opacity-75 me-3" onClick={handleGoogleSignIn}> <GoogleIcon /> Google Login</Button>
                            <Button variant="outline-secondary" className="text-light text-opacity-75" onClick={handleFacebookSignIn}><FacebookIcon /> Facebook Login</Button>
                        </Container>
                    </Form>
                    <NavLink to="/register" className="nav-link">Aren't you registred?Click to register</NavLink>
                </Container>
            </Container>
            <Footer />
        </div>
    );
};

export default Login;