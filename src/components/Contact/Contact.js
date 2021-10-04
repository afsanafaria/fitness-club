import React from 'react';
import './Contact.css'
import contactImage from '../../images/bg-2.jpg'
import { Row, Col, Container, Form, Button, Image } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <Container>
                    <Row className="w-100">
                        <Col className="my-5 py-5">
                            <Form className="py-4">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="contact-heading">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="contact-heading">Tell us about your interests</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col className=" py-4">
                            <Image src={contactImage} rounded className="w-100 about-img" />
                        </Col>

                    </Row>
                </Container>
            </div>
        </>

    );
};

export default Contact;