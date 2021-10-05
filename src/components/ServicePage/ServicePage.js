import React from 'react';
import { useParams } from 'react-router';
// import { ThemeContext } from '../Services/Services';
// import useData from '../hooks/useData';
import './ServicePage.css'

const ServicePage = () => {
    const { serviceIndex } = useParams();
    return (
        <div className="service-page mt-4">
            <h2>Congrats!!You have visited our no. {serviceIndex} service</h2>
            <h5>Please give us time to process your visit.</h5>
        </div>
    );
};

export default ServicePage;