// frontend/src/Components/PopularProperties/PopularProperties.jsx


import React from 'react';
import { Link } from 'react-router-dom';
import './PopularProperties.css';
import popularProperties from '../Assets/popular_properties'; // Use camelCase for consistency
import PropertyItem from '../PropertyItem/PropertyItem'; // Adjust the import path as needed

const PopularProperties = () => {
  return (
    <div className='popular-properties'>
      <div className="popular-property-title">
        <h1>POPULAR PROPERTIES</h1>
        <Link to="/PropertyList" className="popular-property-see-all">See All</Link>
      </div>
      
      <div className="popular-property-items">
        {popularProperties.map((item) => (
          <PropertyItem
            key={item.id}
            id={item.id}
            title={item.title}
            address={item.address}
            image={item.images[0]} // Display only the first image
            price={
              item.rentPrice 
                ? `₦${item.rentPrice.toLocaleString()}`
                : item.salePrice 
                  ? `₦${item.salePrice.toLocaleString()}`
                  : 'Price not available'
            } 
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProperties;
