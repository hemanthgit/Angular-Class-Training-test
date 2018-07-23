import { Component, OnInit } from '@angular/core';
import {Productservice} from '../services/product.service';
import {Product} from '../models/product.models';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //to inject  the service in the component level
  providers : [Productservice]
})
export class ProductListComponent implements OnInit {



products : Product[] ;
productProperties : string[];
showImage : boolean = false;
removeSubscription : Subscription;
getsubscription : Subscription;

//returning the observable object of service to the constructor
  constructor(private ps: Productservice, private _router : Router) {
    //get all the props to iterate the object in html

   }
/*    ChangedVal(val: string){
  this.filterText = val;
} */
  ngOnInit() {
    this.fetchProducts();
  
  }
  displaySingleProductOnly(productId){
    this._router.navigate(['/product',productId]);
  }

  showProductImage() {
    this.showImage = true;
  }
  hideProductImage() {
    this.showImage = false;
  }
  fetchProducts() {
    this.getsubscription = this.ps.getProducts().subscribe(
      (p : Product[]) =>{
        this.products = p;
      },
    (error) => {console.log(error)},
    //this function wld be executed only after success is executed. this accepts no properties also.
    () => {
        this.productProperties = [];
        if(this.products) {
            let p = this.products[0];
            for (const propertyName in p){
              this.productProperties.push(propertyName);
            }
        }
      }
    );
  }

  removeProduct(productId : number) {
     this.removeSubscription = this.ps.removeProduct(productId).subscribe(
      (data) => {
        console.log(data) ;
      },
      (error) => {},
      () => {this.fetchProducts()
      }
    );

  }

  //to disconnect from the service once the navigation goes to another component
  ngOnDestroy() {
    try{ 
      if(this.removeSubscription !== undefined){
        this.removeSubscription.unsubscribe();
      }
  }catch(error){
    console.log(error);
  }
}
}
