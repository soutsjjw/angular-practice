import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AntiMotivationalQuotesComponent } from './anti-motivational-quotes/anti-motivational-quotes.component'
import { FormsModule } from '@angular/forms';
import { HttpInterceptorProviders } from './http-interceptors/http-interceptor-providers';

@NgModule({
  declarations: [
    AppComponent,
    AntiMotivationalQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
