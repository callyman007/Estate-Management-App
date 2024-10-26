// frontend/src/Components/IDContainer/IDContainer.jsx
import React, { useState, useEffect } from 'react';
import './IDContainer.css'; // Import the CSS file for styling
import idData from '../Assets/idData'; // Correct path and default import
import logo from '../Assets/logo.PNG';

const IdCard = ({ phone }) => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setError(null);
      try {
        console.log('Fetching data for Phone:', phone); // Log the phone parameter
        const data = idData.find(card => card.phone === phone);
        if (!data) {
          throw new Error('No data found for the given phone number.');
        }
        console.log('Found data:', data); // Log the found data
        setCardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [phone]); // Dependency array now contains only phone

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!cardData) {
    return <p>No data available.</p>;
  }

  return (
    <div className="cardContainer">
      
      <div className="idNumber">{cardData.id_no}</div>
      <img src={logo} alt="NBCCL" className='logo' />
      <div className='header'>NAVY ESTATE KARSHI</div>
      <div className='id-type'>{ cardData.role } ID CARD</div>
      <div className="cardContent">
        <img src={cardData.image} alt="ID" className="image" />
        <div className="watermark"><img src={logo} alt="watermark" /></div>
        <div className="info">
          <div><strong>Name:</strong> { cardData.name }</div>
          <div><strong>Gender:</strong> { cardData.sex }</div>
          <div><strong>Phone:</strong> { cardData.phone }</div>
          <div><strong>Issuance Date:</strong> { cardData.date }</div>
          <div><strong>Validity:</strong> { cardData.validity }</div>
        </div>
        <div className='address'>{ cardData.address }</div>
        <div className='auth'><strong>Issuing Authority:</strong> { cardData.issuing_authority }</div>
      </div>
    </div>
  );
};

export default IdCard;
