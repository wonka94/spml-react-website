import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './statistics.css';

const Statistics = () => {
    return (
            <section className="counts section-bg">
                <Container>
                    <Row className="counters">
                        <Col lg={3} className="col-6 text-center">
                            <span>
                                <CountUp start={0} end={50} duration={3.75} />
                            </span>
                            <p>Clients</p>
                        </Col>
                        <Col lg={3} className="col-6 text-center">
                            <span>
                                <CountUp start={0} end={30} duration={2.75} />
                            </span>
                            <p>Projects</p>
                        </Col>
                        <Col lg={3} className="col-6 text-center">
                            <span>
                                <CountUp start={0} end={100} duration={2.75} />
                            </span>
                            <p>Workers</p>
                        </Col>
                        <Col lg={3} className="col-6 text-center">
                            <span>
                                <CountUp start={0} end={10} duration={2.75} />
                            </span>
                            <p>Partners</p>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}

export default Statistics