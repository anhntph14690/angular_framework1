import { IProduct } from './model/Product';
import { Component } from '@angular/core';
import data from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: IProduct[] = data;
  onHandleAdd(product: any) {
    console.log("product", product);
    this.productList.push(product);
  }
}
