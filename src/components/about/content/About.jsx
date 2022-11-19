import React from 'react';
import { Button } from '../../common/button/Button';
import Heading from '../../common/Heading/Heading';
import './contentBox.css';

const About = ({ subtitle, title, description, description2, img, alt, width, height }) => {
    return (
        <>
            <section className="AboutContentBox section-bg">
                <div className="container flex ">
                    <div className="left row">
                        <Heading title={title} subtitle={subtitle} />
                        <p>{description}</p>
                        <p>{description2}</p>
                        <div className="btnWrap">
                            <Button
                                to="/services"
                                css={`
                                        color: #ffffff;
                                        max-width: 160px;
                                        font-size: 1.2rem;
                                    `}
                            >
                                Discover More
                            </Button>
                        </div>
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

export default About