import React from 'react';
import PagesCallToAction from '../common/cta/PagesCallToAction';
import HeroBackground from '../common/hero2/HeroBackground';
import Portfolio from './Portfolio';
import PortfolioImage from '../images/Discover/rig2.jpg'


const DiscoverPage = () => {
    return (
        <>
            <HeroBackground title="Projects" cover={PortfolioImage} />
            <Portfolio/>
            <PagesCallToAction />
        </>
    )
}

export default DiscoverPage