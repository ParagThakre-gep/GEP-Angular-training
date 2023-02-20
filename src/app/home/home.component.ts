import { Component, OnInit, ViewChild } from '@angular/core';
import { GreetingService } from '../services/greeting';
import { GalleryComponent } from '../shared/gallery/gallery.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pageTitle="Welcome to Green Sports Store"

  @ViewChild(GalleryComponent)
  child!: GalleryComponent;

  constructor(public greet: GreetingService) {
  }

  addNewPicture(){
    this.child.pictures.unshift(this.child.generateImage());
  }

  removeFirstPicture(){
    this.child.pictures.shift();
  }

  // constructor(){console.log("Constructor")};
  // ngOnChange(){console.log("ngOnChange")}
  // ngOnInit(){console.log("ngOnInit")}
  // ngDoCheck(){console.log("ngDoCheck")}
  // ngAfterContentInit(){console.log("ngAfterContentInit")}
  // ngAfterViewInit(){console.log("ngAfterViewInit")}
  // ngOnDestroy(){console.log("ngOnDestroy")}
  output!: string;
  login(){
    this.output = this.greet.login();
  }

  logout(){
    this.output = this.greet.logout();
  }

}
