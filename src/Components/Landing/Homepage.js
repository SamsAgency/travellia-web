import React from 'react'
import "./Homepage.css"
import { NavLink } from 'react-router-dom';
import george from "../../Assets/george.jpg"



function Homepage() {
    return (
        <div className="homepage">
            <div className="main-page">
                <section className="column-one">
                    <div className="the-content">
                        <div className="content-light">
                            <p>HOT DEAL!!</p>
                        </div>
                        <div className="content-title">
                            <p>Let's Explore</p>
                        </div>
                        <div className="column-one-bottom">
                            <div className="smaller-content-text">
                                3 days | 310 km
                            </div>
                        </div>
                    </div>
                </section>
                <section className="column-two" >
                    <div className="navbar">
                        <ul className="the-list">
                            <NavLink to="/adventure" className="lists"  >Adventure</NavLink>
                            <NavLink to="/travel" className="lists" >Travel</NavLink>
                            <NavLink to="/hotels" className="lists" >Accomodation</NavLink>
                        </ul>
                    </div>

                    <div className="column-two-content">
                        <div className="header-text">
                            <div className="title-price">
                                <h2>Dream between two worlds</h2>
                                <h2 className="money">$ 1200</h2>
                            </div>
                            <div className="paragraph">
                                <p>
                                    Vivamus suscipit leo eu felis volutpat, sed molestie quam finibus. Aliquam ac hendrerit metus. <br/>
                                    Pellentesque vel orci auctor, hendrerit sapien quis, sagittis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/> 
                                    Aenean luctus interdum augue in luctus. Morbi mattis lorem in erat ornare, vel rhoncus ante varius. <br/>
                                </p>
                                <hr/>
                            </div>
                            <div className="more-and-buttons">
                                <div className="button-one"> <button className="the-button-one">Level Duration</button> </div>
                                <div className = "button-two" >
                                    <select className="landing-page-input">
                                        <option value = "3" >3 Fun days</option>
                                        <option value = "4" >4 Fun days</option>
                                        <option value = "5" >5 Fun days</option>
                                        <option value = "6" >6 Fun days</option>
                                        <option value = "7" >7 Fun days</option>
                                        <option value = "plus" >7+ Fun days</option>
                                    </select>
                                </div>
                                <div className ="main-button" > <button className="welcomehotelbutton" >Learn more</button> </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card-one">
                                <div className="top">
                                    <p className="buttonless" > New </p>
                                    <img className="round-image" src={george} alt="george"/>
                                </div>
                                <div className="them-content">
                                    <div className="topic">
                                        Onego
                                    </div>
                                    <div className="smaller-card-text">
                                        3 Days | 310 km
                                    </div>
                                </div>
                            </div>

                            <div className="card-two">
                                <div className="top">
                                    <i className="fas fa-fire"><p className="buttonless" > Hot </p></i> 
                                    <img className="round-image" src={george} alt="george"/>
                                </div>
                                <div className="them-content">
                                    <div className="topic">
                                        Road E47
                                    </div>
                                    <div className="smaller-card-text">
                                        5 Days | 830 km
                                    </div>
                                </div>
                            </div>

                            <div className="card-three">
                                <div className="top">
                                    <p className="buttonless" > New </p>
                                    <img className="round-image" src={george} alt="george"/>
                                </div>
                                <div className="them-content">
                                    <div className="topic">
                                        Cilibao
                                    </div>
                                    <div className="smaller-card-text">
                                        2 Days | 120 km
                                    </div>
                                </div>
                            </div>

                            <div className="card-four">
                                <div className="top">
                                    <p className="buttonless" > Hot </p>
                                    <img className="round-image" src={george} alt="george"/>
                                </div>
                                <div className="them-content">
                                    <div className="topic">
                                        Lake
                                    </div>
                                    <div className="smaller-card-text">
                                        2 Days | 120 km
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Homepage
