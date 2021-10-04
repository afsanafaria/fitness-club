import React from 'react';
import './Home.css'
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import SingleData from '../SingleData/SingleData';
import useData from '../hooks/useData';

const Home = () => {
    const [displayData] = useData();
    return (
        <>
            <div className="home-container">
                <Container>
                    <Row className="w-100">
                        <Col className="home-heading">
                            <h1>BODY & MIND in perfect balance</h1>
                            <h5>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</h5>
                            <Link><Button>Discover Now</Button></Link>
                        </Col>
                        <Col>
                            {/* <Image src={backgroundImage} rounded /> */}
                        </Col>

                    </Row>
                </Container>
            </div>
            <Container >
                <h2 className="service-heading my-5 py-2">Our Services</h2>
                <Row xs={1} md={3} className="g-4 w-100">
                    {
                        displayData.slice(0, 3).map(singleData => (
                            <>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={singleData.picture} rounded className="card-img" />
                                        <Card.Body>
                                            <Card.Title>{singleData.service}</Card.Title>
                                            <Card.Text>
                                                Price: {singleData.price} BDT per month
                                                <br /><Link to="/services"><Button className="mt-4">Go to service</Button></Link>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            </Container>



        </>
    );
};
export default Home;