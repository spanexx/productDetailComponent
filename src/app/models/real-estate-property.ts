// real-estate-property.ts
import { Address } from './interfaces';

export class RealEstateProperty {
  id!: string;
  address!: Address;
  name!: string;
  description!: string;
  value!: number;
  imageUrl!: string;
  type!: 'Residential' | 'Commercial' | 'Industrial';
  bedrooms?: number;
  bathrooms?: number;
  hasGarage?: boolean;
}