// interfaces.ts
export interface Identifier{
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  value: number;

}
export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country?: string;
  }
  
  export interface Property {
    type: 'Residential' | 'Commercial' | 'Industrial';
    bedrooms?: number;
    bathrooms?: number;
    hasGarage?: boolean;
  }
  
  export interface Machine {
    type: 'Heavy Machinery' | 'Construction Equipment' | 'Industrial Tool';
    condition?: 'New' | 'Used' | 'Refurbished';
    weight?: number;
    model: string;
    manufacturer: string;
    productionYear: number;
  }
  
  export interface Sale {
    buyer: string;
    price: number;
    date: Date;
    paymentMethod: 'Cash' | 'Mortgage' | 'BankTransfer';
    closingDate: Date;
    isFinanced?: boolean;
  }
  
  export interface Lease {
    tenant: string;
    monthlyRent: number;
    startDate: Date;
    endDate: Date;
    leaseType: 'Residential' | 'Commercial' | 'Industrial';
    isRenewable?: boolean;
  }
  
