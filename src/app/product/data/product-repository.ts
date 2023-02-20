import { Injectable } from "@angular/core";
import { IProduct } from "./product.model";

@Injectable({
    providedIn:'root'
})
export class ProductRepository{
    private productList: IProduct[] = [
       {
            productId: 1,
            productName :"Soccer Ball",
            price: 1000.678,
            productCode:"SOC-BA1",
            releaseDate : new Date(2022, 11, 10),
            description: "Lorem ipsum some lines",
            starRating: 4.5,
            category: "Soccer",
            imageUrl: "assets/images/soccer.jpeg"
        },
        {
            productId: 2,
            productName :"Bat",
            price: 5000.7878,
            productCode:"SOC-BA1",
            releaseDate : new Date(2022, 11, 20),
            description: "Lorem ipsum some lines",
            starRating: 4.8,
            category: "Cricket",
            imageUrl: "assets/images/bat.jpeg"
        },
        {
            productId: 3,
            productName :"Gloves",
            price: 500.877,
            productCode:"GLS-BA1",
            releaseDate : new Date(2022, 10, 25),
            description: "Lorem ipsum some lines",
            starRating: 4.5,
            category: "Soccer",
            imageUrl: "assets/images/gloves.jpeg"
        },
        {
            productId: 4,
            productName :"Chess Board",
            price: 100.9978,
            productCode:"CHS-CB3",
            releaseDate : new Date(2022, 10, 25),
            description: "Lorem ipsum some lines",
            starRating: 4,
            category: "Chess",
            imageUrl: "assets/images/chess.jpeg"
        }
    ];

    get products(){
        return this.productList;
    }

    getProductById(id:number){
        return this.productList.find(x => x.productId === id);
    }

    addProduct(product: IProduct){
        this.productList.push(product);
    }

    getCount(){
        return this.productList.length;
    }
}