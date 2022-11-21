import React from 'react';
import './footer.css';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { footer } from '../../data/Data';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box">
                        <div className="logo">
                            <img src={require("../../images/logo3.png")} alt="logo" />
                            <p className="portfolio">
                                Operating as an entity that deal in the construction of oil
                                refineries including the marketing of Petroleum Products both
                                refined and unrefined.
                            </p>
                        </div>
                    </div>
                    {footer.map((val) => (
                        <div className="box">
                            <h3>{val.title}</h3>
                            <ul>
                                {val.text.map((items) => (
                                    <li><Link to={items.path}>{items.list}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="box footer-contact">
                        <h3>Get in Touch</h3>
                        <p>
                            #1 White Avenue, <br />
                            East Legon Extension,<br />
                            Accra Ghana <br /><br />
                            <span>Phone:</span> +233 209 111 711<br />
                            <span>Email:</span> maristonintlgroup@gmail.com<br />
                        </p>
                    </div>
                    <div className="box">
                        <h3>Our Socials</h3>
                        <div className="social-links">
                            <a href="/" className="linkedin"><BsLinkedin size={20} /></a>
                            <a href="/" className="facebook"><BsFacebook size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-area-bottom">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="copyright text-center">
                                <p>
                                    &copy; Copyright <strong>Saida Petroleum Mills Limited</strong>. All Rights Reserved
                                </p>
                            </div>
                            <div className="credits">
                                Designed by <a href="https://asset-trove.com/">Asset-Trove</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer