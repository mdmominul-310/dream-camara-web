import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import HandymanIcon from '@mui/icons-material/Handyman';
import UseProducts from '../../hooks/UseProducts';
import DeleteModal from '../SharedPages/DeleteModal';
import EditProductForm from '../Home/EditProductForm';
import SuccessModal from '../SharedPages/SuccessModal';


const ManageProducts = () => {
    // delete modal state
    const [deleteShow, setShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    //edit form state
    const [formShow, setFormShow] = useState(false);
    //set deleteid 
    const [deleteId, setdeleteId] = useState("");
    // use all products
    const { products } = UseProducts();
    // update item 
    const [updateItem, setUpdateItem] = useState({})

    //edit product function 
    const formHandleClose = () => {
        setFormShow(false);
        setUpdateItem({})
    }
    const formHandleShow = () => setFormShow(true);

    // Delete modal function
    const deleteHandleClose = () => setShow(false);
    const deleteHandleShow = () => setShow(true);
    //Delete confirmation update
    const confirmDelete = () => {
        goDelete()
        deleteHandleClose();
    }
    // useEffect(() => {

    // }, [isDelete])

    const goDelete = () => {
        fetch(`https://shielded-citadel-89476.herokuapp.com/product?id=${deleteId}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
            // body: JSON.stringify(deleteId)
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setModalShow(true);
                }
            })
            //  setModalShow(true);
            .catch(error => console.log(error))
    }

    const handleDeleteProduct = (deleteId) => {
        deleteHandleShow()
        setdeleteId(deleteId);

    }

    //edit product 
    const handleEditProduct = (id) => {
        const url = `https://shielded-citadel-89476.herokuapp.com/product?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateItem(data))
        formHandleShow()
    }
    return (
        <Container>
            <Container className="d-flex justify-content-center my-5">
                <HandymanIcon /> <h2>Manage Products</h2>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    products.map(product => <tbody key={product._id}>
                        <tr>
                            <td> <img src={product.imgUrl} alt="productimage" style={{ width: "50px" }} /> </td>
                            <td> {product.title} </td>
                            <td> {product.description.slice(0, 50)}..... </td>
                            <td> {product.price} </td>
                            <td>
                                <DropdownButton id="dropdown-item-button" title="Action" variant="light" style={{ display: "inline-block" }}>
                                    <Dropdown.Item as="button" onClick={() => { handleEditProduct(product._id) }}>edit</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => handleDeleteProduct(product._id)}>Delete</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>

                    </tbody>

                    )
                }

            </Table>
            <EditProductForm
                formHandleClose={formHandleClose}
                formHandleShow={formHandleShow}
                formShow={formShow}
                updateItem={updateItem}


            />
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

export default ManageProducts;