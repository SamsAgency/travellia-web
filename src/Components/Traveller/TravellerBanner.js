import React from 'react'
import "./TravellerBanner.css"

function TravellerBanner() {
    return (
        <div className="traveller-banner">
            <div className="hotelbannercontent">
                <div className="hotelbannercolumn1">
                    <div className="traveller-banner-content">
                        <h2 className="hotelbannerintro">Travellers</h2>
                        <p className="hotelbannerparagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas diam. Cras at gravida diam. 
                            Suspendisse tempor euismod ullamcorper. Quisque ac laoreet ligula, at aliquam diam. 
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                        <button className="hotelbannerbutton">More</button>
                    </div>
                </div>
                <div className="hotelbannercolumn2">
                    <div className="travelbannerimage1">
                        <p className="hotelbannerimagetext">Amazing</p>
                    </div>
                    <div className="travelbannerimage2">
                        <p className="hotelbannerimagetext">Luxurious</p>
                    </div>
                    <div className="travelbannerimage3">
                        <p className="hotelbannerimagetext">Beautiful</p>
                    </div>
                </div>
            </div>
            <div className="hotelsocialmedia">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    )
}

export default TravellerBanner
