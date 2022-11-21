import React from 'react';
import CallToAction from '../common/cta/CallToAction';
import { SliderData } from '../data/Data';
import Hero from './Hero/Hero';
import InfoSection from './infosection/InfoSection';
import Services from './services/Services';
import Statistics from './statistics/Statistics';
import Team from './team/Team';
import VideoSection from './videosection/VideoSection';

const Home = () => {
    return (
        <>
            <Hero slides={SliderData} />
            <InfoSection />
            <Services />
            <VideoSection />
            <Statistics />
            <Team />
            <CallToAction />
        </>
    )
}

export default Home