import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Hoji from './picture/Hoji.jpg'
import Marty from './picture/marty.jpg'
import Ginger from './picture/ginger.jpg'
import Pudgy from './picture/pudgy.jpg'
import Simba from './picture/simba.jpg'
import HeiGou from './picture/heigou.jpg'
import './Adoption.css';

const Adoption = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [petType, setPetType] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets([
      { name: 'Hoji', type: 'cat', image: Hoji },
      { name: 'Marty', type: 'dog', image: Marty },
      { name: 'Ginger', type: 'cat', image: Ginger },
      { name: 'Pudgy', type: 'dog', image: Pudgy },
      { name: 'Simba', type: 'cat', image: Simba },
      { name: 'HeiGou', type: 'dog', image: HeiGou },
    ]);

    setFilteredPets(pets);
  }, []);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    const filteredPets = pets.filter((pet) => {
      return pet.name.toLowerCase().includes(newSearchTerm) && (petType === '' || petType === pet.type);
    });

    setFilteredPets(filteredPets);
  };

  const handlePetTypeChange = (event) => {
    setPetType(event.target.value);

    const filteredPets = pets.filter((pet) => {
      return pet.name.toLowerCase().includes(searchTerm) && (petType === '' || petType === pet.type);
    });

    setFilteredPets(filteredPets);
  };

  return (
    <>
      <div className="AG">Adoption Gallery</div>

      <input
        type="text"
        placeholder="Search for a pet"
        value={searchTerm}
        onChange={handleSearch}
      />
      <></>
      <select
        value={petType}
        onChange={handlePetTypeChange}
      >
        <option value="">All</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>

      <div className="AGM">
        We have many wonderful pets, both cats and dogs, that are looking for their forever homes.
        Please scroll through our gallery below to view their profiles, and click on them to contact us for further information about our adoption process and be sent an application form to complete.
        Thank you for choosing to adopt!
      </div>

      <div className="image-grid">
        {filteredPets.map((pet) => (
          <div className="imageA">
            <Link to={'/' + pet.name}>
              <img
                src={pet.image}
                alt={pet.name}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
              <div className="hover-text">{pet.name}</div>
            </Link>
          </div>
        ))}
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />

    </>
  );
}

export default Adoption;
