import React from 'react'
import TravellerBanner from './TravellerBanner'
import TravellerScroll from './TravellerScroll'
import TravellerReverseScroll from './TravellerReverseScroll';
import TravellerLargeCard from './TravellerLargeCard';
import WelcomeTraveller from './WelcomeTraveller';
import TravellerCards from './TravellerCards';
import Footer from './../Footer/Footer';

function Traveller() {
    return (
        <div className="traveller">
            <TravellerBanner/>
            <WelcomeTraveller/>
            <TravellerScroll/>
            <TravellerCards/>
            <TravellerReverseScroll/>
            <TravellerLargeCard/>
            <Footer/>
        </div>
    )
}

export default Traveller
