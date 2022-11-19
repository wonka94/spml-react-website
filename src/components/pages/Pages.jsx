import React, { useState } from 'react';
import Header from '../common/header/Header';
import Sidebar from '../common/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import AboutPage from '../about/AboutPage';
import ServicesPage from '../services/ServicesPage';
import ContactPage from '../contact/ContactPage';
import DiscoverPage from '../discover/DiscoverPage';




const Pages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Router>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Header toggle={toggle} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/discover" element={<DiscoverPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Pages