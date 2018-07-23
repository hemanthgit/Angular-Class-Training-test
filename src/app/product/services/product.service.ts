import {Injectable} from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Product} from '../models/product.models';
import  'rxjs/add/operator/map';
import {map} from 'rxjs/operators';



@Injectable()
export class Productservice{
    url: string='http://127.0.0.1:8081/productservice';
    constructor(private _httpNew: HttpClient) {

    }
    public addProduct(p: Product) : Observable<Object> {
     return this._httpNew.post(this.url,p);
    }
    public removeProduct(id: number): Observable<Object> {
       return this._httpNew.delete(this.url + '/' + id);
    }
    public updatProduct(p: Product) {

    }
    public getProductById(id: number) : Observable<Product>{
      return  this._httpNew.get(this.url + '/' + id).pipe(map(obj => <Product> obj ));
    }
    public getProducts() : Observable<Product[]>{
        //return the typecasted response object to the observable function
    return this._httpNew.get(this.url).map(r => <Product[]> r);
    }
}