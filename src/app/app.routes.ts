import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ProductDetailsComponent } from './component/pages/product-details/product-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:searchTerm', component: HomeComponent},
    {path: 'property/:id', component: ProductDetailsComponent},
    {path: 'type/:type', component: HomeComponent},
];
