import { Injectable, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {
  constructor(private basket: BasketService, private toastr: ToastrService) { }

  init(): void {
    this.basket.currentMessage.subscribe(x => {
      this.toastr.success("Product added", "Basket updated")
    })
  }
}
