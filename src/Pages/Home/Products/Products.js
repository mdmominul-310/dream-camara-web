import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseProducts from '../../../hooks/UseProducts';
import Product from './Product';

const Products = () => {
    const { products } = UseProducts();
    return (
        <div className="bg-products">
            <Container className="py-5">
                <h2 className="text-center text-light shadow mb-5 p-3">Best Camara</h2>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product} />)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Products;