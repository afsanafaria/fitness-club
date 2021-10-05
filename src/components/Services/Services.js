import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../hooks/useData';
import SingleData from '../SingleData/SingleData';



// export const ThemeContext = React.createContext([]);

const Service = () => {
    const [displayData] = useData();

    /* const handleClick = (singleData) => {
        // console.log(singleData)
        console.log(singleData.name);
        return (singleData.name);
    } */
    return (
        <>

            <Container fluid className="px-5 pt-5 my-3">
                <h2 className="service-heading py-3">Our Services</h2>
                <Row xs={1} md={3} className="g-4 w-100">
                    {
                        displayData.map(singleData => <SingleData

                            key={singleData.index} singleData={singleData}></SingleData>)
                    }
                </Row>
            </Container>


        </>
    );
};

export default Service;