import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarroeditPageRoutingModule } from './carroedit-routing.module';

import { CarroeditPage } from './carroedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarroeditPageRoutingModule
  ],
  declarations: [CarroeditPage]
})
export class CarroeditPageModule {}
