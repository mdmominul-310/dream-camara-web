import React, { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../SharedPages/Navigation';
import ShopIcon from '@mui/icons-material/Shop';
import { useNavigate, useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import SuccessModal from '../SharedPages/SuccessModal';

const BuyForm = () => {
    const [BuyInfo, setBuyInfo] = useState({})
    const [modalShow, setModalShow] = React.useState(false);
    const [productInfo, setProductInfo] = useState({})
    const navigate = useNavigate();

    const { user } = UseAuth()
    const { id } = useParams();

    useEffect(() => {
        const url = `https://shielded-citadel-89476.herokuapp.com/product?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductInfo(data))
            .catch(error => console.log(error))

    }, [id])
    const url = `https://shielded-citadel-89476.herokuapp.com/product?id=${id}`
    fetch(url)


    const handlebuy = (e) => {
        const newBuyInfo = { ...BuyInfo }
        const field = e.target.name;
        const value = e.target.value;
        newBuyInfo[field] = value;
        newBuyInfo.status = "pending";
        newBuyInfo.productId = id;
        newBuyInfo.name = user.displayName;
        newBuyInfo.email = user.email;
        newBuyInfo.productTitle = productInfo.title;
        setBuyInfo(newBuyInfo)

    }
    const handleOrder = (e) => {
        fetch('https://shielded-citadel-89476.herokuapp.com/orders', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(BuyInfo)
        })
            .then(result => result.json())
            .then(data => {
                if (data.insertedId) {
                    setModalShow(true);
                    e.target.reset();
                    setBuyInfo({})

                }
            })
            .catch(error => console.log(error))



        e.preventDefault()
    }
    return (
        <div className="login-form">
            <Navigation />
            <Container>
                <Container className="bg-dark p-5 my-5 shadow w-50">
                    <h2 className="text-light text-opacity-75 text-center mb-5"> <span><ShopIcon />  </span>Place Order</h2>
                    <Form onSubmit={handleOrder}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your Full Name"
                            className="mb-3 text-light text-opacity-75"
                        >
                            <Form.Control type="text" placeholder="Type your Name" defaultValue={user.displayName} className=" bg-dark text-light text-opacity-75" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email Address"
                            className="mb-3 text-light text-opacity-75"
                        >
                            <Form.Control type="email" placeholder="name@example.com" defaultValue={user.email} className=" bg-dark text-light text-opacity-75" required />
                        </FloatingLabel>
                        <FloatingLabel label="Mobile Number" className="  text-light text-opacity-75 mb-3">
                            <Form.Control type="Number" name="number" placeholder="Enter your Mobile Number" className="bg-dark text-light" onBlur={handlebuy} required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" className="  text-light text-opacity-75 mb-3" label="Address">
                            <Form.Control
                                as="textarea"
                                placeholder="Address"
                                style={{ height: '100px' }}
                                className="bg-dark text-light"
                                name="address"
                                onBlur={handlebuy}

                            />
                        </FloatingLabel>
                        <Form.Control type="submit" value="Place Order" className="btn btn-outline-secondary text-light text-opacity-75  my-3" />


                    </Form>

                </Container>
            </Container>
            <SuccessModal
                show={modalShow}
                onHide={() => {

                    setModalShow(false);
                    navigate('/shop', { replace: true })
                }}
            />
            <Footer />
        </div>
    );
};

export default BuyForm;