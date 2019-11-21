import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BasketService, IProduct } from './basket.service';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private sum = (p: number, c: IProduct) => p + c.count;
  products: IProduct[];
  count: number;

  constructor(private breakpointObserver: BreakpointObserver, private data: BasketService, private notifications: NotificationsService) {
    notifications.init()
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(products => {
      this.products = products
      this.count = this.products.reduce((prevValue, current) => prevValue + current.count, 0);
    })
  }
}
