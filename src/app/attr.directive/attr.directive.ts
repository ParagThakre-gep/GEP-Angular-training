import { EventEmitter, Attribute, Directive, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, Output } from "@angular/core";
import { IProduct, Product } from "../product/data/product.model";

@Directive({
    selector:"[sp-attr]"
})
export class SpAttrDirective{

    @Input("sp-attr")
    bgClass: string | null = "";

    @Input("sp-product")
    product: Product = new Product();

    @Output("sp-category")
    click = new EventEmitter<string>()

    // constructor(element: ElementRef, @Attribute("sp-attr") bgClass:string){
    //     element.nativeElement.classList.add(bgClass || "table-success", "font-weight-bold");
    // }

    constructor(private element: ElementRef){
        this.element.nativeElement.addEventListener("click", () => {
            if(this.product != null){
                this.click.emit(this.product.category);
            }
        })
    }

    // ngOnChanges(){
    //     console.log("onchange");
    // }

    // ngOnInit(): void{
    //     this.element.nativeElement.classList.add(this.bgClass || "table-success", "font-weight-bold");
    //     console.log("init");
    // }

    ngOnChanges(changes: SimpleChanges){
        let change = changes["bgClass"]
        let classList = this.element.nativeElement.classList;
        
        if(!change.isFirstChange() && classList.contains(change.previousValue)){
            classList.remove(change.previousValue);
        }
        if(!classList.contains(change.currentValue)){
            classList.add(change.currentValue);
        }
    } 
}