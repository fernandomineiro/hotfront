import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminaPageRoutingModule } from './admina-routing.module';

import { AdminaPage } from './admina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminaPageRoutingModule
  ],
  declarations: [AdminaPage]
})
export class AdminaPageModule {}
