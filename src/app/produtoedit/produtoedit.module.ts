import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoeditPageRoutingModule } from './produtoedit-routing.module';

import { ProdutoeditPage } from './produtoedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoeditPageRoutingModule
  ],
  declarations: [ProdutoeditPage]
})
export class ProdutoeditPageModule {}
