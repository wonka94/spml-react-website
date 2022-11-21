import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CallToAction.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PagesCallToAction = () => {
    return (
        <>
            <section className="PagesCTA">
                <Container>
                    <Row>
                        <Col lg={9} className="text-center text-lg-start">
                            <h1>Do You Have Questions ?</h1>
                            <p>Contact us today to learn more of our services.</p>
                        </Col>
                        <Col lg={3} className="text-center PagesCta-btn-container mt-4">
                            <a className="cta-btn5 align-middle" href="/contact">Discover More</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PagesCallToAction