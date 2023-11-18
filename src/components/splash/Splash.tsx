import React from 'react';
import Intro from './Intro';
import Avatar from './Avatar'
import Sphere from '../geometry/Sphere';
import BallCanvas from '../geometry/BallCanvas';
import htmlImg from '../../assets/tech/html2-export.png';
import jsImg from '../../assets/tech/javascript.png';
import cssImg from '../../assets/tech/css.png';
import '../../App.css'

const Splash: React.FC = () => {
    return (
        <div className="splash-container">
            <div className="sphere-js-container">
                <BallCanvas imageUrl={jsImg}/>
            </div>
            <div className="sphere-html-container">
                <BallCanvas imageUrl={htmlImg}/>
            </div>

            <div className="sphere-css-container">
                <BallCanvas imageUrl={cssImg} />
            </div>
            <div className="Intro">
                <Intro />
            </div>
            <Avatar />
        </div>
    )
}




export default Splash;