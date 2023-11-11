import React from "react";
import hoji from './picture/Hoji.jpg'
import PetDetails from './PetDetailsComponent'; 

const Hoji = () => {
    const hojiDetails = {
        name: "Hoji",
        image: hoji,
        gender: "Female",
        birthYear: 2023,
        sterilized: true,
        hdbApproved: true,
        age: "9 Months",
        temperament: "Cuddly, Warm",
        microchipped: false,
        description: "Hoji, the enchanting feline with a fur coat that feels like a cascade of silk. She has an intuitive understanding of when you need a comforting nuzzle or a reassuring paw on your lap. Hoji is not just a pet; she's a confidante, a source of solace in the hectic dance of life."
    };

    return (
        <PetDetails pet={hojiDetails} />
    );
};

export default Hoji;
