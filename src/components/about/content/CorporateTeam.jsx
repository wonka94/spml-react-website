import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './contentBox.css';

const CorporateTeam = () => {
    return (
        <>
            <section className="TeamContent section-bg">
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
                        <div className="Positions">
                            <h3>Executive Team</h3>
                        </div>
                        <Col sm={12} className="mt-3">
                            <Row>
                                <Col md={6}>
                                    <div className="agent-avatar-box">
                                        <img src={require('../../images/Staff/team-1.png')} alt="CEO" className="agent-avatar img-fluid" />
                                    </div>
                                </Col>
                                <Col md={5} className="section-md-t3 mt-5">
                                    <div className="agent-info-box">
                                        <div className="agent-title">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Mariyam Issa Bawa
                                                    <br /><h5>President/ CEO</h5>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="agent-content mb-3">
                                            <p className="content-d color-text-a">
                                                With a post-graduate degree from the London School of Economics and Finance, Mariyam Issa Bawa is a chartered banker. She also has a degree from the Ghana Institute of Management and Public Administration and a Bachelor of Arts from the University of Ghana, Legon (GIMPA).
                                            </p>
                                            <p className="content-d color-text-a">
                                                As a Policy Analyst and Implementation Specialist for the UN and World Bank, she has a broad range of work experience. She currently serves as Saida Petroleum Mills Ltd.'s president and CEO.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} className="mt-5">
                            <Row>
                                <Col md={6} className="mt-4">
                                    <div className="agent-info-box">
                                        <div className="agent-title">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Benjamin Korley
                                                    <br /><h5>Chief Finance Officer</h5>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="agent-content mb-3">
                                            <p className="content-d color-text-a">
                                                In addition to being a trained facilitator from the Institute of Chartered Accountants, Ghana, Benjamin Korley is also chartered accountant.
                                            </p>
                                            <p className="content-d color-text-a">
                                                He has a diverse 32-year working experience in Finance, Auditing. Accounting and Assurance. He had previously worked as a partner at Deloitte & Touche, where he oversaw the audit practice. Additionally, Mr. Korley oversaw multinational audits, such as Anglogold Ashanti, during their transition from a private company to an international listing on five stock exchanges. He served as an assessor for the Commercial Division of the High Court of Ghana.
                                                <br /> He currently holds the position of Managing Partner at the Chartered Accountants firm Intellisys. In addition, he serves as Saida Petroleum Mills Ltd.'s Chief Financial Officer.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={5} className="section-md-t3">
                                    <div className="agent-avatar-box">
                                        <img src={require('../../images/Staff/team-2.png')} alt="CEO" className="agent-avatar img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Row className="mtop">
                            <div className="Management-Positions">
                                <h3>Management Team</h3>
                            </div>
                            <Col className=" align-items-stretch" lg={3} md={6}>
                                <div className="member">
                                    <img src={require('../../images/Staff/team-3.png')} alt="Director of Opera2ons" className="img-fluid" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Robert N.Y. Klubi</h4>
                                            <span> Director of Operations</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="align-items-stretch mt-4 mt-md-0" lg={3} md={6}>
                                <div className="member">
                                    <img src={require('../../images/Staff/team-4.png')} alt="Deputy Director of Opera2ons" className="img-fluid" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Daniel Adjei</h4>
                                            <span> Deputy Director of Opera2ons</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className=" align-items-stretch mt-4 mt-lg-0" lg={3} md={6}>
                                <div className="member">
                                    <img src={require('../../images/Staff/team-5.png')} alt="Executive Secretary" className="img-fluid" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Imani Kairaba Bawa</h4>
                                            <span> Executiveve Secretary</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col className=" align-items-stretch" lg={3} md={6}>
                                <div className="member">
                                    <img src={require('../../images/Staff/team-6.png')} alt="Deputy Chief Financial Officer" className="img-fluid" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>George Yarboi</h4>
                                            <span> Deputy Chief Financial Officer</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default CorporateTeam