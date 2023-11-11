
import React, { useState } from 'react';
import './RehomingForm.css';

const RehomingForm = () => {
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmailAddress] = useState('');
    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petColour, setPetColour] = useState('');
    const [petType, setPetType] = useState('');
    const [petGender, setPetGender] = useState('');
    const [trained, setTrained] = useState('');
    const [microchipped, setMicrochipped] = useState('');
    const [sterilised, setSterilised] = useState('');
    const [photos, setPhotos] = useState(null);
    const [medicalhistory, setMedicalHistory] = useState('');
    const [animalpersonality, setAnimalPersonality] = useState('');
    const [rehomingreasons, setRehomingReasons] = useState('');
    const [agreeDataStorage, setAgreeDataStorage] = useState(false);
    const [agreePublishing, setAgreePublishing] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Pet Name:', petName);
        console.log('Pet Type:', petType);
        console.log('Photos:', photos);
    };

    const handleFileChange = (e) => {
        // Set the selected files in the state
        setPhotos(e.target.files);
    };

    return (
        <div className="rehoming-form-container">

            <div className='user-form-container'>
                <h2 className='userTitle'> Your Information</h2>
                <div>
                <label>Name</label>
                <input
                        type="text"
                        id="Name"
                        value={userName}
                        placeholder=" Your name"
                        onChange={(e) => setUserName(e.target.value)}
                        size="50"
                    />
                </div>
                
                <div>
                <label>Phone</label>
                <input
                        type="text"
                        id="Phone"
                        value={phone}
                        placeholder=" Your Phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        size="40"
                    />
                </div>

                <div>
                <label>Email</label>
                <input
                        type="text"
                        id="Email"
                        value={email}
                        placeholder=" Your Email address"
                        onChange={(e) => setEmailAddress(e.target.value)}
                        size="50"
                    />
                </div>
            </div>


            <form onSubmit={handleSubmit}>
                <div className='animal-form-container'>
                <h2 className='animalTitle'>Animal's Information</h2>
                
                <div className="form-group">
                    <label className="petName">Pet Name:</label>
                    <input
                        type="text"
                        id="petName"
                        value={petName}
                        placeholder="Pet's name"
                        onChange={(e) => setPetName(e.target.value)}
                        size="50"
                    />
                </div>
                
                <div className=''>
                <div className="form-group">
                    <label className="petType">Type of Pet:</label>
                    <input
                        type="text"
                        id="petType"
                        value={petType}
                        placeholder="Cat/Dog"
                        onChange={(e) => setPetType(e.target.value)}
                        size="50"
                    />
                </div>
                </div>

                <div className="form-group">
                    <label className="petBreed">Breed:</label>
                    <input
                        type="text"
                        id="petBreed"
                        value={petBreed}
                        placeholder="Pet's breed"
                        onChange={(e) => setPetBreed(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="petAge">Age:</label>
                    <input
                        type="text"
                        id="petAge"
                        value={petAge}
                        placeholder="Pet's age"
                        onChange={(e) => setPetAge(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="petName">Colour:</label>
                    <input
                        type="text"
                        id="petColour"
                        value={petColour}
                        placeholder="Colour of pet"
                        onChange={(e) => setPetColour(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="petGender">Gender:</label>
                    <select
                        id="petGender"
                        value={petGender}
                        onChange={(e) => setPetGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                
                
                <div className='form-buttons'>
                    <label className="trained">Has the pet been trained?</label>
                    <div className="radio-buttons">
                        <label>
                            <span>Yes</span>
                            <input
                                type="radio"
                                value="yes"
                                checked={trained === 'yes'}
                                onChange={() => setTrained('yes')}
                            />

                        </label>

                        <label>
                            <span>No</span>
                            <input
                                type="radio"
                                value="no"
                                checked={trained === 'no'}
                                onChange={() => setTrained('no')}
                            />

                        </label>
                    </div>
                    </div>

                <div className="form-buttons">
                    <label className="microchipped">Has the pet been microchipped?</label>
                    <div className="radio-buttons">
                        <label>
                            <span>Yes</span>
                            <input
                                type="radio"
                                value="yes"
                                checked={microchipped === 'yes'}
                                onChange={() => setMicrochipped('yes')}
                            />

                        </label>

                        <label>
                            <span>No</span>
                            <input
                                type="radio"
                                value="no"
                                checked={microchipped === 'no'}
                                onChange={() => setMicrochipped('no')}
                            />

                        </label>
                    </div>
                </div>

                <div className="form-buttons">
                    <label className="sterilised">Has the pet been Sterilised?</label>
                    <div className="radio-buttons">
                        <label>
                            <span>Yes</span>
                            <input
                                type="radio"
                                value="yes"
                                checked={sterilised === 'yes'}
                                onChange={() => setSterilised('yes')}
                            />

                        </label>

                        <label>
                            <span>No</span>
                            <input
                                type="radio"
                                value="no"
                                checked={sterilised === 'no'}
                                onChange={() => setSterilised('no')}
                            />

                        </label>
                    </div>
                    </div>
               
                <div className="form-group">
                    <label className="medicalhistory">Medical history:</label>
                    <textarea
                        id="medicalhistory"
                        value={medicalhistory}
                        placeholder="Please type your message here"
                        onChange={(e) => setMedicalHistory(e.target.value)}
                        rows={4}
                        cols={40}
                    />
                </div>

                <div className="form-group">
                    <label className="animalpersonality">Animal personality (likes, dislikes, quirks, etc.):</label>
                    <textarea
                        id="animalpersonality"
                        value={animalpersonality}
                        placeholder="Please type your message here"
                        onChange={(e) => setAnimalPersonality(e.target.value)}
                        rows={4}
                        cols={40}
                    />
                </div>

                <div className="form-group">
                    <label className="rehomingreasons">Your Reasons for rehoming the animal/ others:</label>
                    <textarea
                        id="rehomingreasons"
                        value={rehomingreasons}
                        placeholder="Please type your message here"
                        onChange={(e) => setRehomingReasons(e.target.value)}
                        rows={4}
                        cols={40}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="photos">Please attach clear photos/videos of the animal(s):</label>
                    <input
                        type="file"
                        id="photos"
                        onChange={handleFileChange}
                        multiple // Allow multiple file selection
                    />
                    <p className='photoNote'>Note: Good photographs significantly increase their chances of being adopted.</p>
                </div>
                </div>

                

            <div className='disclaimer-form-container'>
                <div>Disclaimer*</div>
                    <div className='form-row'>
                    <label className='checkbox-label'>
                        <input
                            type="checkbox"
                            checked={agreeDataStorage}
                            onChange={() => setAgreeDataStorage(!agreeDataStorage)}
                        />
                        <span className='disclaimerspan'>I agree that my data is stored and collected.</span>
                    </label>
                    </div>
                    
                    <div className='form-row'>
                    <label className='checkbox-label'>
                        <input
                            type="checkbox"
                            checked={agreePublishing}
                            onChange={() => setAgreePublishing(!agreePublishing)}
                        />
                        <span className='disclaimerspan'>By submitting this form, I agree to Pet Heaven Society's publishing my personal data on Pet Heaven Society’s Rehoming Notice Board webpage.</span>
                    </label>
                    </div>
            </div>
                
                

                <button type="submit" className='rehomebutton'>Submit</button>
            </form>


        </div>



    );
};

export default RehomingForm;
