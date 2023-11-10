import character from '../assets/character4.png';
import backgroundGif from '../assets/matrixcode3-export.gif'; // Import the GIF
import '../App.css'

const Avatar = () => {
    return (
        <div className="character-container" style={{ backgroundImage: `url(${backgroundGif})` }}>
            <div className="dark-overlay"> </div>
            <img src={character}  className="character-image"  />
        </div>
    )
}
export default Avatar;