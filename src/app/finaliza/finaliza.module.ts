import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizaPageRoutingModule } from './finaliza-routing.module';

import { FinalizaPage } from './finaliza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizaPageRoutingModule
  ],
  declarations: [FinalizaPage]
})
export class FinalizaPageModule {}
