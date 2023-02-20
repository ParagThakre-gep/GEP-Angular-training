import { Component } from "@angular/core";
import { ProductRepository } from "../product/data/product-repository";
import { IProduct, Product } from "../product/data/product.model";

@Component({
    selector: 'attr-demo',
    templateUrl: './product.template.html',
})
export class AttribureDirectiveComponent{
    pageTitle = "Product List";
    products : IProduct[] = [];
    selectedProduct?: string ;  
    private repo : ProductRepository
    constructor() { 
        this.repo = new ProductRepository();
        this.products = this.repo.products;
    }

    newProduct = new Product();

    addProduct(p : Product){
        this.repo.addProduct(p);
    }

    submitForm(){
        this.addProduct(this.newProduct);
    }
}

