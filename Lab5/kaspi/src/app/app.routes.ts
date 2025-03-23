import { Routes } from '@angular/router';
import { ProductComponentComponent } from './product-item/product-item.component';

export const routes: Routes = [
    {
        path:'product-list/:id',
        component:ProductComponentComponent
    },
];

