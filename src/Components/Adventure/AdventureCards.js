import React from 'react'
import "./AdventureCards.css"
import greece from "../../Assets/greece.jpg"
import venice from "../../Assets/beach3.jpg"
import scenery from "../../Assets/scenery4.jpg"
import norway from "../../Assets/norway1.jpg"
import paris from "../../Assets/paris.jpg"
import themaldives from "../../Assets/maldives.jpg"

function AdventureCards() {
    return (
        <div className="adventure-cards">
            <h3 className="hotelcardsheader">
                Popular places
            </h3>

            <div className="tophotelcardscontent">
                <p>RAISING COMFORT TO THE BEST LEVEL</p>
                <button className="hotelcardsbutton" >View all</button>
            </div>

            <div className="the-adventure-image-cards">
                <div className="adventure-image-cards-rows">
                    <img src={greece} className="the-adventure-card-image" alt="this is greece"/>
                    <img src={venice} className="the-adventure-card-image" alt="visit venice"/>
                    <img src={scenery} className="the-adventure-card-image" alt="visit beautiful scenery beach"/>
                </div>

                <div className="adventure-image-cards-rows">
                    <img src={norway} className="the-adventure-card-image" alt="visit Norway"/>
                    <img src={paris} className="the-adventure-card-image" alt="visit Paris"/>
                    <img src={themaldives} className="the-adventure-card-image" alt="Visit the amazing maldives"/>
                </div>
            </div>
        </div>
    )
}

export default AdventureCards
