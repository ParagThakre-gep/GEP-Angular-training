import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "../shared/validators/limit.formvalidator";

export class ProductFormControl extends FormControl{
    label: string;
    modelProperty: string;

    constructor(label:string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() : string[]{
        let messages: string[] = [];
        if(this.errors){
            for(let errorName in this.errors){
              switch(errorName){
                case('required'):
                  messages.push(`You must enter a value for ${this.label}`);
                  break;
        
                case('minlength'):
                  messages.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength} Characters`);
                  break;
        
                case('pattern'):
                  messages.push(`The Product ${this.label} contains illegal Characters`);
                  break;
        
                case('max'):
                  messages.push(`The Product ${this.label} should not be greater than ${this.errors['max'].max}`);
                  break;

                case('limit'):
                    messages.push(`The ${this.label} must be less than ${this.errors["limit"].limitValue}, you have Entered ${this.errors["limit"].actualValue}`);
                    break;
              }
            }
        }
        return messages;
      }
}

// from group to hold form controls
export class ProductFormGroup extends FormGroup{

    constructor() {
        super({
            productName: new ProductFormControl("Product Name", "productName", "", Validators.required),
            price: new ProductFormControl("Product Price", "price", "", Validators.compose([
                Validators.required,
                Validators.pattern('^[0-9\.]+$'),
                LimitValidator.Limit(5000)
            ])),
            category: new ProductFormControl("Category", "category", "", Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.pattern("^[A-Za-z ]+$")
            ])),
            starRating: new ProductFormControl("Star Rating", "starRating", "", Validators.compose([
                Validators.required,
                Validators.pattern("^[0-5]+$")
            ]))
        });
    }

    //Method to retieve all the controls in the form group
    get productControls(): ProductFormControl[]{
        return Object.keys(this.controls).map(k => this.controls[k] as ProductFormControl);
    }

    //method to retrieve the validation error message for single control in the form group
    getValidationMessages(name :string) : string[]{
        return (this.controls[name] as ProductFormControl).getValidationMessages();
    }

    //to retrieve the summary of validation message
    getFromValidationMessages(): string[]{
        let messages: string[] = [];
        Object.values(this.controls).forEach(e => messages.push(...(e as ProductFormControl).getValidationMessages()))
        return messages;
    }
}