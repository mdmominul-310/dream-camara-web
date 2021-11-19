import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Rating from '@mui/material/Rating';



const Review = () => {

    const [rating, setRating] = useState();
    useEffect(() => {
        fetch('https://shielded-citadel-89476.herokuapp.com/rate')
            .then(res => res.json())
            .then(data => setRating(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="bg-review">
            <h2 className="text-success text-center border-bottom py-3">Happy Client Says</h2>
            <Container className=" py-3">
                <Carousel controls={false} interval="2000" indicators={false}>
                    {
                        rating?.slice(0, 10).map(rate => <Carousel.Item key={rate._id} >
                            <Container className=" text-center p-5">
                                <h3 className="text-success">{rate.name}</h3>
                                <h4 className="text-light text-opacity-75">{rate.comment}</h4>
                                <Rating name="read-only" value={parseInt(rate.rating)} readOnly />

                            </Container>

                        </Carousel.Item>)
                    }





                </Carousel>
            </Container>
        </div>
    );
};

export default Review;