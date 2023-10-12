import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myList: Product[] = [];
  private myBag = new BehaviorSubject<Product[]>([]);

  myBag$ = this.myBag.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myList.push(product);
    this.myBag.next(this.myList);
  }

}
