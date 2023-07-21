import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  event_array_1 = [
    {
      profileImage: 'assets/images/profileImage.png',
      name: 'Linguina Nettlewater',
      image: "assets/images/image.png",
      header: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Ut viverra lorem fermentum augue sagittis",
      type: "EVENT",
      date: "July 03.",
      time: "3 min",
    },
    {
      profileImage: 'assets/images/Ellipse 24.png',
      name: 'Alan Fresco',
      image: "assets/images/wine.png",
      header: "Lorem ipsum dolor sit amet consectetur. Lectus mi duis sit adipiscing.",
      text: "Ut viverra lorem fermentum augue sagittis.",
      type: "WINE",
      date: "july 28.",
      time: "8 min",
    }
  ]

  event_array_2 = [
    {
      profileImage: 'assets/images/profileImage.png',
      name: 'Linguina Nettlewater',
      image: "",
      header: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Ut viverra lorem fermentum augue sagittis.",
      type: "EVENT",
      date: "August 03.",
      time: "6 min",
    },
    {
      profileImage: 'assets/images/Ellipse 26.png',
      name: 'Brandon Baltimore',
      image: "",
      header: "Volutpat congue ut aenean ut varius suscipit ut sed. Id velit mauris viverra mauris arcu tincidunt tellus ipsum.",
      text: "Lorem ipsum dolor sit amet consectetur. Ut viverra lorem fermentum augue.",
      type: "WINE",
      date: "july 01.",
      time: "4 min",
    },
    {
      profileImage: 'assets/images/Ellipse 25.png',
      name: 'Matthew Norman',
      image: "",
      header: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Ut viverra lorem fermentum augue sagittis.",
      type: "TRAVEL",
      date: "july 30.",
      time: "9 min",
    }
  ]

  box_array = [
    {
      icon: 'assets/wine.svg',
      title: 'Box 1',
      description: 'Ut viverra lorem fermentum augue sagittis.',
      image: 'assets/box-product-image/wine.png',
    },
    {
      icon: 'assets/product-cards/travel.svg',
      title: 'Box 2',
      description: 'Ut viverra lorem fermentum augue sagittis.',
      image: 'assets/box-product-image/bag.png',
    },
    {
      icon: 'assets/product-cards/gastro.svg',
      title: 'Box 3',
      description: 'Ut viverra lorem fermentum augue sagittis.',
      image: 'assets/box-product-image/food.png',
    },
    {
      icon: 'assets/product-cards/event.svg',
      title: 'Box 4',
      description: 'Ut viverra lorem fermentum augue sagittis.',
      image: 'assets/box-product-image/glass.png',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
