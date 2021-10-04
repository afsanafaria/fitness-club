import React from 'react';
import './Contact.css'
// import contactImage from '../../images/bg-2.jpg'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <Container >
                    <Row className="w-100 py-5 my-5">
                        <Col sm={6} className="py-5 my-4">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="contact-heading">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="contact-heading">Tell us about your interests</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button className="button" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        {/* <Col sm={6} >
                            <Image src={contactImage} rounded className="w-100  " />
                        </Col> */}

                    </Row>
                </Container>
            </div>
        </>

    );
};

export default Contact;