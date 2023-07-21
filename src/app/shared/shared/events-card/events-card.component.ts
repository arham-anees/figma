import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent implements OnInit {

  @Input() data?:any;
  constructor() { }

  ngOnInit(): void {
  }

}
