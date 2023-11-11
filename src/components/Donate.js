import React, { useState } from 'react';
import './Donate.css';
import Footer from './Footer'
import imageD from './picture/imageD.jpg'

const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission or validation
    // Add your logic here
  };

  return (
    <>
    <div className="donate-container">
      <h1 className="donate-header">Make a Significant Contribution to Help Animals in Need</h1>

      <p className="donate-description">
        Your generous contribution will directly impact the lives of animals in need by providing them with essential resources and care. Every contribution makes a significant difference in their well-being.
      </p>
        {/* <div className='imageD'>
            <img src={imageD} className='imageD'/>
        </div> */}

      <form onSubmit={handleSubmit} className="donate-form">
        <label htmlFor="donationAmount">Donation Amount:</label>
        <input
          type="number"
          id="donationAmount"
          name="donationAmount"
          placeholder="Your donation amount"
        />


        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="check">Check</option>
        </select>

        {paymentMethod === 'paypal' && (
          <div>
            <label htmlFor="paypalEmail">PayPal Email Address:</label>
            <input type="email" id="paypalEmail" name="paypalEmail" />
          </div>
        )}

        {paymentMethod === 'check' && (
          <div>
            <label htmlFor="checkNumber">Check Number:</label>
            <input type="text" id="checkNumber" name="checkNumber" />
            <label htmlFor="routingNumber">Routing Number:</label>
            <input type="text" id="routingNumber" name="routingNumber" />
          </div>
        )}

        {paymentMethod === 'credit-card' && (
          <div>
            <label htmlFor="creditCardNumber">Credit Card Number:</label>
            <input type="text" id="creditCardNumber" name="creditCardNumber" />
            <label htmlFor="expirationDate">Expiration Date:</label>
            <input type="date" id="expirationDate" name="expirationDate" />
            <label htmlFor="cVCode">CVV Code:</label>
            <input type="text" id="cVCode" name="cVCode" />
          </div>

          
        )}

        <button type="submit">Make a Donation</button>
      </form>

      <div className="donate-impact">
        <h3>Your donation makes a difference today!</h3>

        <p>Your contribution will help us provide:</p>

        <ul>
          <li>Nutritious meals for hungry animals</li>
          <li>Safe and comfortable shelter for animals without permanent homes</li>
          <li>Essential veterinary care for animals in need of medical attention</li>
          <li>Adoption programs that connect loving homes with animals in need</li>
        </ul>

        <p>Thank you for your generosity. Together, we can make a world of difference for animals in need!</p>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer />
    </>
  );
};

export default Donate;
