import React from 'react';
import './CallToAction.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const CallToAction = () => {
    return (
        <section id="cta" className="cta">
            <Container>
                <Row>
                    <Col lg={9} className="text-center text-lg-start">
                        <h3>Are You Ready To Start a New Project With Us?</h3>
                        <p>Join us on our JOURNEY today, as we invest in technology to bring better energy to the Oil & Gas Sector.</p>
                    </Col>
                    <Col lg={3} className="text-center cta-btn-container">
                        <a className="cta-btn align-middle" href="/contact">Discover More</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CallToAction