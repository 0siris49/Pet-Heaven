import React from "react";
import RehomingForm from "./RehomingForm";
import Footer from "./Footer";


const Rehoming = () => {
    return(
        <>
        <h1 className="RehomeName">Rehome My Pet</h1>
        <br/>
        <p>We understand challenging circumstances could pressure owners to rehome their pets and it’s never an easy process.</p>
        <br/>
        <p>Due to our limited space and resources as a non-governmental charity, we recommend members of the public to first reach out to family and friends for help. 
            You could post an adoption notice on social media and forums or other welfare groups for help.</p>
        <br/>
        <p>If that does not work, you may complete the online form below. Try not to give up on the process of finding the animal a good home as it may take some time. We wish you all the best with the rehoming process.</p>
        <br/>
        
        <RehomingForm />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer />
        </>
    );

}

export default Rehoming