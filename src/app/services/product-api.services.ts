import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IProduct } from "../product/data/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductApiService{
    private productUrl = `http://localhost:5000/api/Product`;

    constructor(private http: HttpClient){

    }

    getProducts() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl)
        .pipe(tap(data => console.log("ALL Products : " + JSON.stringify(data))), 
        catchError(this.handleError))
    }

    getProduct(id : number) : Observable<IProduct>{
        let url = `${this.productUrl}/${id}`
        return this.http.get<IProduct>(url)
        .pipe(tap(data => console.log(JSON.stringify(data))), 
        catchError(this.handleError))
    }
    
    updateProduct(product : IProduct){
        let url = `${this.productUrl}/${product.productId}`

        const headers = new HttpHeaders({'Content-Type' : 'application/json'});

        return this.http.put<IProduct>(url, product, {headers})
        .pipe(tap(data => console.log(JSON.stringify(data))), 
        catchError(this.handleError))
    }

    createProduct(product : IProduct){      
        const headers = new HttpHeaders({'Content-Type' : 'application/json'});

        return this.http.post<IProduct>(this.productUrl, product, {headers})
        .pipe(tap(data => console.log( "Created" + JSON.stringify(data))) ,
        map(() => product), 
        catchError(this.handleError))
    }


    deleteProduct(id : number) {
        let url = `${this.productUrl}/${id}`
        return this.http.delete<IProduct>(url)
        .pipe(tap(data => console.log(JSON.stringify(data))), 
        catchError(this.handleError))
    }


    private handleError(err: any){
        let errorMessage : string;
        if(err.error instanceof ErrorEvent){
            errorMessage = `An Error Occured ${err.error.message}`;
        }else{
            errorMessage = `Back end returned with status code ${err.status} : ${err.error.message}`
        }


        return throwError(() => errorMessage)
    }
}