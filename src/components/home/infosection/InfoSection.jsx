import React from 'react';
import './InfoSection.css';
import Heading from '../../common/Heading/Heading'
import { Button } from '../../common/button/Button';
// import { Col, Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const InfoSection = () => {
    return (
        <>
            <section className="about">
                <div className="container flex mtop">
                    <div className="left row">
                        <Heading
                            title="Taking a Step Towards a Brighter Future"
                            subtitle="About Saida"
                        />
                        <p>
                            Operating as a fully integrated entity across the Ghanaian oil
                            and gas industry. As a start-up entity we deal in the
                            construction of oil refineries including the marketing of
                            Petroleum Products both refined and unrefined.
                        </p>
                        <div className="btnWrap">
                            <Button
                                to="/about"
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
                        <div className="imgWrap">
                            <img
                                className=""
                                src={require("../../images/Info-Section/station.jpg")}
                                alt="Petrol filling Station"
                                width="650"
                                height="600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="about">
                <Container>
                    <Row className="justify-content-center">
                        <Col
                            xl={6}
                            lg={6}
                            className="icon-boxes left row flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                        >
                            <Heading
                                title="Taking a Step Towards a Brighter Future"
                                subtitle="About Saida"
                            />
                            <p>
                                Operating as a fully integrated entity across the Ghanaian oil
                                and gas industry. As a start-up entity we deal in the
                                construction of oil refineries including the marketing of
                                Petroleum Products both refined and unrefined.
                            </p>
                            <div className="btnWrap">
                                <Button
                                    to="/about"
                                    css={`
                                            color: #ffffff;
                                            max-width: 160px;
                                            font-size: 1.2rem;
                                        `}
                                >
                                    Discover More
                                </Button>
                            </div>
                        </Col>
                        <Col xl={4} lg={6} className="video-box d-flex justify-content-center align-items-stretch position-relative">
                            <img src={require('../../images/Info-Section/station.jpg')} alt="Petrol filling Station" width="900" height="600"/>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </>
    );
}

export default InfoSection