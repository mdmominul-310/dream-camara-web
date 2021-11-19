import { Carousel, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseCarusel from '../../../hooks/UseCarusel';


const Carusel = () => {
    const { caruseles } = UseCarusel()
    return (
        <div className="bg-style">
            <Container className="shadow">
                <Carousel fade>
                    {
                        caruseles.slice(0, 3).map(carusel => <Carousel.Item key={carusel._id} >
                            <img
                                className="d-block w-100"
                                src={carusel.imgUrl}
                                alt="First slide"
                                style={{ height: "500px" }}
                            />
                            <Carousel.Caption className="d-flex  text-align-start">
                                <div className="mb-3">
                                    <h3> {carusel.title} </h3>
                                    <Button variant="light">
                                        <NavLink to="/shop" className="text-dark text-bold" style={{ textDecoration: "none" }} > Go to Shop</NavLink>
                                    </Button>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>)
                    }
                </Carousel>
            </Container>
        </div>
    );
};

export default Carusel;