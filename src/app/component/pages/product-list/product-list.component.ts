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
  selectedType?: string
  properties: Properties[] = [];

  constructor(private propertyService: PropertyService, private activateRoute: ActivatedRoute, private router: Router) {
    // Assuming you have an instance of PropertyService available
    this.properties = propertyService.getAll(); // Use the getAll method to get all properties
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.properties = this.propertyService.getBySearchTerm(params['searchTerm']);
      } else if (params['type']) {
        this.filterByTag(params['type']);
      } else {
        this.properties = this.propertyService.getAll();
      }
    });
  }

  filterByTag(type: string): void {
    this.selectedType = type;
    this.properties = this.propertyService.getByType(type);
  }
  
}
