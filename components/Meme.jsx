import { useState, useEffect } from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))
    }

    
    console.log(meme);

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    console.log(allMemes);

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
  return (
    <main>
            <div className="form" >
                <input 
                    type="text"
                    placeholder="Top text"
                    className="formInput"
                    name = "topText"
                    onChange = {handleChange}
                    value = {meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="formInput"
                    name = "bottomText"
                    onChange = {handleChange}
                    value = {meme.bottomText}
                />
                <button 
                    className="formButton"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="memeImage" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>        
    </main>
  )
}

export default Meme