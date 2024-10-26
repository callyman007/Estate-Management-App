// frontend/src/Components/PropertyList/PropertyList.jsx


import React from 'react';
import { Link } from 'react-router-dom';
import property from '../Assets/property';
import './PropertyList.css';

const PropertyList = () => {
  return (
    <section className='property-lists'>
      <div className='property-lists-title'>
      <h1>All Properties</h1>
      </div>
      <div className="property-list-items">
        {property.length > 0 ? (
          property.map((item) => (
            <article key={item.id} className="property-list-article">
              <Link to={`/property/${item.id}`} text-decoration='none'>
                <img src={item.images[0]} alt={item.title || 'Property Image'} className="property-list-image" loading="lazy" />
                <p className="property-list-title">{item.title}</p>
                <p className='property-list-address'>{item.address}</p>
                <p className="property-list-price">
                  {item.propertyDeal === 'Rent' ? `Rent: ₦${item.rentPrice.toLocaleString()}` : `Sale: ₦${item.salePrice.toLocaleString()}`}
                </p>
              </Link>
            </article>
          ))
        ) : (
          <p>No properties available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default PropertyList;
