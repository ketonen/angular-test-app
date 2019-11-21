import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "page2", component: Page2Component},
  {path: "shopping-basket", component: ShoppingBasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
