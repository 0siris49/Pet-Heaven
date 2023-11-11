import React from "react";
import ginger from './picture/ginger.jpg'
import PetDetails from './PetDetailsComponent'; 


const Ginger = () => {
    const gingerDetails = {
    name: "Ginger",
    image: ginger,
    gender: "Male",
    birthYear: 2011,
    sterilized: true,
    hdbApproved: true,
    age: "10 years old",
    temperament: "Careful, Shy, Relax",
    microchipped: false,
    description: "Ginger, a stray cat discovered by us, bore the wounds of cruelty inflicted by heartless abusers. Despite the pain etched into every cautious movement, a resilient spirit flickered within those haunted eyes. Each tender touch offered a glimpse of trust in the making, a fragile bridge between a past of torment and the possibility of a future cradled in safety and kindness. Adopters who are patient and loving is most preferred."
};

return (
    <PetDetails pet={gingerDetails} />
);

}

export default Ginger