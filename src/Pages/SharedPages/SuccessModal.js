import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const SuccessModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="d-flex justify-content-center align-items-ceeter">
                <h2 className="text-center text-success">Confirmation!</h2>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center align-items-ceeter text-success">
                <CheckBoxOutlinedIcon style={{ color: "green" }} />
                Data submited Successfully!
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>ok</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SuccessModal;