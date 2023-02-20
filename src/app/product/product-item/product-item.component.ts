import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductApiService } from 'src/app/services/product-api.services';
import { ProductRepository } from '../data/product-repository';
import { IProduct, Product } from '../data/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{

  product!: Product; 
  sub$!: Subscription;

  errorMessage = "";

  constructor(private apiService:ProductApiService) { }

  ngOnInit(){
    this.sub$ = this.apiService.getProduct(1).subscribe({
      next: pdts => this.product = pdts,
      error: err => this.errorMessage = err,
    })
  }

  ngOnDestroy(){
    this.sub$.unsubscribe();
  }

}


// hey baby 