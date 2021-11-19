import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseProducts from '../../hooks/UseProducts';
import Footer from '../Footer/Footer';
import Product from '../Home/Products/Product';
import Navigation from '../SharedPages/Navigation';

const Shop = () => {
    const { products } = UseProducts();
    return (
        <div>
            <Navigation />
            <div className="shop-wrapper">
                <Container className="py-5">
                    <h2 className="text-center text-light shadow mb-5 p-3">Best Camara Collection</h2>
                    <Row xs={1} md={2} lg={3} className="g-4">

                        {
                            products.map(product => <Product key={product._id} product={product} />)
                        }

                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;