import React from 'react'
import "./Form.css"

function Form() {
    return (
        <div className="hotelform">
            <form className="thehotelform">
                <div className="checkin">
                    <label>Checkin</label>
                    <input type="date"  className="hotelinput"/>
                </div>

                <div className="checkout">
                    <label>Checkout</label>
                    <input type="date"  className="hotelinput"/>
                </div>

                <div className="adults">
                    <label  >Adults</label>
                    <input type="number" className="hotelinput"/>
                </div>

                <div className="children">
                    <label>Children</label>
                    <input type="number" className="hotelinput"/>
                </div>
            </form>
            <button className="hotelformbutton">
                Search
            </button>
        </div>
    )
}

export default Form
