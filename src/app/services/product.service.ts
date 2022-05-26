import { IProduct } from './../model/Product';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import data from '../data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProduct(id: any): Observable<IProduct> {
    // return data.find(item => item.id === id);
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  removeProduct() {

  }
  addProduct() {

  }
  updateProduct() {

  }
}


// B1: Khai báo HttpClientModule trong app.module.ts
// B2: Khai báo HttpClient trong services
// B3: Inject services HttpClient