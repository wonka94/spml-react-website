import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactPage.css';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const MapPin = styled(FiMapPin)`
    font-size: 52px;
    color: #15b788;
    border-radius: 50%;
    padding: 8px;
    border: 2px dotted #fff7e5;
`;
const MailEnvelope = styled(FiMail)`
    font-size: 52px;
    color: #15b788;
    border-radius: 50%;
    padding: 8px;
    border: 2px dotted #fff7e5;
`;
const PhoneCall = styled(FiPhoneCall)`
    font-size: 52px;
    color: #15b788;
    border-radius: 50%;
    padding: 8px;
    border: 2px dotted #fff7e5;
`;

const containerStyle = {
    width: '100%',
    height: '567px'
};

const center = {
    lat: 5.634150,
    lng: -0.171150
};
const position = {
    lat: 5.634150,
    lng: -0.171150
};


const ContactSection = () => {
    return (
        <section className="ContactSection section-bg">
            <Container data-aos="fade-up">
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col md={12}>
                                <div className="info-box" data-aos="fade-up">
                                    <MapPin />
                                    <h3>Our Address</h3>
                                    <p>#1 White Avenue, East Legon Extension, Accra, Ghana</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                    <MailEnvelope />
                                    <h3>Email Us</h3>
                                    <p> maristonintlgroup@gmail.com</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                    <PhoneCall />
                                    <h3>Call Us</h3>
                                    <p>+233 209 111 711</p>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg={6} className="mt-4 mt-lg-0">
                        <Row>
                            <Col md={12}>
                                <div className="info-box" data-aos="fade-up">
                                    <MapPin />
                                    <h3>Our Address</h3>
                                    <p>The Country Yard, Evelyn Road,Chiswick, London, W4 5JL, United Kingdom</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                    <MailEnvelope />
                                    <h3>Email Us</h3>
                                    <p>  eal@seyton-lister.com</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                    <PhoneCall />
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Row>
                        <Col lg={6} className="section-t8 mt-lg-0">
                            <div className="contact-map box" data-aos="fade-up">
                                <div id="map" className="contact-map">
                                    <LoadScript googleMapsApiKey="AIzaSyCmg4CArFMc_i4bBYe1Os3RhV8_taAog08">
                                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
                                            <Marker position={position}>
                                            </Marker>
                                        </GoogleMap>
                                    </LoadScript>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="section-t8 mt-lg-0">
                            <Form className="php-email-form" data-aos="fade-up">
                                <Row>
                                    <Col className="mb-3" md={6}>
                                        <FormGroup>
                                            <Input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Full Name" required />
                                        </FormGroup>
                                    </Col>
                                    <Col className="mb-3" md={6}>
                                        <FormGroup>
                                            <Input type="email" name="email" className="form-control form-control-lg form-control-a" placeholder="Your Email Address" required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12} className="mb-3">
                                        <FormGroup>
                                            <Input type="text" name="subject" class="form-control form-control-lg form-control-a" placeholder="Subject" required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input type="textarea" name="message" class="form-control " cols="4" rows="8" placeholder="Message" required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12} className="my-3">
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                    </Col>
                                    <Col md={12} className="text-center">
                                        <Button className="btn btn-a">Send Message</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </section>
    )
}

export default ContactSection