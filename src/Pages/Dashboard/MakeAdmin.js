import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import SuccessModal from '../SharedPages/SuccessModal';

const MakeAdmin = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [email, setEmail] = useState("")
    console.log(email)
    const handleEmail = (e) => {
        const eamil = e.target.value;
        setEmail(eamil)
    }
    const handleMakeAdmin = (e) => {
        console.log(email)
        fetch(`https://shielded-citadel-89476.herokuapp.com/makeadmin?email=${email}`, {
            method: "put",
            headers: {
                "Content-Type": "application/josn"
            },
            body: JSON.stringify(email)
        })
            .then(result => {
                if (result) {
                    setModalShow(true)
                    e.target.reset()
                }
            })
        e.preventDefault()

    }
    return (
        <Container className="w-50 my-5">
            <Form className="shadow p-5" onSubmit={handleMakeAdmin} >
                <h2 className="text-center  p-3">Make a Admin</h2>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" name="title" onChange={handleEmail} placeholder="Enter admin gmail.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="submit" value="Submit" className="p-3 bg-success text-light"  ></Form.Control>
                </Form.Group>
            </Form>
            <SuccessModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


        </Container >
    );
};

export default MakeAdmin;