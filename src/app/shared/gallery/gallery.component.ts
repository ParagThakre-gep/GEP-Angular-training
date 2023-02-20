import { Component } from "@angular/core";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.html',
    styleUrls: ['./gallery.css']
})
export class GalleryComponent{
    pictures : string[] = [];

    constructor(){}

    ngOnInit(){
        this.pictures = new Array(5).fill(0).map(this.generateImage);
    }

    generateImage(){
        console.log(`https://picsum.photos/200/200?ts${Math.random()*10+1}`);
        return `https://picsum.photos/200/200?ts ${Math.random()*10+1}`
    }
}