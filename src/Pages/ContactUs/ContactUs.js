import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../SharedPages/Navigation';
import send from '../../images/send.png'
import SendIcon from '@mui/icons-material/Send';


const ContactUs = () => {
    return (
        <div>
            <Navigation>
            </Navigation>
            <div className="about-bg">

                <Container className="w-75 py-5" >
                    <Container className="py-2">
                        <Container className="py-3 d-flex justify-content-center align-items-center">
                            <img src={send} alt="" />
                            <h1 className="text-center">Get in<span className="text-success"> Touch With us! </span></h1>
                        </Container>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="01712345678" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                            </Form.Group>
                            <Button variant="outline-success float-end p-3"> <SendIcon /> Send Message </Button>
                        </Form>
                    </Container>
                </Container>
                <Footer />
            </div>
        </div >
    );
};

export default ContactUs;