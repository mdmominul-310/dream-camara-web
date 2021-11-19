import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { title, imgUrl, price, description, _id } = props.product;
    return (
        <Col>
            <Card bg="dark" text="light" className="shadow p-3 h-100 text-opacity-75">
                <Card.Header>
                    <Card.Img variant="top" src={imgUrl} className="img-fluid shadow" />
                </Card.Header>

                <Card.Body  >
                    <Card.Title className="text-center text-success"> {title.toUpperCase()} </Card.Title>
                    <Card.Text className="text-justify">
                        {description.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between shadow">
                    <h5> <span> <AttachMoneyIcon /></span>{price} </h5>  <NavLink to={`/buynow/${_id}`} className="btn btn-outline-light"> Buy Now</NavLink>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;