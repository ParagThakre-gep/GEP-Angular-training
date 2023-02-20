import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductApiService } from 'src/app/services/product-api.services';
import { IProduct, Product } from '../data/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  imgWidth=300;
  imgMargin=5;
  product : IProduct | undefined;
  pId!: number;
  sub$!: Subscription;

  constructor(private apiService: ProductApiService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.pId = Number(id);
      if(!isNaN(this.pId)){
        this.getProduct(this.pId);
      }
    }
  }


  errorMessage = ""

  getProduct(id: number){
    this.sub$ = this.apiService.getProduct(this.pId).subscribe({
      next: data=>this.product = data,
      error : err => this.errorMessage = err,
    })
  }

  onBack(){
    this.router.navigate(['/products']);
  }

  onEdit(){
    this.router.navigate(['products/edit/', this.pId])
  }

}
