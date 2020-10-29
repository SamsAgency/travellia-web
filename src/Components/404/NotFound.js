import React from 'react'
import "./NotFound.css"
// import image from "../../Assets/maldives.jpg"

function NotFound() {
    return (
        <div className="not-found">
            {/* <img src={image} alt="a photo of maldives" className="not-found-image"/> */}
            <div className="not-found-text">
                <h1 className="four-o-four">404</h1>
                <p className="not-found-paragraph">The Page you are looking for is not available</p>
            </div>
        </div>
    )
}

export default NotFound
