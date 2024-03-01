// properties-data.ts
import { Identifier, Address, Machine, Sale, Lease } from "../app/models/interfaces";
import { Properties } from "../app/models/property-model";

const properties: Properties[] = [
  // Real Estate Properties
  {
    identifier: {
      id: '1',
      name: 'Cozy Family Home',
      description: 'A beautiful residential property for a small family.',
      imageUrl: 'https://wallpapercave.com/wp/wp4110663.jpg',
      value: 300000,
    },
    address: {
      street: '123 Main St',
      city: 'Cityville',
      state: 'ST',
      zipCode: '12345',
    },
    value: 300000, // Add the value property for real estate properties
    realEstateProperties: {
      type: 'Residential',
      bedrooms: 3,
      bathrooms: 2,
      hasGarage: true,
    },
  },
  {
    identifier: {
      id: '2',
      name: 'Townsville Plaza',
      description: 'Prime commercial space in the heart of Townsville.',
      imageUrl: 'https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-05.jpg',
      value: 500000,
    },
    address: {
      street: '456 Oak St',
      city: 'Townsville',
      state: 'TS',
      zipCode: '67890',
    },
    value: 500000,
    realEstateProperties: {
      type: 'Commercial',
      bedrooms: 0,
      bathrooms: 0,
      hasGarage: true,
    },
  },
  {
    identifier: {
      id: '3',
      name: 'Industrial Hub',
      description: 'Spacious industrial property for manufacturing and production.',
      imageUrl: 'https://wallpapercave.com/wp/wp4110666.jpg',
      value: 700000,
    },
    address: {
      street: '789 Pine St',
      city: 'Villageville',
      state: 'VL',
      zipCode: '54321',
    },
    value: 700000,
    realEstateProperties: {
      type: 'Industrial',
      bedrooms: 0,
      bathrooms: 0,
      hasGarage: false,
    },
  },
  {
    identifier: {
      id: '4',
      name: 'Hamletville Estate',
      description: 'Luxurious residential estate with modern amenities.',
      imageUrl: 'https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-10.jpg',
      value: 400000,
    },
    address: {
      street: '101 Cedar St',
      city: 'Hamletville',
      state: 'HM',
      zipCode: '98765',
    },
    value: 400000,
    realEstateProperties: {
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 3,
      hasGarage: true,
    },
  },
  {
    identifier: {
      id: '5',
      name: 'Villageton Commercial Center',
      description: 'Commercial space for businesses in Villageton.',
      imageUrl: 'https://th.bing.com/th/id/R.3f6d55743d16ea2d21eaf0c8b3a368c1?rik=iZeyKKTd9RZK%2bg&riu=http%3a%2f%2ftrumpwallpapers.com%2fwp-content%2fuploads%2fReal-Estate-Wallpaper-31-1920x1080-1.jpg&ehk=NkuCcZ4KMEDnuIyMfhdsJz2zVKzOyOnOr3QIU2AErIc%3d&risl=1&pid=ImgRaw&r=0',
      value: 600000,
    },
    address: {
      street: '202 Maple St',
      city: 'Villageton',
      state: 'VT',
      zipCode: '13579',
    },
    value: 600000,
    realEstateProperties: {
      type: 'Commercial',
      bedrooms: 0,
      bathrooms: 0,
      hasGarage: true,
    },
  },
  // Add more real estate properties as needed

  // Industrial Machines
  {
    identifier: {
      id: '6',
      name: 'Excavator X100',
      description: 'Powerful excavator for heavy-duty tasks.',
      imageUrl: 'https://wallpapercave.com/wp/wp2515765.jpg',
      value: 1000000,
    },
    industrialMachines: {
      type: 'Heavy Machinery',
      condition: 'New',
      weight: 5000,
      model: 'X100',
      manufacturer: 'ABC Machinery Co.',
      productionYear: 2020,
    },
    value: 1000000, // Add the value property for industrial machines
  },
  {
    identifier: {
      id: '7',
      name: 'Bulldozer Z200',
      description: 'Versatile bulldozer for construction projects.',
      imageUrl: 'https://wallpapercave.com/wp/wp2515765.jpg',
      value: 800000,
    },
    industrialMachines: {
      type: 'Construction Equipment',
      condition: 'Used',
      weight: 7000,
      model: 'Z200',
      manufacturer: 'XYZ Equipment Inc.',
      productionYear: 2019,
    },
    value: 800000, // Add the value property for industrial machines
  },
  {
    identifier: {
      id: '8',
      name: 'Drill Master 5000',
      description: 'High-performance industrial drill.',
      imageUrl: 'https://wallpapercave.com/wp/wp2515693.jpg',
      value: 1200000,
    },
    industrialMachines: {
      type: 'Industrial Tool',
      condition: 'Refurbished',
      weight: 3000,
      model: '5000',
      manufacturer: 'Tech Industrial Solutions',
      productionYear: 2021,
    },
    value: 1200000, // Add the value property for industrial machines
  },
  {
    identifier: {
      id: '9',
      name: 'Crane MegaLift 300',
      description: 'Mega lifting capacity for heavy loads.',
      imageUrl: 'https://wallpaperaccess.com/full/3752107.jpg',
      value: 1500000,
    },
    industrialMachines: {
      type: 'Heavy Machinery',
      condition: 'New',
      weight: 8000,
      model: 'MegaLift 300',
      manufacturer: 'HeavyLift Co.',
      productionYear: 2022,
    },
    value: 1500000, // Add the value property for industrial machines
  },
  {
    identifier: {
      id: '10',
      name: 'Excavator X200',
      description: 'Advanced excavator model for various tasks.',
      imageUrl: 'https://cdn.wallpapersafari.com/96/24/lVTaYs.jpg',
      value: 1200000,
    },
    industrialMachines: {
      type: 'Construction Equipment',
      condition: 'Used',
      weight: 6000,
      model: 'X200',
      manufacturer: 'ABC Machinery Co.',
      productionYear: 2023,
    },
    value: 1200000, // Add the value property for industrial machines
  },
  // Add more industrial machines as needed

  {
    identifier: {
      id: '12', // Use a unique ID for the new sale
      name: 'Prime Commercial Space Sale',
      description: 'Prime commercial space in the heart of Townsville.',
      imageUrl: 'https://wallpaperaccess.com/full/3885614.jpg',
      value: 700000,
    },
    address: {
      street: '456 Oak St', // Assuming a commercial property has a street address
      city: 'Townsville',
      state: 'TS',
      zipCode: '67890',
    },
    value: 700000, // Add the value property for sales
    sales: {
      buyer: 'Jane Smith',
      price: 700000,
      date: new Date(),
      paymentMethod: 'Mortgage',
      closingDate: new Date(),
      isFinanced: true,
    },
  },
  
  // Leases
  {
    identifier: {
      id: '17', // Use a unique ID for the new lease
      name: 'Commercial Lease B',
      description: 'Commercial space for businesses in need of a location.',
      imageUrl: 'https://th.bing.com/th?id=OIF.WduQmJbFewGIk2YKdrC%2b%2fQ&rs=1&pid=ImgDetMain',
      value: 3000, // Assuming monthly rent is considered as value
    },
    address: {
      street: '456 Oak St', // Assuming a commercial property has a street address
      city: 'Townsville',
      state: 'TS',
      zipCode: '67890',
    },
    value: 3000, // Add the value property for leases
    leases: {
      tenant: 'Tenant B',
      monthlyRent: 3000,
      startDate: new Date(),
      endDate: new Date(),
      leaseType: 'Commercial',
      isRenewable: false,
    },
  },
  // Add more leases as needed
];

export default properties;
