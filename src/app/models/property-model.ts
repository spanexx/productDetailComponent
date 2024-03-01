// property-model.ts
import { Identifier, Address, Machine, Sale, Lease, Property } from "./interfaces";

export interface Properties {
  identifier: Identifier;
  address?: Address; // Make address optional for industrial machines and sales
  value?: number;   // Make value optional for industrial machines and sales
  realEstateProperties?: Property;
  industrialMachines?: Machine;
  sales?: Sale;
  leases?: Lease;
}
