import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav>
      <div className='menuitem'>
        <Link to='/' className="doglogo">
          <img src="/shydoglogo.jpg" height="80" width="80" alt="Logo" />
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/adoption'>Adoption</Link>
        {isLoggedIn ? (
          <>
            <Link to='/rehoming'>Rehoming</Link>
            {/* Other links for authenticated users */}
            <Link to='/' onClick={onLogout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to='/register' className='register'>Register</Link>
            <Link to='/signin' className='signin'>Sign-in</Link>
          </>
        )}
        {/* Always show this link */}
        <Link to='/donate'>Donate</Link>
      </div>
    </nav>
  );
};

export default NavBar;
