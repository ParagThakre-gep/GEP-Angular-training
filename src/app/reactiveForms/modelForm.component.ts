import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../product/data/product.model";
import { ProductFormGroup } from "./form.model";

@Component({
    selector:"model-form",
    templateUrl: "./modelform.html"

})
export class ModelFormComponent{
    
    form : ProductFormGroup;

    constructor() {
        this.form = new ProductFormGroup();
    }

    addProduct(p:Product){
        console.log(JSON.stringify(p));
    }
    newProduct = new Product();
    formSubmitted = false;

    submitForm(form : ProductFormGroup){
        if(form.valid){
            Object.assign(this.newProduct, this.form.value);
            this.formSubmitted = true;
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
      }
}