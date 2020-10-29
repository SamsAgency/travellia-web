import React from 'react'
import "./AdventureForm.css"

function AdventureForm() {
    return (
        <div className="adventure-form">
            <form className="the-adventure-form">
                <div className="destination">
                    <label>Destination</label>
                    <select className="adventure-input">
                        <option className="adventure-form-selectables" value="africa">Africa</option>
                        <option className="adventure-form-selectables" value="northamerica">North merica</option>
                        <option className="adventure-form-selectables" value="southamerica">South America</option>
                        <option className="adventure-form-selectables" value="asia">Asia</option>
                        <option className="adventure-form-selectables" value="oceania">Oceania</option>
                    </select>
                </div>

                <div className="min-price">
                    <label>Min Price</label>
                    <input type="number"  className="adventure-input"/>
                </div>

                <div className="max-price">
                    <label  >Max Price</label>
                    <input type="number" className="adventure-input"/>
                </div>
            </form>
            <button className="adventure-form-button">
                Search
            </button>
        </div>
    )
}

export default AdventureForm
