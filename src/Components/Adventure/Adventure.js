import React from 'react'
import Adventurebanner from './Adventurebanner'
import AdventureForm from './AdventureForm'
import AdventureScroll from './AdventureScroll'
import WelcomeAdventure from './WelcomeAdventure'
import AdventureCards from './AdventureCards';
import ReverseAdventureScroll from './ReverseAdventureScroll'
import AdventureGiantCard from './AdventureGiantCard'
import Footer from '../Footer/Footer'

function Adventure() {
    return (
        <div className="Adventure" >
            <Adventurebanner/>
            <AdventureForm/>
            <WelcomeAdventure/>
            <AdventureScroll/>
            <AdventureCards/>
            <ReverseAdventureScroll/>
            <AdventureGiantCard/>
            <Footer/>
        </div>
    )
}

export default Adventure
