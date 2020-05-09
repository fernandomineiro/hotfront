import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoeditPageRoutingModule } from './tipoedit-routing.module';

import { TipoeditPage } from './tipoedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoeditPageRoutingModule
  ],
  declarations: [TipoeditPage]
})
export class TipoeditPageModule {}
