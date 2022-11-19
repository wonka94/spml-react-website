import React from 'react';
import Heading from '../../common/Heading/Heading';
import './contentBox.css';

const Philosophy = ({ lightBg, title, description, description2, imgStart, img, alt, width, height }) => {
    return (
        <>
            <section className="PhilosophyContentBox">
                <div className="container flex">
                    <div className="left row">
                        <div className="img-fluid">
                            <img src={img} alt={alt} width={width} height={height} />
                        </div>
                    </div>
                    <div className="right row">
                        <Heading title={title} />
                        <p>{description}</p>
                        <p>{description2}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Philosophy