import React from 'react'
import flight from "../../Assets/cruise ship (2).jpg"
import privatejet from "../../Assets/privatejet.jpg"
import bus from "../../Assets/bus.jpg"

function TravellerCards() {
    return (
        <div className="hotelcards">
            
                <h3 className="hotelcardsheader">
                    Rooms and suites
                </h3>
        

            <div className="tophotelcardscontent">
                <p>RAISING COMFORT TO THE BEST LEVEL</p>
                <button className="hotelcardsbutton" >View all</button>
            </div>

            <div className="theimagecards">
                <img className="images" src={flight} alt="room one"/>
                <img className="images" src={privatejet} alt="room two"/>
                <img className="images" src={bus} alt="room three"/>
            </div>
        </div>
    )
}

export default TravellerCards
