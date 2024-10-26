// frontend/src/Components/ViewDigitalID/ViewDigitalID.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewDigitalID.css';

const ViewDigitalID = () => {
  const [phone, setPhone] = useState(''); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPhone(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/IDCard/${phone}`); 
  };

  return (
    <div className="view-digital-id">
      <div className="idcard-container">
        <h1>Enter Phone Number</h1> 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phone} 
            onChange={handleInputChange} 
            placeholder="Enter your phone number" 
            required
          />
          <button className='submit-id' type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default ViewDigitalID;
