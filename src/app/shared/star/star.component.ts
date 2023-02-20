import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  cropWidth : number = 90;

  @Input()
  rating!: number;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter();

  onClickRating(){
    console.log("Event emitter caller from star component");
    this.ratingClicked.emit(`The rating clicked ${this.rating}`);
  }

  constructor() { }

  ngOnChanges(){
    this.cropWidth = this.rating*90/5;
  }

  ngOnInit(): void {
  }

}
