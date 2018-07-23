import {Routes } from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';

export const productRoutes: Routes =  [
    {
        path:'add',component: ProductAddComponent
    },{
        path:'product/:id',component: ProductDetailComponent
    },{
        path:'list',component: ProductListComponent
    }
];