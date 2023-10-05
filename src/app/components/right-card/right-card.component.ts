import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.css']
})
export class RightCardComponent implements OnInit {

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
