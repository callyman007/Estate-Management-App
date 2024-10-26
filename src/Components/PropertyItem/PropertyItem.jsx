// frontend/src/Components/PropertyItem/PropertyItem.jsx


import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyItem.css'; // Ensure you have corresponding styles

const PropertyItem = ({ id, title, address, image, price }) => {
  return (
    <Link to={`/property/${id}`} className='property-item'>
      <img src={image} alt={title} className='property-item-image' />
      <p className='property-item-title'>{title}</p>
      <p className='property-item-address'>{address}</p>
      <p className='property-item-price'>{price}</p>
    </Link>
  );
};

export default PropertyItem;
