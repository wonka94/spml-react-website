import React from 'react';
import HeroBackground from '../common/hero2/HeroBackground';
import './servicesPage.css';
import ServicesImg from '../images/cta.jpg';
import PagesCallToAction from '../common/cta/PagesCallToAction';
import CompanyServices from './servicesCard';
// import { Services } from '../data/Data';

const ServicesPage = () => {
    return (
        <>
            <HeroBackground title='Our Services' cover={ServicesImg} />
            <CompanyServices />
            <PagesCallToAction />
        </>
    )
}

export default ServicesPage