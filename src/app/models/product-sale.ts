// product-sale.ts
import { Sale, Lease } from './interfaces';

export class PropertySale implements Sale {
  propertyId!: string;
  name!: string;
  description!: string;
  buyer!: string;
  price!: number;
  date!: Date;
  imageUrl!: string;
  paymentMethod!: 'Cash' | 'Mortgage' | 'BankTransfer';
  closingDate!: Date;
  isFinanced?: boolean;
}

export class PropertyLease implements Lease {
  propertyId!: string;
  name!: string;
  description!: string;
  tenant!: string;
  monthlyRent!: number;
  startDate!: Date;
  endDate!: Date;
  imageUrl!: string;
  leaseType!: 'Residential' | 'Commercial' | 'Industrial';
  isRenewable?: boolean;
}