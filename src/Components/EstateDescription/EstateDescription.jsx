// frontend/src/Components/EstateDescription/EstateDescription.jsx

import React, { useState } from 'react';
import features from '../Assets/features';
import './EstateDescription.css';

const EstateDescription = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const handleFeatureClick = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="estate-container">
      <header className="estate-header">
        <p>Discover a blend of modern living and serene environment in Navy Estate Karshi, the ideal community for professionals, families, and retirees.</p>
      </header>
      <section className="estate-features">
        <h2>What We Have:</h2>
        <div className="features-list">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item ${expandedFeature === index ? 'expanded' : ''}`}
              onClick={() => handleFeatureClick(index)}
            >
              <div className="feature-title">
                <h3>{feature.title}</h3>
              </div>
              {expandedFeature === index && (
                <div className="feature-content">
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                  <div className="feature-info">
                    <p>{feature.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EstateDescription;
