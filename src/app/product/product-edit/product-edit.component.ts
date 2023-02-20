import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ProductApiService } from 'src/app/services/product-api.services';
import { LimitValidator } from 'src/app/shared/validators/limit.formvalidator';
import { IProduct } from '../data/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product!: IProduct;
  errorMessage = "";
  pId!: number;
  formGroup!: FormGroup;
  formSubmitted = false;
  sub$!: Subscription
  pageTitle = "Prodcut Edit"
  constructor(private fb: FormBuilder, private apiService: ProductApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      productName : ['', Validators.required],
      productCode : [''],
      price:['', [Validators.required, LimitValidator.Limit(100000)]],
      description : [''], 
      starRating: ['', [Validators.required, LimitValidator.Limit(5)]],
    })

    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.pId = Number(id);
      if(!isNaN(this.pId)){
        this.loadProduct(this.pId);
      }
    }
  }

  loadProduct(id : number){
    this.sub$ = this.apiService.getProduct(id).subscribe({
      next: data=> {this.product = data; this.formGroup.patchValue(this.product)},
      error : err => this.errorMessage = err,
    })
  }

  saveProduct(){
    if(this.formGroup.dirty && this.formGroup.valid){
      const modifiedProduct = {...this.product, ...this.formGroup.value};
      console.log(`Product Updated   ${modifiedProduct.starRating} Name : ${modifiedProduct.productName} `);


      this.apiService.updateProduct(modifiedProduct).subscribe({
        next : result => {
          console.log("Updated succefully through put" + result);
          this.router.navigate(['/products']);
        },
        error: err => this.errorMessage = err,
      })
    }else{
      console.log("errror");
    }
  }

  onSubmit(){
    this.formSubmitted = true;
    this.saveProduct();
  }

  ngOnDestroy(){
    this.sub$.unsubscribe();
  }

}
