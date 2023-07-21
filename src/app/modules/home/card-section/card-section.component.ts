import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  @Input() data:any = {}
  cardData:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    switch(this.data.type){
      case 'Drinks':
        this.cardData = [
          {
            image:'assets/card-images/drinkman-1.png',
            profileImage:'assets/images/Ellipse 24.png',
            name:'Alan Fresco',
            date:'July 03.',
          },
          {
            image:'assets/card-images/drinkman-2.png',
            profileImage:'assets/images/Ellipse 28.png',
            name:'Hilary Ouse',
            date:'July 24.',
          },
          {
            image:'assets/card-images/drinkman-3.png',
            profileImage:'assets/images/Ellipse 27.png',
            name:'Manuel Internetiquette',
            date:'July 19.',
          },
        ]
        break;
        case 'Travel':
          this.cardData = [
            {
              image:'assets/card-images/travelman-1.png',
              profileImage:'assets/images/Ellipse 24.png',
              name:'Alan Fresco',
              date:'Agusztus 03.',
            },
            {
              image:'assets/card-images/travelman-2.png',
              profileImage:'assets/images/Ellipse 28.png',
              name:'Hilary Ouse',
              date:'Július 24.',
            },
            {
              image:'assets/card-images/travelman-3.png',
              profileImage:'assets/images/Ellipse 27.png',
              name:'Manuel Internetiquette',
              date:'Július 19.',
            },
          ]
        break;
        case 'Events':
          this.cardData = [
            {
              image:'assets/card-images/card1.png',
              profileImage:'assets/images/Ellipse 24.png',
              name:'Alan Fresco',
              date:'July 03.',
            },
            {
              image:'assets/card-images/image2.png',
              profileImage:'assets/images/Ellipse 28.png',
              name:'Hilary Ouse',
              date:'July 24.',
            },
            {
              image:'assets/card-images/image3.png',
              profileImage:'assets/images/Ellipse 27.png',
              name:'Manuel Internetiquette',
              date:'July 19.',
            },
          ]
        break;
    }

  }

}
