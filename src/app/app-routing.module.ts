import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { HelloComponent } from './components/hello/hello.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HelloComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'productAdd', component: ProductAddComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
