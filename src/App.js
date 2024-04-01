import React, { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [leaseDuration, setLeaseDuration] = useState('');
  const [contractAmount, setContractAmount] = useState('');

  const handlePurchase = () => {
    console.log(`Property purchased at ${location} for ${price} with contract amount ${contractAmount}`);
  };

  const handleRental = () => {
    console.log(`Property rented at ${location} for ${price} with lease duration ${leaseDuration} and contract amount ${contractAmount}`);
  };

  return (
    <div className="container">
      <h1>Property Registry</h1>
      <div className="form">
        <label className="label" htmlFor="location">Location:</label>
        <input
          className="input"
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label className="label" htmlFor="price">Price:</label>
        <input
          className="input"
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label className="label" htmlFor="leaseDuration">Lease Duration (months):</label>
        <input
          className="input"
          type="number"
          id="leaseDuration"
          value={leaseDuration}
          onChange={(e) => setLeaseDuration(e.target.value)}
        />
        <label className="label" htmlFor="contractAmount">Contract Amount:</label>
        <input
          className="input"
          type="number"
          id="contractAmount"
          value={contractAmount}
          onChange={(e) => setContractAmount(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handlePurchase}>Purchase Property</button>
        <button onClick={handleRental}>Rent Property</button>
      </div>
    </div>
  );
}

export default App;
