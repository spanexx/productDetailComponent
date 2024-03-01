import { PropertyLease, PropertySale } from "../app/models/product-sale";

const sales: PropertySale[] = [
  {
    propertyId: '1',
    name: 'Cozy Home Sale',
    description: 'A beautiful residential property for a small family.',
    buyer: 'John Doe',
    price: 500000,
    date: new Date(),
    imageUrl: 'https://th.bing.com/th/id/OIP.iZWDr8R_AcA-ZeB0BZD4hwHaD_?rs=1&pid=ImgDetMain',
    paymentMethod: 'Cash',
    closingDate: new Date(),
    isFinanced: false
  },
  {
    propertyId: '2',
    name: 'Prime Commercial Space',
    description: 'Prime commercial space in the heart of Townsville.',
    buyer: 'Jane Smith',
    price: 700000,
    date: new Date(),
    imageUrl: 'https://wallpaperaccess.com/full/3885614.jpg',
    paymentMethod: 'Mortgage',
    closingDate: new Date(),
    isFinanced: true
  },
  // Add more sales as needed
];

const leases: PropertyLease[] = [
  {
    propertyId: '6',
    name: 'Residential Lease A',
    description: 'A cozy residential property for tenants.',
    tenant: 'Tenant A',
    monthlyRent: 2000,
    startDate: new Date(),
    endDate: new Date(),
    imageUrl: 'https://th.bing.com/th/id/OIP.Fv973nQLRbCGDRcL82FL-QHaEo?rs=1&pid=ImgDetMain',
    leaseType: 'Residential',
    isRenewable: true
  },
  {
    propertyId: '7',
    name: 'Commercial Lease B',
    description: 'Commercial space for businesses in need of a location.',
    tenant: 'Tenant B',
    monthlyRent: 3000,
    startDate: new Date(),
    endDate: new Date(),
    imageUrl: 'https://th.bing.com/th?id=OIF.WduQmJbFewGIk2YKdrC%2b%2fQ&rs=1&pid=ImgDetMain',
    leaseType: 'Commercial',
    isRenewable: false
  },
  // Add more leases as needed
];

export { sales, leases };