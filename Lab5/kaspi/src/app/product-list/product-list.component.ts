import { Component, Input} from '@angular/core';
import { CategoryDescription } from '../category-description';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <div class = "category">
    <a class="categoryLink" [routerLink]="['/product-list', categoryDescription.id]">
      <img class="categoryImage icon-large" [src]="categoryDescription.image" alt="{{categoryDescription.name}}">
      <h2 class="categoryName">{{categoryDescription.name}}</h2>
    </a>
  </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class CategoryComponent {
  @Input() categoryDescription!: CategoryDescription;
}
