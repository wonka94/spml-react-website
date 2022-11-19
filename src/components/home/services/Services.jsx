import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {
    GiOilDrum,
    GiOilPump,
    GiReceiveMoney,
    GiMaterialsScience,
    GiGasPump,
    GiPipes
} from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';

const Services = () => {
    return (
        <>
            <section id="services" className="services section-bg">
                <Container>
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>
                            Saida Petroleum Mills Limited (SPML) as a company has based our
                            sources for products and services on our key business partners,
                            suppliers and investors, which are distributed to our customers.
                            Our goal is to research and develop cleaner energy services and
                            with this, in mind, we are focused on developing the oil and gas
                            sector.
                        </p>
                    </div>
                    <Row>
                        <Col className="d-flex align-items-stretch" lg={4} md={6}>
                            <div className="icon-box">
                                <div className="icon">
                                    <GiOilDrum size={25} />
                                </div>
                                <h4>Trading of Crude & Refined Oil Products</h4>
                                <p>
                                    A leading company that operates in the trading of
                                    crude,refined and petrochemical oils products.
                                </p>
                            </div>
                        </Col>
                        <Col
                            className="d-flex align-items-stretch mt-4 mt-md-0"
                            lg={4}
                            md={6}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    <GiOilPump size={25} />
                                </div>
                                <h4>Construction & Operation of Oil Refineries</h4>
                                <p>
                                    We've got the resources to assist you with the construction, repair and operation of an oil refinery.
                                </p>
                            </div>
                        </Col>
                        <Col
                            className="d-flex align-items-stretch mt-4 mt-lg-0"
                            lg={4}
                            md={6}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    <GiReceiveMoney size={25} />
                                </div>
                                <h4>Investment in the Oil, Gas & Petrochemical Industry</h4>
                                <p>
                                    Providing investors with a platform that delivers a high
                                    return on their investments.
                                </p>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-stretch mt-4" lg={4} md={6}>
                            <div className="icon-box">
                                <div className="icon">
                                    <GiMaterialsScience size={25} />
                                </div>
                                <h4>Development of Oil & Gas Technology</h4>
                                <p>
                                    Expertise in the development and implementation of technologies used by the Oil, Gas And Petrochemical Industries.
                                </p>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-stretch mt-4" lg={4} md={6}>
                            <div className="icon-box">
                                <div className="icon">
                                    <GiGasPump size={25} />
                                </div>
                                <h4>Construction & Operation of Petrol Filling Stations</h4>
                                <p>
                                    Involved in the construction and operation of Petrol Filling
                                    Stations across the country.
                                </p>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-stretch mt-4" lg={4} md={6}>
                            <div className="icon-box">
                                <div className="icon">
                                    <GiPipes size={25} />
                                </div>
                                <h4>Exploration and Production of Oil & Gas</h4>
                                <p>
                                    Exploring cleaner services of energy and also focusing on
                                    developing the country's natural oil and gas fields.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Services;
