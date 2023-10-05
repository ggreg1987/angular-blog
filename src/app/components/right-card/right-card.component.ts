import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.css']
})
export class RightCardComponent implements OnInit {

  @Input()
  imageRight: string = ""
  @Input()
  h1Right: string = ""
  @Input()
  pRight: string = "";

  ngOnInit(): void {}

}
