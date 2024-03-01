import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Properties } from '../../../models/property-model';
import { PropertyService } from '../../../services/property.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductDetailsComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedType?: string;
  searchTerm?: string;
  propertyTypes: string[] = [];
  properties: Properties[] = [];

  constructor(private propertyService: PropertyService, private activateRoute: ActivatedRoute, private router: Router) {
    this.properties = propertyService.getAll();
    this.propertyTypes = this.getPropertyTypes();
  }

  getPropertyTypes(): string[] {
    const types: Set<string> = new Set<string>();
    this.properties.forEach((property) => {
      if (property.realEstateProperties?.type) {
        types.add(property.realEstateProperties.type);
      }
      if (property.industrialMachines?.type) {
        types.add(property.industrialMachines.type);
      }
      if (property.sales?.buyer) {
        types.add(property.sales.buyer);
      }
      if (property.leases?.tenant) {
        types.add(property.leases.tenant);
      }
    });
    return ['All', ...Array.from(types)];
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        this.search();
      } else if (params['type']) {
        this.filterByType(params['type']);
      } else {
        this.properties = this.propertyService.getAll();
      }
    });
  }

  filterByType(type: string): void {
    this.selectedType = type;
    if (type === 'All') {
      this.properties = this.propertyService.getAll();
    } else {
      this.properties = this.propertyService.getByType(type);
    }
  }

  search(): void {
    if (this.searchTerm) {
      this.properties = this.propertyService.getBySearchTerm(this.searchTerm);
    }
  }
  
}
