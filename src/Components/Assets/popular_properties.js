// Import images
import p1_img from "./welcome/p1.png";
import p2_img from "./welcome/p2.png";
import p3_img from "./welcome/p3.png";
import p4_img from "./welcome/p4.png";
import p5_img from "./welcome/p5.png";
import p6_img from "./welcome/p6.png";
import p7_img from "./welcome/p7.png";
import p8_img from "./welcome/p8.png";
import p9_img from "./welcome/p9.png";
import p10_img from "./welcome/p10.png";
import p11_img from "./welcome/p11.png";
import p12_img from "./welcome/p12.png";
import p13_img from "./welcome/p13.png";
import p14_img from "./welcome/p14.png";
import p15_img from "./welcome/p15.png";
import p16_img from "./welcome/p16.png";
import p17_img from "./welcome/p17.png";
import p18_img from "./welcome/p18.png";
import p19_img from "./welcome/p19.png";
import p20_img from "./welcome/p20.png";
import p49_img from "./welcome/p49.jpeg";
import p50_img from "./welcome/p50.jpg";
import p51_img from "./welcome/p51.jpg";
import p60_img from "./welcome/p60.jpg";
import p61_img from "./welcome/p61.jpg";
import p62_img from "./welcome/p62.jpg";



// Example array of property objects with images
const popular_properties = [{
        id: 1,
        title: "2 Bedroom Luxury Apartment",
        address: "House 123 Main Street",
        propertyDeal: "Sale", // or "Rent"
        size: "1500 sq ft",
        subTitle: "Two Bedroom",
        furnishing: "UnFurnished",
        condition: "Newly-built",
        toilets: 2,
        rentPrice: null, // Use null for sale properties
        salePrice: 50000000, // Use null for rent properties
        serviceCharge: 1500000, // Monthly service charge
        cautionFee: 2000000, // Security deposit
        legalFee: 500000, // Legal fees for the transaction

        /*{additionalFeatures: [
            "Balcony",
            "Gym",
            "Swimming Pool",
            "24/7 Security"
        ],*/

        images: [p1_img, p2_img, p3_img, p4_img, p5_img, p6_img, p7_img, p8_img, p9_img], // Update with actual images
        contact: {
            landordName: "John Doe",
            landlordPhone: "+1234567890",
            landlordEmail: "johndoe@example.com"
        }
    },
    {
        id: 2,
        title: "Cozy Studio Apartment",
        address: "House 45 Elm Street",
        propertyDeal: "Rent",
        size: "600 sq ft",
        subTitle: "Studio",
        furnishing: "Furnished",
        condition: "Renovated",
        toilets: 1,
        rentPrice: 800000, // Monthly rent price
        salePrice: null, // Use null for rent properties
        serviceCharge: 150000, // Monthly service charge
        cautionFee: 180000, // Security deposit
        legalFee: null, // Not applicable for rental
        rentValidity: "1 year",

        /* additionalFeatures: [
            "Close to public transport",
            "High-speed internet"
        ], */

        images: [p49_img, p50_img, p51_img], // Update with actual images
        contact: {
            landlordName: "Jane Smith",
            landlordPhone: "+0987654321",
            landlordEmail: "janesmith@example.com"
        }
    },
    {
        id: 3,
        title: "2 Bedroom Apartment",
        address: "House 2, Suburbia Street",
        propertyDeal: "Rent",
        size: "600 sq ft",
        subTitle: "Studio",
        furnishing: "Unfurnished",
        condition: "Renovated",
        toilets: 1,
        rentPrice: 800000, // Monthly rent price
        salePrice: null, // Use null for rent properties
        serviceCharge: 150000, // Monthly service charge
        cautionFee: 180000, // Security deposit
        legalFee: null, // Not applicable for rental
        rentValidity: "1 year",
        images: [p10_img, p11_img, p12_img, p13_img, p14_img, p15_img, p16_img, p17_img, p18_img, p19_img, p20_img], // Update with actual images
        contact: {
            landlordName: "Jonathan Smith",
            landlordPhone: "+0187654321",
            landlordEmail: "jonathansmith@example.com"
        }
    },
    {
        id: 4,
        title: "Self-Contain Apartment",
        address: "House 6 Koso Street",
        propertyDeal: "Rent",
        size: "200 sq ft",
        subTitle: "Self-Contain",
        furnishing: "UnFurnished",
        condition: "Renovated",
        toilets: 1,
        rentPrice: 300000, // Monthly rent price
        salePrice: null, // Use null for rent properties
        serviceCharge: 50000, // Monthly service charge
        cautionFee: 30000, // Security deposit
        legalFee: null, // Not applicable for rental
        rentValidity: "1 year",
        images: [p60_img, p61_img, p62_img], // Update with actual images
        contact: {
            landlordName: "Joro Smith",
            landlordPhone: "+0447654329",
            landlordEmail: "jorosmith@example.com"
        }
    },


    // Add more properties as needed
];

export default popular_properties;