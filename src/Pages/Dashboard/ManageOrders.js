import React, { useEffect, useState } from 'react';
import { Container, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import HandymanIcon from '@mui/icons-material/Handyman';

import DeleteModal from '../SharedPages/DeleteModal';

import SuccessModal from '../SharedPages/SuccessModal';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleteShow, setShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [deleteItem, setDeleteItem] = useState("")
    const deleteHandleClose = () => setShow(false);
    const deleteHandleShow = () => setShow(true);
    // load order for show order info
    useEffect(() => {
        fetch('https://shielded-citadel-89476.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    // delete item
    const confirmDelete = () => {
        fetch(`https://shielded-citadel-89476.herokuapp.com/order?id=${deleteItem}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(result => result.json())
            .then(data => {

                deleteHandleClose();
                if (data.deletedCount > 0) {
                    setModalShow(true)
                }
            })

    }

    const handleStatus = (orderId) => {
        console.log(orderId)
        fetch(`https://shielded-citadel-89476.herokuapp.com/order?orderId=${orderId}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(result => result.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setModalShow(true)
                }
            })
    }
    const handleDeleteOrder = (id) => {
        deleteHandleShow()
        setDeleteItem(id);
    }
    return (
        <Container>
            <Container className="d-flex justify-content-center my-5">
                <HandymanIcon /> <h2>Manage Order</h2>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Title</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <tbody key={order._id}>
                        <tr>
                            <td>{order.name}  </td>
                            <td> {order.email} </td>
                            <td>{order.productTitle} </td>
                            <td>
                                <DropdownButton id="dropdown-item-button" title={order.status} variant="light" style={{ display: "inline-block" }}>
                                    <Dropdown.Item as="button" onClick={() => handleStatus(order.productId)}>Delivered</Dropdown.Item>

                                </DropdownButton>
                            </td>
                            <td>

                                <Dropdown.Item as="button" onClick={() => handleDeleteOrder(order._id)} >Delete</Dropdown.Item>

                            </td>
                        </tr>

                    </tbody>

                    )
                }

            </Table>

            <DeleteModal
                deleteHandleClose={deleteHandleClose}
                deleteHandleShow={deleteHandleShow}
                deleteShow={deleteShow}
                confirmDelete={confirmDelete}
            />
            <SuccessModal
                show={modalShow}
                onHide={() => {
                    window.location.reload()
                    setModalShow(false)
                }}
            >

            </SuccessModal>
        </Container>
    );
};

export default ManageOrders;