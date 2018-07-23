import { Component, OnInit } from '@angular/core';
import {Productservice} from'../services/product.service';
import { Form, FormGroup } from '@angular/forms';
import { Product } from '../models/product.models';
import { Router} from '@angular/router';

@Component({
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

 
  constructor(private ps: Productservice, private router : Router) { }

  ngOnInit() {
  }

  submitProduct(fg : FormGroup){
     this.ps.addProduct(<Product>fg.value).subscribe(

      (d) => console.log(),
      (err) => console.log(err),
      () => this.router.navigate(['/list'])
     );

  }

}
