// real-estate-property.ts
import {Property, Address} from './interfaces';

export class RealEstateProperty implements Property {
  address: Address;
  type: 'Residential' | 'Commercial' | 'Industrial';
  bedrooms?: number;
  bathrooms?: number;
  hasGarage?: boolean;

  constructor(
    public id: string,
    address: Address,
    public value: number,
    public imageUrl: string,
    type: 'Residential' | 'Commercial' | 'Industrial',
    bedrooms?: number,
    bathrooms?: number,
    hasGarage?: boolean
  ) {
    this.address = { ...address };
    this.type = type;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.hasGarage = hasGarage;
  }
}
