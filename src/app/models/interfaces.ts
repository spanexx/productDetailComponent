// interfaces.ts

export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country?: string;
  }
  
  export interface Property {
    id: string;
    address: Address;
    value: number;
    imageUrl: string;
    type: 'Residential' | 'Commercial' | 'Industrial';
    bedrooms?: number;
    bathrooms?: number;
    hasGarage?: boolean;
  }
  
  export interface Machine {
    id: string;
    name: string;
    manufacturer: string;
    productionYear: number;
    imageUrl: string;
    value: number;
    type: 'Heavy Machinery' | 'Construction Equipment' | 'Industrial Tool';
    condition?: 'New' | 'Used' | 'Refurbished';
    weight?: number;
  }
  
  export interface Sale {
    propertyId: string;
    buyer: string;
    price: number;
    date: Date;
    paymentMethod: 'Cash' | 'Mortgage' | 'BankTransfer';
    closingDate: Date;
    isFinanced?: boolean;
  }
  
  export interface Lease {
    propertyId: string;
    tenant: string;
    monthlyRent: number;
    startDate: Date;
    endDate: Date;
    leaseType: 'Residential' | 'Commercial' | 'Industrial';
    isRenewable?: boolean;
  }
  