import React from 'react';
import './servicesPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { ServicesData } from '../data/Data';

const CompanyServices = () => {
    return (
        <>
            <section className="ServicesCard section-bg">
                <Container>
                    <Row>
                        {ServicesData.map((val) => (
                            <Col md={6} className="d-flex" data-aos={val.aos}>
                                <div className="card">
                                    <div className="card-img">
                                        <img src={val.image} alt={val.alt} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><Link>{val.title}</Link></h5>
                                        <p className="card-text">{val.serviceDescription}</p>
                                        <div className="read-more"><BsArrowRightCircle /> <Link to="/contacts">Read More</Link></div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CompanyServices