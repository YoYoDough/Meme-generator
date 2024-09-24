import trollFace from '/images/troll-face.png'

const Header = () => {
  return (
    <header className = "header">
        <div className = "titleAndLogo">
            <img src = {trollFace} className = "logoImg"></img>
            <h1 className = "title">Meme Generator</h1>
        </div>
        <p className = "projectNumber">React Course - Project 3</p>
    </header>
  )
}

export default Header