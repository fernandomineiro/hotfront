import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipocreatePageRoutingModule } from './tipocreate-routing.module';

import { TipocreatePage } from './tipocreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipocreatePageRoutingModule
  ],
  declarations: [TipocreatePage]
})
export class TipocreatePageModule {}
