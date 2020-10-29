import React from 'react'
import "./WelcomeAdventure.css"
import greece from "../../Assets/safari.jpg"
import maldives from "../../Assets/maldivesparadise.jpg"

function WelcomeAdventure() {
    return (
        <div className="welcome-adventure">
            <div className="welcomehotelcolumn1">
                <div className="overlapingimages">
                    <img className="welcomehotelimage1" src={greece} alt="this is greece"/>
                    <img className="welcomeadventureimage2" src={maldives} alt='this is maldives'/>
                </div>
            </div>
            <div className="welcomehotelcolumn2">
                <div className="welcomehotelheaderandtext">
                    <p className="smallwelcomeintro">
                        AMAZING PLACES, AMAZING EXPERIENCE, AMAZING PEOPLE
                    </p>
                    
                </div>
                <div className="thecontent">
                    <h2 className="welcomehotelheader">
                        Discover Cultures
                    </h2>
                    <hr />
                    <p className="welcomehoteltext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas diam. Cras at gravida diam. 
                        Suspendisse tempor euismod ullamcorper. Quisque ac laoreet ligula, at aliquam diam. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
                <button className="welcomehotelbutton">
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default WelcomeAdventure