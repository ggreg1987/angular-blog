import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})

export class PictureCardComponent implements OnInit {

  @Input()
  bigPicture: string = "";

  ngOnInit(): void {}
  
}
