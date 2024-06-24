import React,{useState} from "react";
import memesData from "./memesData";
import "./Meme.css";
import MemeImage from "./images/Meme-Image.png"

export default function Meme() {
  const [memeImage, setMemeImage] = useState("src/images/Meme-Image.png")


function getMemeImage(event) {
  event.preventDefault();
  
  const memesArray = memesData.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  // console.log(memesArray[randomNumber].url);
  setMemeImage(memesArray[randomNumber].url);
}
   
  
  return (
        <main>
            <form className="form" onSubmit={getMemeImage}>
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
                
                <button className="form-button" onClick={getMemeImage}>Get a new meme image  🖼</button>
                
               
            </form>
          
            <img src={memeImage} alt="image" className="meme-image"/>


                
        </main>
    )
}