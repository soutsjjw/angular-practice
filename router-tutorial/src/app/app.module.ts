import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductComponent } from './components/product/product.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    PagenotfoundComponent,
    ProductComponent,
    NewsDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
