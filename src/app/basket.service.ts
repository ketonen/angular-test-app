import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  name: string,
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private products: IProduct[] = [];

  private messageSource = new BehaviorSubject(this.products);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  addToBasket(name: string) {
    let product = this.products.find(x => x.name === name);
    if (product) product.count++;
    else this.products.push({ name: name, count: 1 });

    this.messageSource.next(this.products)
    // this.toastr.success("JEE", "JAA")
  }

  removeFromBasket(name: string) {
    let product = this.products.find(x => x.name === name);
    if (product && product.count > 0) {
      product.count--;
      this.messageSource.next(this.products)
    }
  }
}
