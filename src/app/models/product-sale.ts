// property-sale.ts
import { Sale, Lease } from './interfaces';

export class PropertySale implements Sale {
  paymentMethod: 'Cash' | 'Mortgage' | 'BankTransfer';
  closingDate: Date;
  isFinanced?: boolean;

  constructor(
    public propertyId: string,
    public buyer: string,
    public price: number,
    public date: Date,
    public imageUrl: string,
    paymentMethod: 'Cash' | 'Mortgage' | 'BankTransfer',
    closingDate: Date,
    isFinanced?: boolean
  ) {
    this.paymentMethod = paymentMethod;
    this.closingDate = closingDate;
    this.isFinanced = isFinanced;
  }
}


export class PropertyLease implements Lease {
  leaseType: 'Residential' | 'Commercial' | 'Industrial';
  isRenewable?: boolean;

  constructor(
    public propertyId: string,
    public tenant: string,
    public monthlyRent: number,
    public startDate: Date,
    public endDate: Date,
    public imageUrl: string,
    leaseType: 'Residential' | 'Commercial' | 'Industrial',
    isRenewable?: boolean
  ) {
    this.leaseType = leaseType;
    this.isRenewable = isRenewable;
  }
}
