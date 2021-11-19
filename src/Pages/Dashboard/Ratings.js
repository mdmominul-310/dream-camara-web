import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import UseAuth from '../../hooks/UseAuth';
import SuccessModal from '../SharedPages/SuccessModal';

const Ratings = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { user } = UseAuth()
    const [rateItem, setRateItem] = useState({})
    const handleRate = (e) => {
        const newRate = { ...rateItem }
        const rateNumber = e.target.value;
        const field = e.target.name;
        newRate[field] = rateNumber;
        newRate.name = user.displayName;
        setRateItem(newRate)

    }
    const handleRatingSubmit = (e) => {

        fetch('https://shielded-citadel-89476.herokuapp.com/rate', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(rateItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setModalShow(true)
                    e.target.reset()
                    setRateItem({})
                }
            })

        e.preventDefault();
    }
    return (
        <Container className="w-50 my-5">

            <Form className="shadow p-5" onSubmit={handleRatingSubmit} >
                <h2 className="text-center">Please Enter your rating</h2>
                <Stack spacing={1} className="d-flex justify-content-center align-items-center mb-3">
                    <Rating name="rating" defaultValue={0} precision={0.5} onChange={handleRate} />
                </Stack>
                <Form.Group>
                    <Form.Control as="textarea" rows={3} placeholder="please Comment Something" name="comment" onChange={handleRate} ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="submit" value="Submit" className="p-3 bg-success text-light mt-3"  ></Form.Control>
                </Form.Group>
            </Form>
            <SuccessModal
                show={modalShow}
                onHide={() => {

                    setModalShow(false)
                }}
            >

            </SuccessModal>
        </Container>


    );
};

export default Ratings;