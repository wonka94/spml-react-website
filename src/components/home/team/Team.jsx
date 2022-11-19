import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {
    return (
        <section className="team" css={`background: #f9f9f9;`}>
            <Container>
                <div className="section-title">
                    <h2>Our Team</h2>
                    <p>
                        Saida Petroleum Mills Limited (SPML) is governed by an eminent Board of Directors and is guided through
                        pertinent By-Laws, Code of Ethics and Business Conduct.
                        sector.
                    </p>
                </div>
                <Row>
                    <Col className="align-items-stretch mt-4 mt-md-0" lg={4} md={6}>
                        <div className="member">
                            <img src={require('../../images/Staff/team-1.png')} alt="CEO" className="img-fluid" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Mariyam Issa Bawa</h4>
                                    <span> President/CEO</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className=" align-items-stretch mt-4 mt-lg-0" lg={4} md={6}>
                        <div className="member">
                            <img src={require('../../images/Staff/team-2.png')} alt="CEO" className="img-fluid" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Benjamin Korley</h4>
                                    <span> Chief Finance Officer</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className=" align-items-stretch" lg={4} md={6}>
                        <div className="member">
                            <img src={require('../../images/Staff/team-3.png')} alt="CEO" className="img-fluid" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Robert N.Y. Klubi</h4>
                                    <span> Director of Operations</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team