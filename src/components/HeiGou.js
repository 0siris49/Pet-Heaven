import React from "react";
import heigou from './picture/heigou.jpg'
import PetDetails from './PetDetailsComponent'; 

const HeiGou = () => {
    const heigouDetails = {
    name: "HeiGou",
    image: heigou,
    gender: "Male",
    birthYear: 2019,
    sterilized: true,
    hdbApproved: false,
    age: "4 years old",
    temperament: "Active, Friendly",
    microchipped: true,
    description: "HeiGou, with his exuberant and friendly personality, exudes an infectious playfulness. He adores standing on his hind legs to greet you with enthusiastic face licks. A true food lover, he prefers uninterrupted meals. But due to his strength on walks, an experienced handler would be best suited to manage his strong pulling tendencies. HeiGou favors brief strolls and is anxious around storms and loud car horns."
};

return (
    <PetDetails pet={heigouDetails} />
);
    
    

}

export default HeiGou