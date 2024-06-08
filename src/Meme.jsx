import React from "react";
import "./Meme.css";
import MemeImage from "./images/Meme-Image.png"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div className="form-group">
                  <label>Top Text
                    <input type="text" placeholder="Shut up" className="form-input"/>
                  </label>
                </div>

                <div className="form-group">
                  <label>Bottom Text
                   <input type="text" placeholder="and take my money" className="form-input"/>
                  </label>
                </div>
                
                <button className="form-button">Get a new meme image  🖼</button>
               
            </form>

            <img src={MemeImage} alt="image" className="meme-image"/>

                
        </main>
    )
}