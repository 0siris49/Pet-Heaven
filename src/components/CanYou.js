import React from "react";
import './CanYou.css';
import clifford from './picture/clifford.jpg';

const CanYou = () => {
  return (
    <div className="containerCY">
      <div className="textCY">
        <div className="question">Can you provide a loving home for cats and dogs?</div>
        <p className="CYtext">
        Every dog in our shelter deserves a second shot at happiness. 
        While we do our utmost to bring them joy, we understand that having a loving home of their own is the ultimate goal.
        We hold the belief that dogs, regardless of their age or breed, have the power to transform our lives for the better. 
        Given the opportunity, they can become the most cherished companions you've ever known.
        </p>
      </div>
      <div className="imageClifford">
        <img src={clifford} className="clifford" alt="Clifford the dog" />
        <p>Clifford with his pawrent on a hike</p>
      </div>
    </div>
  );
};

export default CanYou;
