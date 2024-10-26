// frontend/src/Components/PropertyDetails/PropertyDetails.jsx


import React, { useReducer, useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import property from '../Assets/property';
import './PropertyDetails.css';
import RelatedProperty from '../RelatedProperty/RelatedProperty';

// Define the reducer function
const imageReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return { currentIndex: (state.currentIndex + 1) % action.totalImages };
    case 'PREV':
      return { currentIndex: (state.currentIndex - 1 + action.totalImages) % action.totalImages };
    case 'SET_INDEX':
      return { currentIndex: action.index };
    default:
      return state;
  }
};

const PropertyDetails = () => {
  const { id } = useParams();
  const propertyItem = property.find((item) => item.id === parseInt(id));

  // Initialize useReducer for image index management
  const totalImages = propertyItem.images.length;
  const [state, dispatch] = useReducer(imageReducer, { currentIndex: 0 });

  // State for the inspection form modal
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // Data related to images
  const images = propertyItem.images;
  const imagesToShow = 4; // Main image + 3 thumbnails
  const remainingImagesCount = totalImages > imagesToShow ? totalImages - imagesToShow : 0;

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Collect form data and handle form submission logic here
    alert('Form submitted!'); // Replace with actual form submission logic
    setShowModal(false); // Close modal after submission
  };
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    // Cleanup listener on component unmount
return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);
  

  return (
    <div className='property-details'>
      <div className='breadcrumbs'>
        <Link to='/'>Home</Link> &gt;
        <Link to='/PropertyList'>Properties</Link> &gt;
        <span>{propertyItem.title}</span>
      </div>

      <div className='property-header'>
        <p className='property-title'>{propertyItem.title}</p>
        <p className='property-location'>{propertyItem.address}</p>
      </div>

      <div className='property-gallery'>
        <div className='carousel'>
          {images.slice(0, imagesToShow).map((img, index) => (
            <div className='thumbnail-container' key={index}>
              {index === imagesToShow - 1 && remainingImagesCount > 0 ? (
                <>
                  <img
                    src={img}
                    alt={`Thumbnail for ${propertyItem.title}`}
                    className='thumbnail'
                    onClick={() => dispatch({ type: 'SET_INDEX', index })}
                  />
                  <div className='thumbnail-overlay'>
                    <p>+{remainingImagesCount}</p>
                  </div>
                </>
              ) : (
                <img
                  src={img}
                  alt={`Thumbnail for ${propertyItem.title}`}
                  className={`thumbnail ${index === state.currentIndex ? 'active' : ''}`}
                  onClick={() => dispatch({ type: 'SET_INDEX', index })}
                />
              )}
            </div>
          ))}
        </div>

        <div className='main-image-container'>
          <button className='nav-button prev' onClick={() => dispatch({ type: 'PREV', totalImages })} aria-label='Previous image'>Prev</button>
          <img
            src={images[state.currentIndex]}
            alt={`Main view of ${propertyItem.title}`}
            className='main-image'
          />
          <button className='nav-button next' onClick={() => dispatch({ type: 'NEXT', totalImages })} aria-label='Next image'>Next</button>
        </div>

        <div className="right-sidebar">
          <div className="property-price">
            <div className="pay-type">
              {propertyItem.salePrice
                ? `₦${propertyItem.salePrice.toLocaleString()}`
                : propertyItem.rentPrice
                ? `₦${propertyItem.rentPrice.toLocaleString()}`
                : 'Not applicable'
              }
              <span>{propertyItem.paymentType}</span>
            </div>

              <div className="property-price-buttons">
                <div className="bargain-type">{propertyItem.bargainType}</div>
                <div className='apply-inspection-button' onClick={() => setShowModal(true)}>Apply for Inspection</div>
              </div>
              
            </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <button className='close-modal' onClick={() => setShowModal(false)} aria-label='Close modal'>×</button>
            <h2>Apply for Inspection</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Full Name:
                <input  className='input' type="text" name="fullName" required />
              </label>
              <label>
                Phone Number:
                <input className='input' type="tel" name="phoneNumber" required />
              </label>
              <label>
                Email Address:
                <input className='input' type="email" name="emailAddress" required />
              </label>
              <label>
                Preferred Date:
                <input className='input' type="date" name="preferredDate" required />
              </label>
              <p>Inspection Fee: ₦5,000 only!</p>
              <label className='form-label'>
                Payment Receipt:
                <input type="file" name="paymentReceipt" accept="image/*,application/pdf" required />
              </label>
              <button type="submit-button" className='inspection-submit-button'>Submit</button>
            </form>
          </div>
        </div>
      )}
          
          <div className="safety-tips">
            <h3>Important Safety Tips</h3>
            <ul>
              <li>Avoid paying for inspections in advance.</li>
              <li>Limit visitor tags to a maximum of three people during inspections.</li>
              <li>Inspect the environment to ensure it meets your expectations.</li>
              <li>Request the estate’s rules and regulations to ensure compliance.</li>
              <li>Confirm that the account details belong to the landlord before making any payments.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='property-info'>
        <div className='property-details-section'>
          <h2>Details</h2>
          <p className='property-type'>Property: {propertyItem.type}</p>
          <p className='property-size'>Size: {propertyItem.size}</p>
          <p className='property-subtype'>Sub-Type: {propertyItem.subType}</p>
          <p>Furnishing: {propertyItem.furnishing}</p>
          <p>Condition: {propertyItem.condition}</p>
          <p>Toilets: {propertyItem.toilets}</p>
          <p>Rent Price: {propertyItem.rentPrice ? `₦${propertyItem.rentPrice.toLocaleString()}` : 'Not applicable'}</p>
          <p>Sale Price: {propertyItem.salePrice ? `₦${propertyItem.salePrice.toLocaleString()}` : 'Not applicable'}</p>
          <p>Service Charge: {propertyItem.serviceCharge ? `₦${propertyItem.serviceCharge.toLocaleString()}` : 'Not applicable'}</p>
          <p>Caution Fee: {propertyItem.cautionFee ? `₦${propertyItem.cautionFee.toLocaleString()}` : 'Not applicable'}</p>
          <p>Legal Fee: {propertyItem.legalFee ? `₦${propertyItem.legalFee.toLocaleString()}` : 'Not applicable'}</p>
        </div>

        <div className='property-contact'>
          <h2>Contact</h2>
          <p>Landlord: {propertyItem.contact.landlordName}</p>
          <p>Phone: {propertyItem.contact.landlordPhone}</p>
        </div>
      </div>

      <div className="related-property">
        {/* Pass the selected type to RelatedProperty */}
        <RelatedProperty selectedType={propertyItem.type} />
      </div>
    </div>
  );
};

export default PropertyDetails;
