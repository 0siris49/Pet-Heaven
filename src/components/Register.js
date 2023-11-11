import "./Register.css";
import Footer from "./Footer";
import React from "react";

const Register = () => {
    return( 
        <>
        <br/>
        <h1 className="h1Register"> Register for an account with Pet Heaven Society </h1>
        <br/>
        <p className="pRegister">Welcome to Pet Heaven Society.</p>
        <p className="pRegister">Please fill in the form below to create your account.</p>
        <br/>
        <div class="signup">
            <form>
            <h3 className="h3Register">New Account</h3><br/>
            <p className="pRegister">We just need some basic information to create your account.</p>
            <input type="text" id="fname" name="fname" placeholder="Your first name" />
            <input type="text" id="lname" name="lname" placeholder="Your last name"/><br/>
            <input type="text" id="lname" name="lname" placeholder="Your email address"/><br/><br/>
            <p className="pRegister">Please enter a secure password to access your account.</p>
            <input type="text" id="fname" name="fname" placeholder="Enter your password" />
            <input type="text" id="fname" name="fname" placeholder="Confirm Your password" /><br/>
            <button type="submit" className="buttonRegister">Create account and continue</button>
            </form>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <Footer />

        </>
        );
  };
  
  export default Register;
