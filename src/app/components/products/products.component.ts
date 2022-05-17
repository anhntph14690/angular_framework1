import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @Input() products!: IProduct[]
  productDetail!: IProduct;
  constructor() { }

  ngOnInit(): void {
  }
  onHandleDelete(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
  onHandleGetInfo(product: IProduct) {
    this.productDetail = product;
    console.log('product', product)
  }
}
export class ListComponent {
  productList: IProduct[] = [
    {
      id: 1,
      name: "product A",
      price: 200,
      status: false
    },
    {
      id: 2,
      name: "product B",
      price: 300,
      status: true
    }
  ]
  onHandleAdd(product: any) {
    console.log("product", product);
    this.productList.push(product);
  }
}