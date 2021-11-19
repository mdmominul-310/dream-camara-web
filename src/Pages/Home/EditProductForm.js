import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import SuccessModal from '../SharedPages/SuccessModal';

const EditProductForm = (props) => {
    const defaultItem = props.updateItem;
    console.log(defaultItem)


    const [productData, setProductData] = useState({});
    const [modalShow, setModalShow] = React.useState(false);

    const handleProductData = (e) => {
        const newProductData = { ...defaultItem }
        const field = e.target.name;
        const value = e.target.value;
        //crate data object
        newProductData._id = props.updateItem._id;
        newProductData[field] = value;


        console.log(newProductData)
        //set product data
        setProductData(newProductData)
        console.log(newProductData)

    }

    const hanldeUpdateProduct = (e) => {

        fetch('https://shielded-citadel-89476.herokuapp.com/updateproduct', {
            method: "put",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setModalShow(true);
                }
                else {
                    return <p>Please wait...........</p>
                }
            })
            .catch(error => console.log(error))
        setProductData({})
        e.preventDefault()
        props.formHandleClose()
    }
    return (
        <> <Modal
            show={props.formShow}
            onHide={props.formHandleClose}
            backdrop="static"
            keyboard={false}
            style={{ zIndex: "10000000000000000000000000000000000000000000" }}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Your Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="shadow p-5" onSubmit={hanldeUpdateProduct} >
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Products Title</Form.Label>
                        <Form.Control type="text" name="title" onBlur={handleProductData} placeholder="Enter Your Products Title" defaultValue={props.updateItem.title} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label> Image url</Form.Label>
                        <Form.Control type="text" name="imgUrl" onChange={handleProductData} placeholder="Enter your image live url" defaultValue={props.updateItem.imgUrl} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" onBlur={handleProductData} name="price" placeholder="Price" defaultValue={props.updateItem.price} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" name="description" onBlur={handleProductData} rows={3} defaultValue={props.updateItem.description} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="submit" value="Submit" className="p-3 bg-success text-light"  ></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>

        </Modal>
            < SuccessModal
                show={modalShow}
                onHide={() => {
                    window.location.reload()
                    setModalShow(false)
                }
                }
            />
        </>
    );
};

export default EditProductForm;