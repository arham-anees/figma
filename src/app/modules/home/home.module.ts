import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CardSectionComponent } from './card-section/card-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    SubMenuComponent,
    MainSectionComponent,
    CardSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
