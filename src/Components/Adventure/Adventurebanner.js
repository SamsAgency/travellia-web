import React from 'react'
import "./Adventurebanner.css"

function Adventurebanner() {
    return (
        <div className="adventure-banner">
            <div className="adventure-banner-content">
                <div className="adventure-banner-left">
                    <h1 className="adventure-banner-intro">
                        Discover More!!
                    </h1>

                    <p className="adventure-banner-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas diam. Cras at gravida diam. 
                        Suspendisse tempor euismod ullamcorper. Quisque ac laoreet ligula, at aliquam diam. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                    <button className="adventure-banner-button"> Visit places </button>
                </div>

                <div className="adventure-banner-right">
                    <div className="adventure-image-one">
                        <p className="adventure-banner-image-text" > Kenya Safari </p>
                    </div>

                    <div className="adventure-image-two">
                        <p className="adventure-banner-image-text" > Maldives </p>
                    </div>

                    <div className="adventure-image-three">
                        <p className="adventure-banner-image-text" > Venice </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventurebanner