import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsCardComponent } from './events-card/events-card.component';
import { MainSectionCardComponent } from './main-section-card/main-section-card.component';
import { MainBoxComponent } from './main-box/main-box.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [EventsCardComponent, MainSectionCardComponent, MainBoxComponent, CardsComponent, FormComponent,FooterComponent,],
  imports: [
    CommonModule,

  ],
  exports:[EventsCardComponent, MainSectionCardComponent, MainBoxComponent, CardsComponent, FormComponent,FooterComponent,]
})
export class SharedModule { }
