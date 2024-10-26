// propertyDetails.js

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
import p21_img from "./welcome/p21.png";
import p22_img from "./welcome/p22.jpg";
import p23_img from "./welcome/p23.jpg";
import p24_img from "./welcome/p24.jpg";
import p25_img from "./welcome/p25.jpg";
import p26_img from "./welcome/p26.jpg";
import p27_img from "./welcome/p27.jpg";
import p28_img from "./welcome/p28.jpg";
import p29_img from "./welcome/p29.jpg";
import p30_img from "./welcome/p30.jpeg";
import p31_img from "./welcome/p31.jpeg";
import p32_img from "./welcome/p32.jpeg";
import p33_img from "./welcome/p33.jpeg";
import p34_img from "./welcome/p34.jpeg";
import p35_img from "./welcome/p35.jpeg";
import p36_img from "./welcome/p36.jpeg";
import p37_img from "./welcome/p37.png";
import p38_img from "./welcome/p38.jpeg";
import p39_img from "./welcome/p39.jpeg";
import p40_img from "./welcome/p40.jpeg";
import p41_img from "./welcome/p41.jpeg";
import p42_img from "./welcome/p42.jpeg";
import p43_img from "./welcome/p43.jpeg";
import p44_img from "./welcome/p44.jpeg";
import p45_img from "./welcome/p45.jpeg";
import p46_img from "./welcome/p46.jpeg";
import p47_img from "./welcome/p47.jpeg";
import p48_img from "./welcome/p48.jpeg";
import p49_img from "./welcome/p49.jpeg";
import p50_img from "./welcome/p50.jpg";
import p51_img from "./welcome/p51.jpg";
import p52_img from "./welcome/p52.jpg";
import p53_img from "./welcome/p53.jpg";
import p54_img from "./welcome/p54.jpg";
import p55_img from "./welcome/p55.jpg";
import p56_img from "./welcome/p56.jpg";
import p57_img from "./welcome/p57.jpg";
import p58_img from "./welcome/p58.jpg";
import p59_img from "./welcome/p59.jpg";
import p60_img from "./welcome/p60.jpg";
import p61_img from "./welcome/p61.jpg";
import p62_img from "./welcome/p62.jpg";
import p63_img from "./welcome/p63.jpg";
import p64_img from "./welcome/p64.jpg";
import p65_img from "./welcome/p65.jpg";
import p66_img from "./welcome/p66.jpg";
import p67_img from "./welcome/p67.jpg";
import p68_img from "./welcome/p68.jpg";
import p69_img from "./welcome/p69.jpg";
import p70_img from "./welcome/p70.jpg";
import p71_img from "./welcome/p71.jpg";
import p72_img from "./welcome/p72.jpg";
import p73_img from "./welcome/p73.jpg";



// Example array of property objects with images
const property = [
    {
        id: 1,
        title: "2 Bedroom Luxury Apartment",
        address: "House 123 Main Street",
        propertyDeal: "Sale",
        size: "1500 sq ft",
        subTitle: "Two Bedroom",
        furnishing: "Unfurnished",
        condition: "Newly-built",
        toilets: 2,
        rentPrice: null,
        salePrice: 50000000,
        serviceCharge: null,
        cautionFee: 2000000,
        legalFee: 500000,
        bargainType: "Non-negotiable",
        paymentType: "one-time payment",
        images: [p1_img, p2_img, p3_img, p4_img, p5_img, p6_img, p7_img, p8_img, p9_img],
        contact: {
            landlordName: "John Doe",
            landlordPhone: "+1234567890",
            landlordEmail: "johndoe@example.com"
        }
    }, {
        id: 2,
        title: "Cozy Studio Apartment",
        address: "House 45 Elm Street",
        propertyDeal: "Rent",
        size: "600 sq ft",
        subTitle: "Studio",
        furnishing: "Furnished",
        condition: "Renovated",
        toilets: 1,
        rentPrice: 800000,
        salePrice: null,
        serviceCharge: 150000,
        cautionFee: 180000,
        legalFee: null,
        bargainType: "Slightly negotiable",
        paymentType: "per annum",
        images: [p49_img, p50_img, p51_img],
        contact: {
            landlordName: "Jane Smith",
            landlordPhone: "+0987654321",
            landlordEmail: "janesmith@example.com"
        }
    }, {
        id: 3,
        title: "2 Bedroom Apartment",
        address: "House 2, Suburbia Street",
        propertyDeal: "Rent",
        size: "600 sq ft",
        subTitle: "Studio",
        furnishing: "Unfurnished",
        condition: "Renovated",
        toilets: 1,
        rentPrice: 800000,
        salePrice: null,
        serviceCharge: 150000,
        cautionFee: 180000,
        legalFee: null,
        bargainType: "Negotiable",
        paymentType: "per annum",
        images: [p10_img, p11_img, p12_img, p13_img, p14_img, p15_img, p16_img, p17_img, p18_img, p19_img, p20_img],
        contact: {
            landlordName: "Jonathan Smith",
            landlordPhone: "+0187654321",
            landlordEmail: "jonathansmith@example.com"
        }
    }, {
        id: 4,
        title: "Self-Contain Apartment",
        address: "House 6 Koso Street",
        propertyDeal: "Rent",
        size: "200 sq ft",
        subTitle: "Self-Contain",
        furnishing: "UnFurnished",
        condition: "Renovated",
        toilets: 1,
        rentPrice: 300000,
        salePrice: null,
        serviceCharge: 50000,
        cautionFee: 30000,
        legalFee: null,
        rentValidity: "1 year",
        bargainType: "Negotiable",
        images: [p60_img, p61_img, p62_img],
        contact: {
            landlordName: "Joro Smith",
            landlordPhone: "+0447654329",
            landlordEmail: "jorosmith@example.com"
        }
    }, {
        id: 5,
        title: "Modern 3 Bedroom Flat",
        address: "House 89 Park Avenue",
        propertyDeal: "Sale",
        size: "2000 sq ft",
        subTitle: "Flat",
        furnishing: "Semi-furnished",
        condition: "Well-maintained",
        toilets: 3,
        rentPrice: null,
        salePrice: 75000000,
        serviceCharge: null,
        cautionFee: 3000000,
        legalFee: 600000,
        paymentType: "one-time payment",
        bargainType: "Slightly negotiable",
        images: [p30_img, p31_img, p32_img, p33_img, p34_img, p35_img],
        contact: {
            landlordName: "Alice Brown",
            landlordPhone: "+1230984567",
            landlordEmail: "alicebrown@example.com"
        }
    }, {
        id: 6,
        title: "Charming 1 Bedroom Studio",
        address: "House 56 Pine Road",
        propertyDeal: "Rent",
        size: "450 sq ft",
        subTitle: "Studio",
        furnishing: "Furnished",
        condition: "Newly-renovated",
        toilets: 1,
        rentPrice: 500000,
        salePrice: null,
        serviceCharge: 80000,
        cautionFee: 100000,
        legalFee: null,
        paymentType: "per annum",
        bargainType: "Non-negotiable",
        images: [p40_img, p41_img, p42_img, p43_img],
        contact: {
            landlordName: "Bob Green",
            landlordPhone: "+0981234567",
            landlordEmail: "bobgreen@example.com"
        }
    }, {
        id: 7,
        title: "Spacious 4 Bedroom House",
        address: "House 101 Oak Street",
        propertyDeal: "Sale",
        size: "3000 sq ft",
        subTitle: "House",
        furnishing: "Unfurnished",
        condition: "Newly-built",
        toilets: 4,
        rentPrice: null,
        salePrice: 120000000,
        serviceCharge: null,
        cautionFee: 5000000,
        legalFee: 800000,
        paymentType: "one-time payment",
        bargainType: "Negotiable",
        images: [p50_img, p51_img, p52_img, p53_img, p54_img],
        contact: {
            landlordName: "Catherine White",
            landlordPhone: "+3210987654",
            landlordEmail: "catherinewhite@example.com"
        }
    }, {
        id: 8,
        title: "Compact 2 Bedroom Apartment",
        address: "House 78 Willow Lane",
        propertyDeal: "Rent",
        size: "800 sq ft",
        subTitle: "Apartment",
        furnishing: "Furnished",
        condition: "Good",
        toilets: 2,
        rentPrice: 650000,
        salePrice: null,
        serviceCharge: 120000,
        cautionFee: 150000,
        legalFee: null,
        paymentType: "per annum",
        bargainType: "Slightly negotiable",
        images: [p60_img, p61_img, p62_img, p63_img],
        contact: {
            landlordName: "Emma Black",
            landlordPhone: "+4567890123",
            landlordEmail: "emmablack@example.com"
        }
    }, {
        id: 9,
        title: "Luxury 5 Bedroom Villa",
        address: "House 33 Hilltop Drive",
        propertyDeal: "Sale",
        size: "5000 sq ft",
        subTitle: "Villa",
        furnishing: "Fully Furnished",
        condition: "Brand New",
        toilets: 5,
        rentPrice: null,
        salePrice: 150000000,
        serviceCharge: null,
        cautionFee: 8000000,
        legalFee: 1000000,
        paymentType: "one-time payment",
        bargainType: "Non-negotiable",
        images: [p70_img, p71_img, p72_img, p73_img],
        contact: {
            landlordName: "David Grey",
            landlordPhone: "+5678901234",
            landlordEmail: "davidgrey@example.com"
        }
    }, {
        id: 10,
        title: "Elegant 3 Bedroom House",
        address: "House 102 Maple Street",
        propertyDeal: "Sale",
        size: "2500 sq ft",
        subTitle: "House",
        furnishing: "Semi-furnished",
        condition: "Newly-built",
        toilets: 3,
        rentPrice: null,
        salePrice: 85000000,
        serviceCharge: null,
        cautionFee: 3000000,
        legalFee: 600000,
        paymentType: "one-time payment",
        bargainType: "Negotiable",
        images: [p21_img, p22_img, p23_img, p24_img, p25_img, p26_img],
        contact: {
            landlordName: "Samantha Grey",
            landlordPhone: "+6789012345",
            landlordEmail: "samanthagrey@example.com"
        }
    }, {
        id: 11,
        title: "Cozy 1 Bedroom Flat",
        address: "House 103 Cedar Avenue",
        propertyDeal: "Rent",
        size: "450 sq ft",
        subTitle: "Flat",
        furnishing: "Furnished",
        condition: "Renovated",
        toilets: 1,
        rentPrice: 400000,
        salePrice: null,
        serviceCharge: 50000,
        cautionFee: 100000,
        legalFee: null,
        paymentType: "per annum",
        bargainType: "Slightly negotiable",
        images: [p27_img, p28_img, p29_img],
        contact: {
            landlordName: "Mark Davis",
            landlordPhone: "+7890123456",
            landlordEmail: "markdavis@example.com"
        }
    }, {
        id: 12,
        title: "Spacious 4 Bedroom Duplex",
        address: "House 104 Birch Street",
        propertyDeal: "Sale",
        size: "3200 sq ft",
        subTitle: "Duplex",
        furnishing: "Unfurnished",
        condition: "Well-maintained",
        toilets: 4,
        rentPrice: null,
        salePrice: 95000000,
        serviceCharge: null,
        cautionFee: 4000000,
        legalFee: 700000,
        paymentType: "one-time payment",
        bargainType: "Negotiable",
        images: [p36_img, p37_img, p38_img, p39_img, p44_img, p45_img],
        contact: {
            landlordName: "Linda Brown",
            landlordPhone: "+8901234567",
            landlordEmail: "lindabrown@example.com"
        }
    }, {
        id: 13,
        title: "Charming Studio Apartment",
        address: "House 105 Elmwood Drive",
        propertyDeal: "Rent",
        size: "350 sq ft",
        subTitle: "Studio",
        furnishing: "Furnished",
        condition: "Newly-renovated",
        toilets: 1,
        rentPrice: 450000,
        salePrice: null,
        serviceCharge: 60000,
        cautionFee: 120000,
        legalFee: null,
        paymentType: "per annum",
        bargainType: "Slightly negotiable",
        images: [p46_img, p47_img, p48_img],
        contact: {
            landlordName: "Paul Clark",
            landlordPhone: "+9012345678",
            landlordEmail: "paulclark@example.com"
        }
    }, {
        id: 14,
        title: "Luxury 5 Bedroom Mansion",
        address: "House 106 Pine Grove",
        propertyDeal: "Sale",
        size: "6000 sq ft",
        subTitle: "Mansion",
        furnishing: "Fully Furnished",
        condition: "Brand New",
        toilets: 6,
        rentPrice: null,
        salePrice: 200000000,
        serviceCharge: null,
        cautionFee: 10000000,
        legalFee: 1200000,
        paymentType: "one-time payment",
        bargainType: "Non-negotiable",
        images: [p49_img, p55_img, p56_img, p57_img, p58_img, p59_img],
        contact: {
            landlordName: "Olivia White",
            landlordPhone: "+0123456789",
            landlordEmail: "oliviawhite@example.com"
        }
    }, {
        id: 15,
        title: "Modern 2 Bedroom Loft",
        address: "House 107 Oakwood Lane",
        propertyDeal: "Rent",
        size: "700 sq ft",
        subTitle: "Loft",
        furnishing: "Semi-furnished",
        condition: "Good",
        toilets: 2,
        rentPrice: 600000,
        salePrice: null,
        serviceCharge: 80000,
        cautionFee: 150000,
        legalFee: null,
        paymentType: "per annum",
        bargainType: "Negotiable",
        images: [p64_img, p65_img, p66_img, p67_img],
        contact: {
            landlordName: "Nancy Green",
            landlordPhone: "+1234567890",
            landlordEmail: "nancygreen@example.com"
        }
    }, {
        id: 16,
        title: "Elegant 3 Bedroom Villa",
        address: "House 108 Willowbrook Road",
        propertyDeal: "Sale",
        size: "2800 sq ft",
        subTitle: "Villa",
        furnishing: "Furnished",
        condition: "Newly-built",
        toilets: 3,
        rentPrice: null,
        salePrice: 90000000,
        serviceCharge: null,
        cautionFee: 3500000,
        legalFee: 650000,
        paymentType: "one-time payment",
        bargainType: "Slightly negotiable",
        images: [p68_img, p69_img],
        contact: {
            landlordName: "George Black",
            landlordPhone: "+2345678901",
            landlordEmail: "georgeblack@example.com"
        }
    },
];

export default property;


