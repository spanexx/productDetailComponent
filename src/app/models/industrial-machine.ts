// industrial-machine.ts
import { Machine } from './interfaces';

export class IndustrialMachine implements Machine {
  type!: 'Heavy Machinery' | 'Construction Equipment' | 'Industrial Tool';
  condition?: 'New' | 'Used' | 'Refurbished';
  weight?: number;
  id!: string;
  name!: string;
  description!: string; // Adding description property
  model!: string; // Adding model property
  manufacturer!: string;
  productionYear!: number;
  imageUrl!: string;
  value!: number;
}