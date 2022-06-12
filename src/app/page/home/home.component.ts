import { IProduct } from './../../model/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!: IProduct[];
  constructor(
    private ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }


getProductList() {
  this.ProductService.getProductList().subscribe(data => {
      this.products = data
    })
  }
}
