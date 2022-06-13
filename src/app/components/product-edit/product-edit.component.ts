import { ProductService } from './../../services/product.service';
import { IProduct } from './../../model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product!: IProduct
  constructor(
    // private router: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    // const id = this.router.snapshot.paramMap.get('id');
    // // this.product = this.productService.getProduct(id)!;
    // this.productService.getProduct(id).subscribe((data) => {
    //   this.product = data
    // })
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
      this.productService.updateProduct(this.product).subscribe(data => {
        this.router.navigateByUrl('/admin/product');

        })
    }
  }

}
