// frontend/src/Components/IDCard/IDCard.jsx
import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import PrintableIdCard from '../PrintableIdCard/PrintableIdCard';
import './IDCard.css';
import download from '../Assets/download.svg';
import print from '../Assets/print.svg';
import back from '../Assets/chevron-left.svg';
import idData from '../Assets/idData'; 

const IDCard = () => {
    const { phone } = useParams(); 
    const idCardRef = useRef(); 
    const navigate = useNavigate(); 
    const [cardData, setCardData] = React.useState(null);

    React.useEffect(() => {
        // Fetch the card data based on phone number
        const data = idData.find(card => card.phone === phone);
        setCardData(data);
    }, [phone]);

const handleDownload = async () => {
        if (idCardRef.current) {
            // Capture the content of the IdCard component
            const canvas = await html2canvas(idCardRef.current, { scale: 2 } );
            const imgData = canvas.toDataURL('image/png');
            
            // Create a PDF document
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            // Add image to PDF
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // If there is more content to be added, add a new page
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the PDF
            pdf.save('id-card.pdf');
        }
    };
    
    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="id-card-container">
            <div className='back' onClick={handleGoBack}>
                <img className='icon-back' src={back} alt="Go back"/>
                    <strong> Go back </strong>
                </div>
            <div className="id-card-actions">
                <button className='action-button-download' onClick={handleDownload}>
                    <img className='icon' src={download} alt="download"/> Download
                </button>
                <ReactToPrint
                    trigger={() => (
                        <button className='action-button-print'>
                            <img className='icon' src={print} alt="print"/> Print
                        </button>
                    )}
                    content={() => idCardRef.current}
                />
            </div>
            <div className="id-card-data">
            {cardData && (
                <PrintableIdCard
                    ref={idCardRef}
                    phone={phone}
                    cardData={cardData} // Pass cardData to PrintableIdCard
                />
            )}
            </div>
        </div>
    );
};

export default IDCard;