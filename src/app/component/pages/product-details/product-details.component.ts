import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../../services/property.service';
import { Properties } from '../../../models/property-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  property!: Properties

  constructor(private activateRoute: ActivatedRoute, private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if(params['id'])
      this.property = this.propertyService.getById(params['id'])
    });
  }

  getPropertyType(property: Properties): string {
    if (property?.realEstateProperties) {
      return 'Real Estate';
    } else if (property?.industrialMachines) {
      return 'Industrial Machine';
    } else if (property?.sales) {
      return 'Sale';
    } else if (property?.leases) {
      return 'Lease';
    } else {
      return 'Unknown';
    }
  }
  

}
