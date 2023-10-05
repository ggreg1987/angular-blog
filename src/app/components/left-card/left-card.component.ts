import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.css']
})
export class TextCardComponent implements OnInit {

  @Input()
  leftImage: string = "";
  @Input()
  textH1: string = "";
  @Input()
  textP: string = "";
  
  ngOnInit(): void {}

}
