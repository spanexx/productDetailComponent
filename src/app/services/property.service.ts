import { Injectable } from '@angular/core';
import { RealEstateProperty } from '../models/real-estate-property';
import realEstateProperties from '../../datas/real-estate-data';
import { Properties } from '../models/property-model';
import properties from '../../datas/properties-data';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getAll(): Properties[] {
    return properties;
  }

  getBySearchTerm(searchTerm: string): Properties[] {
    searchTerm = searchTerm.toLowerCase();
    return properties.filter(property =>
      property.identifier.name.toLowerCase().includes(searchTerm) ||
      property.address?.street.toLowerCase().includes(searchTerm) ||
      property.address?.city.toLowerCase().includes(searchTerm) ||
      property.address?.state.toLowerCase().includes(searchTerm) ||
      property.address?.zipCode.toLowerCase().includes(searchTerm) ||
      property.identifier.description.toLowerCase().includes(searchTerm)
    );
  }

  getByType(propertyType: string): Properties[] {
    return properties.filter(property =>
      property.realEstateProperties?.type.toLowerCase() === propertyType.toLowerCase() ||
      property.industrialMachines?.type.toLowerCase() === propertyType.toLowerCase() ||
      property.sales?.buyer.toLowerCase() === propertyType.toLowerCase() ||
      property.leases?.tenant.toLowerCase() === propertyType.toLowerCase()
    );
  }

  getById(id: string): Properties | undefined {
    return properties.find(property => property.identifier.id === id);
  }
}