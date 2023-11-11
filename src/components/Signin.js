import React, { useState } from 'react';
import './Signin.css';

const Signin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check credentials - In a real app, this should be replaced with a backend or authentication service call
    if (email === 'admin@phs.com' && password === 'admin') {
      // Simulating a successful login
      onLogin(); // Trigger the login function passed from the parent component
      setLoginError(false); // Reset any previous login error
      
    } else if (email === 'john@gmail.com' && password === 'john') {
      // Simulating another set of valid credentials
      onLogin(); // Trigger the login function passed from the parent component
      setLoginError(false); // Reset any previous login error
      
    } else {
      // Invalid credentials
      setLoginError(true);
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      {loginError && <p className="error-message">Invalid username or password</p>}
      <form onSubmit={handleSubmit}>
        <label>Email address:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
