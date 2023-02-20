import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductApiService } from 'src/app/services/product-api.services';
import { ProductRepository } from '../data/product-repository';
import { IProduct, Product } from '../data/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle = "Product List";
  products : IProduct[] = [];
  imgWidth =50;
  imgMargin=5;
  selectedProduct?: string ;  
  sub$!: Subscription;

  errorMessage = "";

  constructor(private apiService:ProductApiService) { 
    // this.products = this.repo.products;
  }

  ngOnInit(){
    this.sub$ = this.apiService.getProducts().subscribe({
      next: pdts => this.products = pdts,
      error: err => this.errorMessage = err,
    })
  }

  ngOnDestroy(){
    this.sub$.unsubscribe();
  }

  getProducts(){
    this.products = this.products;
    return this.products;
  }

  // getProduct(id : number){
  //   return this.repo.getProductById(id);
  // }

  showImage= false;

  toggleImage(){
    this.showImage = !this.showImage;
    // console.log("Button Clicked");
  }

  //to check the product is selected
  getSelected(product: IProduct): boolean{
    return product.productName === this.selectedProduct;
  }

  message="";
  onRatingClicked(msg: string){
    this.message = msg;
  }
}
