import memesData from '../memesData.js'

const Meme = () => {
    function handleClick(){
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[randomNumber].url);
    }
  return (
    <main>
            <div className="inputMeme">
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
                    onClick = {handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
  )
}

export default Meme