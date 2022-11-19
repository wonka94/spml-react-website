import React from 'react';
import PagesCallToAction from '../common/cta/PagesCallToAction';
import HeroBackground from '../common/hero2/HeroBackground';
import { AboutContent, MissionContent, PhilosophyContent, VisionContent } from '../data/Data';
import aboutUsImg from '../images/HeroBackground/aboutUsHero.jpg';
import About from './content/About';
import CorporateTeam from './content/CorporateTeam';
import Mission from './content/Mission';
import Philosophy from './content/Philosophy';
import Vision from './content/Vision';

const AboutPage = () => {
    return (
        <>
            <HeroBackground title='About Us' cover={aboutUsImg} />
            <About {...AboutContent}/>
            <Mission {...MissionContent}/>
            <Vision {...VisionContent}/>
            <Philosophy {...PhilosophyContent}/>
            <CorporateTeam/>
            <PagesCallToAction/>
        </>
    )
}

export default AboutPage