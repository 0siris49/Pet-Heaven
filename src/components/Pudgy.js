import React from "react";
import pudgy from './picture/pudgy.jpg'
import PetDetails from './PetDetailsComponent'; 

const Pudgy = () => {
    const pudgyDetails = {
    name: "Pudgy",
    image: pudgy,
    gender: "Female",
    birthYear: 2018,
    sterilized: true,
    hdbApproved: true,
    age: "5 years old",
    temperament: "Friendly, Hyper",
    microchipped: true,
    description: "Pudgy, a dog with a hearty appetite, is incredibly approachable. His submissive nature has unfortunately led to some bullying by other dogs, leaving a few battle scars. Yet, under our care, Pudgy has blossomed into a more confident canine and is poised to thrive even more with his new family. His temperament makes him an excellent match for first-time adopters."
};

return (
    <PetDetails pet={pudgyDetails} />
);
    
    

}

export default Pudgy