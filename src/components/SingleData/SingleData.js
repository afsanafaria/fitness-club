import React from 'react';
import './SingleData.css'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleData = (props) => {
    const { index, picture, price, service } = props.singleData;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} rounded className="card-img" />
                    <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>
                            Price: {price} BDT per month
                            <br /><Link to={`/servicepage/${Number(index) + 1}`}><Button
                                className="mt-4 button">Click here</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleData;