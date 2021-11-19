import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import HandymanIcon from '@mui/icons-material/Handyman';
import UseCarusel from '../../hooks/UseCarusel';
import DeleteModal from '../SharedPages/DeleteModal';
import SuccessModal from '../SharedPages/SuccessModal';
import EditCaruselForm from '../Home/Carusel/EditCaruselForm';

const ManageCarusel = () => {

    // delete modal state
    const [deleteShow, setShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    //use carusel item
    const { caruseles } = UseCarusel();
    console.log(caruseles)
    //edit form state
    const [formShow, setFormShow] = useState(false);
    //set deleteid 
    const [deleteId, setdeleteId] = useState("");

    // update item 
    const [updateItem, setUpdateItem] = useState({})
    console.log(updateItem)
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
        fetch(`https://shielded-citadel-89476.herokuapp.com/carusel?id=${deleteId}`, {
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

    const handleDeleteCarusel = (deleteId) => {
        deleteHandleShow()
        setdeleteId(deleteId);

    }

    //edit product 
    const handleEditCarusel = (id) => {
        const url = `https://shielded-citadel-89476.herokuapp.com/caruselitem?id=${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateItem(data))
        console.log(id)
        formHandleShow()
    }
    return (
        <Container>
            <Container className="d-flex justify-content-center my-5">
                <HandymanIcon /> <h2>Manage Caruseles</h2>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Carusel Image</th>
                        <th> Carusel Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    caruseles.map(carusel => <tbody key={carusel._id}>
                        <tr>
                            <td> <img src={carusel.imgUrl} alt="productimage" style={{ width: "200px" }} /> </td>
                            <td> {carusel.title} </td>
                            <td>
                                <DropdownButton id="dropdown-item-button" title="Action" variant="light" style={{ display: "inline-block" }}>
                                    <Dropdown.Item as="button" onClick={() => { handleEditCarusel(carusel._id) }}>edit</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => handleDeleteCarusel(carusel._id)}>Delete</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>

                    </tbody>

                    )
                }

            </Table>
            <EditCaruselForm
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

export default ManageCarusel;