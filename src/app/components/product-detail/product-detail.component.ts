import { ProductService } from './../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../../model/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    // private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    const id = this.router.snapshot.paramMap.get('id');
    // this.product = this.productService.getProduct(id)!;
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.productService.getProduct(id).subscribe(data => this.product = data);
    }
  }
  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // call services edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong
      this.productService.updateProduct(this.product).subscribe(data => console.log(data))
    } else {
      // call service add product
      this.productService.addProduct(this.product).subscribe(data => {
        // chuyển hướng router
        this.router.navigateByUrl('/product');
      })
    }
  }

}