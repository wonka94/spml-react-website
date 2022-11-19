import React from 'react';
import './Heading.css';

const Heading = ({ title, subtitle }) => {
    return (
        <>
            <div className="heading">
                <p>{subtitle}</p>
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default Heading