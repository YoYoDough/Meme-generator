import memesData from '../memesData.js'
import { useState } from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemes] = useState(memesData)


    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
  return (
    <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="topInput"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="bottomInput"
                />
                <button 
                    className="formButton"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src = {meme.randomImage} className = "memeImage"></img>
        </main>
  )
}

export default Meme