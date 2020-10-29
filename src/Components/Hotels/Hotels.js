import React from 'react'
import HotelBanner from './HotelBanner';
import Form from './Form';
import Welcome from './Welcome';
import Wide from './Wide';
import Cards from './Cards';
import ReverseWide from './Reversewide';
import Largecard from './Largecard';
import Footer from '../Footer/Footer';

function Hotels() {
    return (
        <div>
            <HotelBanner/>
            <Form/>
            <Welcome/>
            <Wide/>
            <Cards/>
            <ReverseWide/>
            <Largecard/>
            <Footer/>
        </div>
    )
}

export default Hotels
