import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AttribureDirectiveComponent } from "../attr.directive/attribute-directive.comp";
import { ModelFormComponent } from "../reactiveForms/modelForm.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailGuard } from "./guards/product-detail.guard";
import { ProductEditGuard } from "./guards/product-edit.guard";


@NgModule({
    declarations: [
      ProductListComponent,
      ProductAddComponent,
      ProductEditComponent,
      ProductDetailComponent,
      AttribureDirectiveComponent,
      ModelFormComponent
    ],
    imports: [
      ReactiveFormsModule,
      SharedModule,
      RouterModule.forChild([
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', canActivate: [ProductDetailGuard],component: ProductDetailComponent},
        {path: 'products/0/add', component: ProductAddComponent},
        {path: 'products/edit/:id', canDeactivate: [ProductEditGuard],component: ProductEditComponent},
      ])
    ]
})
export class ProductModule { }
