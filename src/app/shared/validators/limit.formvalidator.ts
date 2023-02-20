import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class LimitValidator{
    static Limit(limit: number): ValidatorFn{
        
        return (control: AbstractControl): ValidationErrors | null => {
            let valueReceived = Number(control.value);

            if(isNaN(valueReceived) || valueReceived > limit ){
                return {limit: {"limitValue" : limit, "actualValue" : valueReceived}}
            }else{
                return null;
            }
        }
    }    
}