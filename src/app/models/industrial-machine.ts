// industrial-machine.ts
import { Machine } from './interfaces';

export class IndustrialMachine implements Machine {
  type: 'Heavy Machinery' | 'Construction Equipment' | 'Industrial Tool';
  condition?: 'New' | 'Used' | 'Refurbished';
  weight?: number;

  constructor(
    public id: string,
    public name: string,
    public manufacturer: string,
    public productionYear: number,
    public imageUrl: string,
    public value: number,
    type: 'Heavy Machinery' | 'Construction Equipment' | 'Industrial Tool',
    condition?: 'New' | 'Used' | 'Refurbished',
    weight?: number
  ) {
    this.type = type;
    this.condition = condition;
    this.weight = weight;
  }
}
