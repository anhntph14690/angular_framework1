import { ProductService } from './../../services/product.service';
import { IProduct } from './../../model/Product';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: IProduct = {
    name: "",
    price: 0,
    status: true
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

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
      
    } else {
      // call service add product
      this.productService.addProduct(this.product).subscribe(data => {
        // chuyển hướng router
        this.router.navigateByUrl('/admin/product');
      })
    }
  }
}
