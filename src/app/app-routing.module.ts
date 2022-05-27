import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { HelloComponent } from './components/hello/hello.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product/edit/:id', component: ProductDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
