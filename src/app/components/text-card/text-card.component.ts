import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  @Input()
  leftImage: string = "";
  @Input()
  textH1: string = "";
  @Input()
  textP: string = "";
  @Input()
  firstImageRight: string = ""
  @Input()
  firstH1Right: string = ""
  @Input()
  firstPright: string = "";
  @Input() 
  secondImageRight: string = "";
  @Input() 
  secondH1Right: string = "";
  @Input()
  secondPright: string = "";
  @Input()
  thirdImageRight: string = "";
  @Input()
  thirdH1Right: string = "";
  @Input()
  thirdPright: string = "";
  
  ngOnInit(): void {}

}
