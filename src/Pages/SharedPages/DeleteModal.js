import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteModal = (props) => {

    return (
        <Modal
            show={props.deleteShow}
            onHide={props.deleteHandleClose}
            backdrop="static"
            keyboard={false}
            style={{
                zIndex: "10000000000000000000000000000000000000000000000"
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-danger"> confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-danger">
                <DeleteIcon /> Are you Sure??
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.deleteHandleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={props.confirmDelete}>Delete!</Button>
            </Modal.Footer>
        </Modal >
    );
};

export default DeleteModal;