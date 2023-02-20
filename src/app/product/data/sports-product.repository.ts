import { Injectable } from "@angular/core";
import { ProductApiService } from "src/app/services/product-api.services";

@Injectable({
    providedIn: 'root'
})
export class SportProductRepository{
   
    constructor(private apiService: ProductApiService) {
    }

    getAllProduct(){
        return this.apiService.getProducts();
    }
}