import { Component, OnInit } from '@angular/core';
import { BasketService, IProduct } from '../basket.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.less']
})
export class ShoppingBasketComponent implements OnInit {
  private products: IProduct[] = [{ name: "test", count: 1 }];
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.currentMessage.subscribe(x => this.products = x);
  }

  add(name: string){
    this.basketService.addToBasket(name);
  }

  remove(name: string){
    this.basketService.removeFromBasket(name);
  }
}
