import React from "react";
import AdoptionForm from "./AdoptionForm";
import './PetDetailsComponent.css';




const PetDetails = ({ pet }) => {
 

const [adoptionFormVisible, setAdoptionFormVisible] = React.useState(false);

  const openAdoptionForm = () => {
    setAdoptionFormVisible(true);
  };



    const { name, image, gender, birthYear, sterilized, hdbApproved, age, temperament, microchipped, description } = pet;

    return (
        <>
        <div className="AdoptContainer">
            <div className="AdoptContent">
                <div className="AdoptText">
                    <h1 className="AnimalName">{name}</h1>
                    <ul>
                        <li>{gender}</li>
                        <li>Born in {birthYear}</li>
                        <li>{sterilized ? "Sterilized" : "Not Sterilized"}</li>
                        <li>{hdbApproved ? "HDB Approved" : "Not HDB Approved"}</li>
                        <li>Age: {age}</li>
                        <li>Temperament: {temperament}</li>
                        <li>{microchipped ? "Microchipped" : "Not Microchipped"}</li>
                    </ul>
                    <p className="AdoptDescription">
                        {description}
                    </p>
                    
                </div>
                
            </div>
            <img src={image} className="AdoptPic" alt={`${name} Image`} />
            
        </div>
        <button className="AdoptButton" onClick={() => {
            openAdoptionForm();
        }}>
            I'm Interested in adopting {name}
        </button>

        {adoptionFormVisible && <AdoptionForm />}
            
        </>
    );
};

export default PetDetails;
