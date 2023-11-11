import React from 'react';
import Intro from './Intro';
import Avatar from './Avatar'
import Sphere from '../geometry/Sphere';
import htmlImg from '../../assets/tech/html2-export.png';
import jsImg from '../../assets/tech/javascript.png';
import cssImg from '../../assets/tech/css.png';

import '../../App.css'

const Splash: React.FC = () => {
    return (
        <div className="splash-container">
            <div className="sphere-html-container">
                <Sphere imageUrl={htmlImg} size={2.5} position={[-5,37,0]}/>
            </div>
            <div className="sphere-js-container">
                <Sphere imageUrl={jsImg} size={3.5} position={[-5,37,0]}/>
            </div>

            <div className="sphere-css-container">
                <Sphere imageUrl={cssImg} size={3} position={[-5,37,0]} /> 
            </div>
            
            <div className="Intro">
                <Intro />
            </div>
            <Avatar />
        </div>
    )
}

export default Splash;