import React from 'react'
import "./Footer.css"
import World from "../../Assets/physical-world-map.jpg"
import { NavLink } from 'react-router-dom';

function Footer() {

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left-footer-content">
                    <h3 className="footer-title">Travellia</h3>
                    <p className="footer-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas diam. Cras at gravida diam. 
                        Suspendisse tempor euismod ullamcorper. Quisque ac laoreet ligula, at aliquam diam. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>

                <div className="midde-footer-content">
                    <h3 className="footer-title">Navigation</h3>
                    <ul className="footer-lists">
                        <NavLink to="/" className="thefooterlist" >Home</NavLink>
                        <NavLink to="/adventure" className="thefooterlist" >Adventure</NavLink>
                        <NavLink to="/travel" className="thefooterlist" >Travel</NavLink>
                        <NavLink to="/hotels" className="thefooterlist" >Hotels and Accomodation</NavLink>
                    </ul>
                </div>
                <div className="right-footer-content"  >
                   <div className="box">
                        <img src={World} alt="world map" className="world-image"/>
                        <div className="shadow">

                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
