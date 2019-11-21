import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;

  constructor(private data: BasketService) { }

  ngOnInit() {
  }

  addClick() {
    this.data.addToBasket(this.name);
  }

  removeClick() {
    this.data.removeFromBasket(this.name)
  }
}
