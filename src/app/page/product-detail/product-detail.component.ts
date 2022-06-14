import { ProductService } from '../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../../model/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products!: IProduct
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    // private router: Router,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.productService.getProduct(id).subscribe(data => this.products = data);
    }
  }
 
}