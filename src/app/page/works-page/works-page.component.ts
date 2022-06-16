import { ProductService } from './../../services/product.service';
import { IProduct } from './../../model/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css']
})
export class WorksPageComponent implements OnInit {
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
