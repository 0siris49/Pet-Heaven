import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Adoption from './components/Adoption';
import About from './components/About';
import Home from './components/Home';
import Rehoming from './components/Rehoming';
import Register from './components/Register';
import Donate from './components/Donate';

import Signin from './components/Signin';
import Marty from './components/Marty';
import Hoji from './components/Hoji';
import Pudgy from './components/Pudgy';
import HeiGou from './components/HeiGou';
import Simba from './components/Simba';
import Ginger from './components/Ginger';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic for setting the login state upon successful authentication
    setIsLoggedIn(true);
   
  };

  const handleLogout = () => {
    // Logic for handling logout, resetting the login state
    setIsLoggedIn(false);
  };

  return (
    <>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/adoption' element={<Adoption />} />
            <Route path='/rehoming' element={<Rehoming />} />
            <Route path='/register' element={<Register />} />
            <Route path='/marty' element={<Marty />} />
            <Route path='/pudgy' element={<Pudgy />} />
            <Route path='/HeiGou' element={<HeiGou />} />
            <Route path='/simba' element={<Simba />} />
            <Route path='/ginger' element={<Ginger />} />
            <Route path='/hoji' element={<Hoji />} />
            <Route path='/donate' element={<Donate />} />

            <Route path='/signin' element={<Signin onLogin={handleLogin} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
