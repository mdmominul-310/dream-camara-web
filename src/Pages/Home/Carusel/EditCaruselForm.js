import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import SuccessModal from '../../SharedPages/SuccessModal';

const EditCaruselForm = (props) => {
    const defaultItem = props.updateItem;
    const [caruselData, setCaruselData] = useState({});
    const [modalShow, setModalShow] = React.useState(false);

    const handleCaruselData = (e) => {
        const newCaruselData = { ...defaultItem }
        const field = e.target.name;
        const value = e.target.value;
        //crate data object
        newCaruselData._id = props.updateItem._id;
        newCaruselData[field] = value;

        //set product data
        setCaruselData(newCaruselData)

    }

    const hanldeUpdateCarusel = (e) => {

        fetch('https://shielded-citadel-89476.herokuapp.com/updatecarsel', {
            method: "put",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(caruselData)
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
        setCaruselData({})
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
                <Modal.Title>Update Your Carusel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="shadow p-5" onSubmit={hanldeUpdateCarusel} >
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Products Title</Form.Label>
                        <Form.Control type="text" name="title" onBlur={handleCaruselData} placeholder="Enter Your Products Title" defaultValue={props.updateItem.title} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label> Image url</Form.Label>
                        <Form.Control type="text" name="imgUrl" onChange={handleCaruselData} placeholder="Enter your image live url" defaultValue={props.updateItem.imgUrl} />
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

export default EditCaruselForm;