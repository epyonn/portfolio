import character from '../../assets/character4.png';
import character2 from '../../assets/character4.webp';
import backgroundGif from '../../assets/matrixcode3-export.gif'; // Import the GIF
import backgroundGif2 from '../../assets/matrixcode3-export.webp'; // Import the GIF
import '../../App.css'

const Avatar = () => {
    return (
        <div className="character-container" style={{ backgroundImage: `url(${backgroundGif})` }}>
            <div className="dark-overlay"> </div>
            <img src={character2}  className="character-image"  />
        </div>
    )
}
export default Avatar;