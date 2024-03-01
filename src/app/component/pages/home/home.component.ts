import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductDetailsComponent, ProductListComponent, FormsModule, CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
