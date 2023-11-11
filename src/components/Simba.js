import React from "react";
import simba from './picture/simba.jpg'
import PetDetails from './PetDetailsComponent'; 

const Simba = () => {
        const simbaDetails = {
        name: "Simba",
        image: simba,
        gender: "Male",
        birthYear: 2021,
        sterilized: true,
        hdbApproved: true,
        age: "2 years old",
        temperament: "Playful, Curious",
        microchipped: true,
        description: "Simba, the majestic tabby whose presence embodies a regal grace intertwined with an undeniable charm, is a creature of both elegance and playfulness. Simba's penchant for play is as pronounced as his air of nobility. His agile movements and graceful leaps mimic those of the most skilled hunters, yet his playfulness is infectious, drawing in all who cross his path."
    };

    return (
        <PetDetails pet={simbaDetails} />
    );
        
        

}

export default Simba