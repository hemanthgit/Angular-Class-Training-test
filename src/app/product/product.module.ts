import { BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {productRoutes} from './product.route';
import {Productservice} from'./services/product.service';
import {ProductFilterPipe} from './pipes/product-filter.pipe';
//import {HttpModule  } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(productRoutes) ,HttpClientModule,FormsModule 
  ],
  declarations: [ProductListComponent, ProductAddComponent, ProductDetailComponent, ProductFilterPipe],
  exports: [],
  bootstrap: [],
  //registering the service in the module level
  providers: [Productservice]
})
export class ProductModule { }
