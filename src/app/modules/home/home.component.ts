import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  drink = {
    icon: 'assets/wine.svg',
    type: 'Drinks',
  }


  travel = {
    icon: 'assets/product-cards/travel.svg',
    type: 'Travel',
  }


  event = {
    icon: 'assets/product-cards/event.svg',
    type: 'Events',
  }




  constructor() { }

  ngOnInit(): void {
  }

}
