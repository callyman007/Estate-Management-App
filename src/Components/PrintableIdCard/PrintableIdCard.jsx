// frontend/src/Components/PrintableIdCard/PrintableIdCard.jsx


import React, { forwardRef } from 'react';
import IdCard from '../IDContainer/IDContainer'; // Ensure this path is correct

const PrintableIdCard = forwardRef((props, ref) => {
    const { phone, cardData } = props; // Access cardData from props

    return (
        <div className="id-card" ref={ref}>
            <h1>{cardData ? `${cardData.role} ID Card` : 'ID Card'}</h1>
            <IdCard phone={phone} /> {/* Pass phoneNumber as a prop */}
        </div>
    );
});

export default PrintableIdCard;
