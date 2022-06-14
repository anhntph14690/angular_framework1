import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { WorksPageComponent } from './page/works-page/works-page.component';
import { BlogComponent } from './page/blog/blog.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HomeComponent } from './page/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { HelloComponent } from './components/hello/hello.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    // children: [
    //   { path: 'blog', component: BlogComponent },
    //   { path: 'works', component: WorksPageComponent }
    // ]
  },
  {path: 'works', component: WorksPageComponent},
  {path: 'blog', component: BlogComponent},
  { path: 'product/:id', component: ProductDetailComponent },


  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: HomeAdminComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'product/add', component: ProductAddComponent },
      // { path: 'product/:id', component: ProductDetailComponent },
      { path: 'product/edit/:id', component: ProductEditComponent }
    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: WorksPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
