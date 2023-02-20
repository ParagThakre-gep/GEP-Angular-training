import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductApiService } from 'src/app/services/product-api.services';
import { ProductRepository } from '../data/product-repository';
import { IProduct, Product } from '../data/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent{
  newProduct = new Product();
  
  repo: ProductRepository;
  constructor(private apiService: ProductApiService, private router: Router){
    this.repo = new ProductRepository();
  }

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }
  
  addProduct(p : IProduct){
    console.log("New Product " + this.jsonProduct);
  }

  getMessages(errs: ValidationErrors  | null, name: string) : string[]{
    let messages: string[] = [];
    for(let errorName in errs){
      switch(errorName){
        case('required'):
          messages.push(`You must enter a value for ${name}`);
          break;

        case('minlength'):
          messages.push(`A ${name} must be at least ${errs['minlength'].requiredLength} Characters`);
          break;

        case('pattern'):
          messages.push(`The Product ${name} contains illegal Characters`);
          break;

        case('max'):
          messages.push(`The Product ${name} should not be greater than ${errs['max'].max}`);
          break;
      }
    }
    return messages;
  }

  getValidationMessages(state: NgModel){
      let name: string = state.path?.[0];
      return this.getMessages(state.errors, name);
  }

  //submitting the form
  formSubmitted= false
  
  submitForm(form : NgForm){
    this.formSubmitted = true;
    if(form.valid){
      this.saveProduct();
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  sub$!: Subscription;
  saveProduct(){
    this.sub$ = this.apiService.createProduct(this.newProduct).subscribe({
      next: data => {console.log("Created " + data); 
      this.router.navigate(['/products'])  
    } 
    })
  }

  // get summary of validation messages
  getFormValidationMessages(form: NgForm) :string[]{
    let messages : string[] = [];
    Object.keys(form.controls).forEach(
      k => {
        this.getMessages(form.controls[k].errors, k).forEach(m => messages.push(m));
      }
    );
    return messages;
  }

  ngOnDestroy(){
    this.sub$.unsubscribe();
  }
}
