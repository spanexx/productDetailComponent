import { RealEstateProperty } from "../app/models/real-estate-property";

const realEstateProperties: RealEstateProperty[] = [
  {
    id: '1',
    address: {
      street: '123 Main St',
      city: 'Cityville',
      state: 'ST',
      zipCode: '12345',
    },
    name: 'Cozy Family Home',
    description: 'A beautiful residential property for a small family.',
    value: 300000,
    imageUrl: 'https://wallpapercave.com/wp/wp4110663.jpg',
    type: 'Residential',
    bedrooms: 3,
    bathrooms: 2,
    hasGarage: true,
  },
  {
    id: '2',
    address: {
      street: '456 Oak St',
      city: 'Townsville',
      state: 'TS',
      zipCode: '67890',
    },
    name: 'Townsville Plaza',
    description: 'Prime commercial space in the heart of Townsville.',
    value: 500000,
    imageUrl: 'https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-05.jpg',
    type: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    hasGarage: true,
  },
  {
    id: '3',
    address: {
      street: '789 Pine St',
      city: 'Villageville',
      state: 'VL',
      zipCode: '54321',
    },
    name: 'Industrial Hub',
    description: 'Spacious industrial property for manufacturing and production.',
    value: 700000,
    imageUrl: 'https://wallpapercave.com/wp/wp4110666.jpg',
    type: 'Industrial',
    bedrooms: 0,
    bathrooms: 0,
    hasGarage: false,
  },
  {
    id: '4',
    address: {
      street: '101 Cedar St',
      city: 'Hamletville',
      state: 'HM',
      zipCode: '98765',
    },
    name: 'Hamletville Estate',
    description: 'Luxurious residential estate with modern amenities.',
    value: 400000,
    imageUrl: 'https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-10.jpg',
    type: 'Residential',
    bedrooms: 4,
    bathrooms: 3,
    hasGarage: true,
  },
  {
    id: '5',
    address: {
      street: '202 Maple St',
      city: 'Villageton',
      state: 'VT',
      zipCode: '13579',
    },
    name: 'Villageton Commercial Center',
    description: 'Commercial space for businesses in Villageton.',
    value: 600000,
    imageUrl: 'https://th.bing.com/th/id/R.3f6d55743d16ea2d21eaf0c8b3a368c1?rik=iZeyKKTd9RZK%2bg&riu=http%3a%2f%2ftrumpwallpapers.com%2fwp-content%2fuploads%2fReal-Estate-Wallpaper-31-1920x1080-1.jpg&ehk=NkuCcZ4KMEDnuIyMfhdsJz2zVKzOyOnOr3QIU2AErIc%3d&risl=1&pid=ImgRaw&r=0',
    type: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    hasGarage: true,
  },
];

export default realEstateProperties;