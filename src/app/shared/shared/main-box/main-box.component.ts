import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.scss']
})
export class MainBoxComponent implements OnInit {

  @Input() data:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
