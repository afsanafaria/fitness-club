import React from 'react';
import './About.css'
import backgroundImage from '../../images/bg.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <div className="about-container">
                <Container>
                    <Row className="w-100 py-5 my-1">
                        <Col sm={5}>
                            <Image src={backgroundImage} rounded className="w-100 about-img" />
                        </Col>
                        <Col sm={7} className="about-heading px-5 py-5 my-4">
                            <h1>CONVERT YOUR EFFORT INTO SUCCESS</h1>
                            <h5>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</h5>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;