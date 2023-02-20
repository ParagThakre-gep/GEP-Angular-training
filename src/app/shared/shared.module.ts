import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpAttrDirective } from '../attr.directive/attr.directive';
import { StarComponent } from './star/star.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConvertToSpacePipe,
    SpAttrDirective,
    StarComponent,
    GalleryComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ConvertToSpacePipe,
    SpAttrDirective,
    StarComponent,
    GalleryComponent
  ],
  imports : [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
