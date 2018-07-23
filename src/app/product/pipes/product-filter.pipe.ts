 import {Pipe , PipeTransform } from '@angular/core';
import { Product } from '../models/product.models';

import * as _ from 'underscore';
@Pipe({
    name: 'filterProduct'
})

export class ProductFilterPipe implements PipeTransform {
    transform(data: Product[], ...args : string[]){
const _sample = [1,2,3,4,5,6];
_.map(_sample,s => s%2 == 0 );
_.filter(_sample,n => n%2 === 0);
console.log(_.filter(_sample,n => n%2 === 0));
        if(data  && args[0]) {
           const filteredProducts : Product[] = [];
            for(let index = 0; index < data.length ; index ++){
                const p = data[index];
               if(p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase())  !== -1){
                filteredProducts.push(p);
               }
            }
            return filteredProducts;
        }
        else{
            return data;
        }
    }
} 