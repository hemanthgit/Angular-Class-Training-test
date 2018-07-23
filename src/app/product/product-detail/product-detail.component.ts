import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ActivatedRoute, Params } from '@angular/router';
import {Productservice} from '../services/product.service';
import  'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product ;
 
  constructor(private _route : ActivatedRoute, private ps : Productservice) { }

  ngOnInit() { 
        this._route
        .params
        .switchMap(
          (pms : Params) => 
           this.ps.getProductById(+pms['id']))
        .subscribe(
          (p : Product) => this.product =  <Product> p ,
        err => console.log(err)
       );
 
  }
}
