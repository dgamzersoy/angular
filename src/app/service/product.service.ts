import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    
  }
  add(product:Product):Observable<Response>{
    return this.add(product);
  }
}
