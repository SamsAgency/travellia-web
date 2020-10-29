import React from 'react'
import "./WelcomeTravellers.css"
import boat from "../../Assets/boat.jpg"
import car from "../../Assets/carhirelandscape.jpg"


function WelcomeTraveller() {
    return (
        <div className="welcomehotel">
            <div className="welcomehotelcolumn1">
                <div className="overlapingimages">
                    <img className="welcometravellerimage1" src={boat} alt="hotelroom"/>
                    <img className="welcometravellerimage2" src={car} alt='hotelroombed'/>
                </div>
            </div>
            <div className="welcomehotelcolumn2">
                <div className="welcomehotelheaderandtext">
                    <p className="smallwelcomeintro">
                        RAISING COMFORT TO THE BEST LEVEL
                    </p>
                    
                </div>
                <div className="thecontent">
                    <h2 className="welcomehotelheader">
                        Welcome all
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

export default WelcomeTraveller
