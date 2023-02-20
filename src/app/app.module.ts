import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RxjsDemoComponent } from './shared/rxjsDemo/rxjsdemo.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RxjsDemoComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
