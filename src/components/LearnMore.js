import React from "react";
import './LearnMore.css';

import ginger from './picture/ginger.jpg';
import hoji from './picture/Hoji.jpg';
import { Link } from 'react-router-dom';


const LearnMore = () => {
  return (
<>
    <div className="containerLM">
      <div className="textLM">
        <div className="questionLM">SPONSOR GINGER</div>
        <button className="buttonLM"><Link to='/donate'>Sponsor</Link></button>
        <p className="CYtext">
          Ginger was subjected to continuous bullying on the street before being rescued.
          She is much happier now, but is addressing some reactivity issues, mainly towards other humans.
          She would appreciate a sponsor to assist her in overcoming her issues, so that one day she can find a forever home.
        </p>
      </div>
      <div className="imageGinger">
        <img src={ginger} className="ginger" alt="Ginger the cat" />
      </div>
    </div>

    <div className="containerLM1">
        <div className="imageHoji">
            <img src={hoji} className="hoji" alt="Hoji the cat" />
        </div>
      <div className="textLM1">
        <div className="questionLM1">DONATE HOJI</div>
        <button className="buttonLM1"><Link to='/donate'>Donate</Link></button>
        <p className="CYtext1">
        Donating to Hoji is a wonderful way to support her well-being and ensure that she continues to thrive. 
        Whether it's providing her with high-quality cat food, cozy bedding, or regular veterinary care, your contribution can make a significant difference in her life.
        </p>
      </div>
    </div>

    </>
  );
};

export default LearnMore;
