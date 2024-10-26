// frontend/src/Components/RelatedProperty/RelatedProperty.jsx


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import default styles
import './RelatedProperty.css'; // Import custom styles
import property from '../Assets/property';

const RelatedProperty = ({ selectedType }) => {
  const relatedProperties = property.filter(item => item.type === selectedType);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='relatedproperty'>
      <h1>Related Property</h1>
      <hr />
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
        swipeable={true}
        draggable={true}
        showDots={true}
        className='carousel-related'
      >
        {relatedProperties.length > 0 ? (
          relatedProperties.map((item) => (
            <Link 
              to={`/property/${item.id}`} 
              className='property-card' 
              key={item.id} 
              onClick={handleScrollToTop} // Scroll to top on click
            >
              <img src={item.images[0]} alt={item.title} className='property-image'/>
              <h2>{item.title}</h2>
              <p>Address: {item.address}</p>
              <p>Type: {item.propertyDeal}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.salePrice ? `₦${item.salePrice.toLocaleString()}` : `₦${item.rentPrice.toLocaleString()}`}</p>
            </Link>
          ))
        ) : (
          <p>No properties found for the selected type.</p>
        )}
      </Carousel>
    </div>
  );
};

export default RelatedProperty;
