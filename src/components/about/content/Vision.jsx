import React from 'react';
import Heading from '../../common/Heading/Heading';
import './contentBox.css';

const Vision = ({ lightBg, title, description, description2, imgStart, img, alt, width, height }) => {
    return (
        <>
            <section className="VisionContentBox section-bg">
                <div className="container flex">
                    <div className="left row">
                        <Heading title={title} />
                        <p>{description}</p>
                    </div>
                    <div className="right row">
                        <div className="img-fluid">
                            <img src={img} alt={alt} width={width} height={height} />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Vision