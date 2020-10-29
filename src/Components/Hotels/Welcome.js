import React from 'react'
import "./Welcome.css"
import potrait from "../../Assets/potrait3.jpg"
import wide from "../../Assets/wide2.jpg"

function Welcome() {
    return (
        <div className="welcomehotel">
            <div className="welcomehotelcolumn1">
                <div className="overlapingimages">
                    <img className="welcomehotelimage1" src={potrait} alt="hotelroom"/>
                    <img className="welcomehotelimage2" src={wide} alt='hotelroombed'/>
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
                        Welcome to blablabla
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

export default Welcome
