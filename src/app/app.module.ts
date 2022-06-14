import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { AboutComponent } from './page/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//antd
// import { Menu } from 'antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BlogComponent } from './page/blog/blog.component';
import { WorksPageComponent } from './page/works-page/works-page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    HomeComponent,
    NotFoundComponent,
    SignupComponent,
    BlogComponent,
    WorksPageComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    HomeAdminComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
