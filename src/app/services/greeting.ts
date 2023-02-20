import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GreetingService{
    login(): string{
        return "Welcome to System";
    }

    logout():string{
        return "Logout for the System";
    }
}