import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    <app-products></app-products> 
  `,
})
export class AppComponent {
  title = 'angular-app-kaspi';
}
