import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrocreatePageRoutingModule } from './carrocreate-routing.module';

import { CarrocreatePage } from './carrocreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrocreatePageRoutingModule
  ],
  declarations: [CarrocreatePage]
})
export class CarrocreatePageModule {}
