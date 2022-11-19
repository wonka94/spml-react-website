import React from 'react';
import PagesCallToAction from '../common/cta/PagesCallToAction';
import HeroBackground from '../common/hero2/HeroBackground';
import './ContactPage.css';
import ContactImg from '../images/Contact/contactUs.jpg';
import ContactSection from './ContactSection';

const ContactPage = () => {
    return (
        <>
            <HeroBackground title="Contact Us" cover={ContactImg} />
            <ContactSection />
            <PagesCallToAction />
        </>
    )
}

export default ContactPage