import React from "react";
import marty from './picture/marty.jpg'
import PetDetails from './PetDetailsComponent'; 

const Marty = () => {
    const martyDetails = {
    name: "Marty",
    image: marty,
    gender: "Female",
    birthYear: 2022,
    sterilized: true,
    hdbApproved: true,
    age: "1 year 5 months old",
    temperament: "Shy, Gentle",
    microchipped: true,
    description: "Marty tends to approach new people cautiously and is still getting accustomed to enjoying walks. She finds walks more comfortable when accompanied by a familiar person but has a habit of trying to walk circles around you. Marty would flourish best in a calm home setting with an experienced, patient owner who can help him come out of his shell. Having another dog around would greatly assist, as Marty tends to experience some separation anxiety."
};

return (
    <PetDetails pet={martyDetails} />
);

}
    

export default Marty