import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import SuccessModal from '../SharedPages/SuccessModal';

const AddProducts = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [productData, setProductData] = useState({});
    const handleProductData = (e) => {
        const newProductData = { ...productData }
        const field = e.target.name;
        const value = e.target.value;
        //crate data object
        newProductData[field] = value;

        //set product data
        setProductData(newProductData)


    }

    const handleAddProducts = (e) => {

        fetch('https://shielded-citadel-89476.herokuapp.com/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setModalShow(true);
                    setProductData("");
                    e.target.reset();
                }
            })
            .catch(error => console.log(error))

        e.preventDefault();

    }
    return (
        <Container className="w-50 my-5">
            <Form className="shadow p-5" onSubmit={handleAddProducts} >
                <h2 className="text-center  p-3">Add a new Product</h2>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Products Title</Form.Label>
                    <Form.Control type="text" name="title" onBlur={handleProductData} placeholder="Enter Your Products Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label> Image url</Form.Label>
                    <Form.Control type="text" name="imgUrl" onBlur={handleProductData} placeholder="Enter your image live url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" onBlur={handleProductData} name="price" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control as="textarea" name="description" onBlur={handleProductData} rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="submit" value="Submit" className="p-3 bg-success text-light"  ></Form.Control>
                </Form.Group>
            </Form>
            <SuccessModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


        </Container>
    );
};

export default AddProducts;