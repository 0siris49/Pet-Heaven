import React, { useState } from 'react';
import './AdoptionForm.css'

function AdoptionForm() {

  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    email: '',
    birthday: '',
    postalcode: '',
    gender: '',
    mobile: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); //logging the form data
  };

  return (
    <div className='form-container'>
      <h2 className='formname'>Adoption Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} /><br /><br />

        <label className="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            type="dropdown"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        
      
        <label className="nationality">Nationality:</label>
        <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} /><br /><br />

        <label className="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} /><br /><br />

        <label className="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" value={formData.birthday} onChange={handleInputChange} /><br /><br />

        <label className="postalcode">Postal Code:</label>
        <input type="text" id="postalcode" name="postalcode" value={formData.postalcode} onChange={handleInputChange} /><br /><br />

        <label className="mobile">Mobile:</label>
        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} /><br /><br />

        <label className="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleInputChange}></textarea><br /><br />
        <p className='note'>Note: Following the form submission, we'll be in touch shortly to schedule an appointment.</p>
        <input type="submit" value="I'm interested in adopting" />
      </form>
    </div>
  );
}

export default AdoptionForm;
