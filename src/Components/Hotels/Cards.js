import React from 'react'
import "./Cards.css"
import hotel from "../../Assets/hotel1.jpg"
import widetwo from "../../Assets/wide2.jpg"
import widethree from "../../Assets/wide3.jpg"

function Cards() {
    return (
        <div className="hotelcards">
            
                <h3 className="hotelcardsheader">
                    Rooms and suites
                </h3>
        

            <div className="tophotelcardscontent">
                <p className="tophotelcardscontentparagraph">RAISING COMFORT TO THE BEST LEVEL</p>
                <button className="hotelcardsbutton" >View all</button>
            </div>

            <div className="theimagecards">
                <img className="images" src={hotel} alt="room one"/>
                <img className="images" src={widetwo} alt="room two"/>
                <img className="images" src={widethree} alt="room three"/>
            </div>
        </div>
    )
}

export default Cards
